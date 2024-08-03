const fs = require("fs");
const path = require("path");
const glob = require("glob");
const yaml = require("js-yaml");
const { marked } = require("marked");
const { DOMParser, XMLSerializer } = require("@xmldom/xmldom");

function cleanArticlesDir(articlesDir) {
  console.log(`Cleaning articles directory: ${articlesDir}`);

  if (fs.existsSync(articlesDir)) {
    const files = fs.readdirSync(articlesDir);

    for (const file of files) {
      const filePath = path.join(articlesDir, file);
      const isDirectory = fs.statSync(filePath).isDirectory();

      if (isDirectory) {
        cleanArticlesDir(filePath);
      } else {
        fs.unlinkSync(filePath);
      }
    }

    fs.rmdirSync(articlesDir);
  }
}

function readArticles(articlesPath) {
  const articleFiles = glob.sync(`${articlesPath}/*.md`);
  const articles = [];

  for (const file of articleFiles) {
    const fileContent = fs.readFileSync(file, "utf-8");
    const { title, description, date, content } =
      parseArticleHeader(fileContent);

    const slug = slugify(title);

    const articleData = {
      title,
      slug,
      description,
      date,
      keywords: [],
      content,
    };

    articles.push(articleData);

    const individualOutputDir = path.join(
      __dirname,
      `../public/articles/${date}`,
    );
    fs.mkdirSync(individualOutputDir, { recursive: true });

    const individualOutputFilePath = path.join(
      individualOutputDir,
      `${slug}.json`,
    );
    fs.writeFileSync(
      individualOutputFilePath,
      JSON.stringify(articleData, null, 2),
    );
    console.log(`Generated JSON file for article: ${title}`);
  }

  return articles;
}

function parseArticleHeader(content) {
  const headerRegex = /---\n([\s\S]*?)\n---/;
  const match = content.match(headerRegex);

  if (!match || match.length < 2) {
    return { title: "", description: "", date: "", keywords: [], content: "" };
  }

  const headerContent = match[1];

  try {
    const header = yaml.load(headerContent);

    if (header.date) {
      header.date = formatDate(header.date);
    }

    const articleContent = content.slice(match[0].length).trim();

    return { ...header, content: articleContent };
  } catch (error) {
    console.log(
      `Invalid YAML format in the article header. Error: ${error.message}`,
    );
    return { title: "", description: "", date: "", keywords: [], content: "" };
  }
}

function formatDate(date) {
  const articleDate = new Date(date);
  const year = articleDate.getFullYear();
  const month = String(articleDate.getMonth() + 1).padStart(2, "0");
  const day = String(articleDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/--+/g, "-")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

const articlesPath = path.join(__dirname, "../articles");
const articlesOutputDir = path.join(__dirname, "../public/articles");

cleanArticlesDir(articlesOutputDir);

const articles = readArticles(articlesPath);
const outputFilePath = path.join(__dirname, "../public/articles.json");

fs.writeFileSync(outputFilePath, JSON.stringify(articles, null, 2));

console.log("Articles JSON files generated.");

// Generate Atom XML file

function generateAtomFeed(articles, marked) {
  const doc = new DOMParser().parseFromString(
    `<?xml version="1.0" encoding="utf-8"?><feed xmlns="http://www.w3.org/2005/Atom"></feed>`,
    "application/xml",
  );

  const feed = doc.documentElement;

  const createAndAppendElement = (tagName, textContent) => {
    const element = doc.createElement(tagName);
    element.textContent = textContent;
    feed.appendChild(element);
  };

  const createAndAppendLink = (rel, href) => {
    const link = doc.createElement("link");
    link.setAttribute("rel", rel);
    link.setAttribute("href", href);
    feed.appendChild(link);
  };

  createAndAppendElement("id", "https://vanillaos.org/blog/");
  createAndAppendElement("title", "Vanilla OS Blog");
  createAndAppendElement(
    "subtitle",
    "Check out what's happening in Vanilla OS world.",
  );

  createAndAppendLink("alternate", "https://vanillaos.org/blog/");
  createAndAppendLink("self", "https://vanillaos.org/feed.xml");

  createAndAppendElement(
    "logo",
    "https://vanillaos.org/assets/images/brand/vanillaos-logo-icon.png",
  );
  createAndAppendElement("icon", "https://vanillaos.org/assets/favicon.ico");
  createAndAppendElement("updated", new Date().toISOString());

  for (const article of articles) {
    const entry = doc.createElement("entry");

    const createAndAppendEntryElement = (tagName, textContent) => {
      const element = doc.createElement(tagName);
      element.textContent = textContent;
      entry.appendChild(element);
    };

    createAndAppendEntryElement("title", article.title);

    const entryLink = doc.createElement("link");
    entryLink.setAttribute(
      "href",
      `https://vanillaos.org/blog/article/${article.date}/${article.slug}`,
    );
    entry.appendChild(entryLink);

    createAndAppendEntryElement(
      "id",
      `https://vanillaos.org/blog/article/${article.date}/${article.slug}`,
    );
    createAndAppendEntryElement("updated", article.date);
    createAndAppendEntryElement("summary", article.description);

    const entryContent = doc.createElement("content");
    entryContent.setAttribute("type", "html");
    entryContent.textContent = marked(article.content, {
      mangle: false,
      headerIds: false,
    });
    entry.appendChild(entryContent);

    feed.appendChild(entry);
  }

  return new XMLSerializer().serializeToString(doc);
}

const atomFeed = generateAtomFeed(articles, marked);
const atomFilePath = path.join(__dirname, "../public/feed.xml");

fs.writeFileSync(atomFilePath, atomFeed);

console.log("Atom feed generated.");
