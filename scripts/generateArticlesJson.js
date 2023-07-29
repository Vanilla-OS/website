const fs = require("fs");
const path = require("path");
const glob = require("glob");

function cleanArticlesDir(articlesDir) {
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
      `../public/articles/${date}`
    );
    fs.mkdirSync(individualOutputDir, { recursive: true });

    const individualOutputFilePath = path.join(
      individualOutputDir,
      `${slug}.json`
    );
    fs.writeFileSync(
      individualOutputFilePath,
      JSON.stringify(articleData, null, 2)
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
  const headerLines = headerContent
    .split("\n")
    .filter((line) => line.trim() !== "");

  const header = {};
  for (const line of headerLines) {
    const [key, value] = line.split(":").map((part) => part.trim());
    if (key === "keywords") {
      header[key] = value.split(",").map((keyword) => keyword.trim());
    } else {
      header[key] = value.replace(/^"(.*)"$/, "$1"); // remove quotes from the value if any
    }
  }

  const articleContent = content.slice(match[0].length).trim();

  return { ...header, content: articleContent };
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
