---
title: "Interview with Dharun: Challenges and Successes in Documentation and Translation for Vanilla OS 2 Orchid"
description: "In this interview, we sit down with Dharun, the head of documentation and translation for Vanilla OS, to explore the intricacies of managing documentation and translations for Vanilla OS 2 Orchid."
published: true
date: 2024-07-13
keywords:
  - Vanilla OS
  - Vanilla OS Orchid
  - Orchid
  - Download
  - Developer Preview
  - Beta
  - Interview
  - Documentation
layout: article
comments: true
---

Dharun shares his experiences, the challenges faced, and the successes achieved in ensuring that the documentation is comprehensive and accessible to a global audience.

The purpose of these interviews is to give our community a comprehensive understanding of the development process and the new features of Vanilla OS 2 Orchid, the second version of our operating system, which is set for release soon.

### Could you please introduce yourself and describe your role within the Vanilla OS team, Dharun?

Hello, thank you for this opportunity. My name is Dharun Krishna, and I come from a small city in India. Currently, I am pursuing a degree in computer science. Outside of my academic pursuits, I am passionate about writing and contributing to open-source projects.

Within the Vanilla OS project, I play a pivotal role in leading the documentation and localization teams. My responsibilities involve crafting new documentation, overseeing translations to ensure accessibility across languages, and contributing as a core team member. This includes conducting code reviews, maintaining images, and rigorously testing on local environments.

### How did you get involved with the project and what motivated you to contribute to documentation and translation?

My journey into open-source began during my undergraduate studies driven by a passion for writing and content management. I first joined the [tldr-pages](https://github.com/tldr-pages/tldr) project, where I have curated and contributed to cheatsheets for a variety of command-line tools, honing my skills in writing and proofreading within the FOSS community.

My interest in software translation grew as I used applications in my native language and discovered translated Linux applications. This motivated me to contribute by translating missing strings and localizing my frequently used day-to-day applications.

My involvement with Vanilla OS began in late 2022 when I responded to Mirko's invitation to participate in the closed beta testing of Vanilla OS Kinetic. Intrigued by the opportunity, I joined the Discord server and actively engaged with the community. This initial engagement paved the way for me to contribute significantly to documenting the project and collaborating closely with fellow contributors to enhance user resources.

### What were your main challenges in managing the documentation for Vanilla OS 2 Orchid?

Vanilla OS 2 Orchid is a complete rewrite of Vanilla OS Kinetic and is based on top of snapshots of Debian Sid and OCI images. We have introduced a lot of tools and features and improved many of our existing tools like Apx, ABRoot, etc. Keeping up with the rapid development cycle has been a difficult undertaking.

I was able to work on the GUADEC presentation, blog posts, and translation strings during this period and was actively involved with development. However, due to personal time constraints and a lack of members in the documentation team, I was unable to add new documentation before the Orchid Beta release.

We recently had a meeting to discuss the new documentation structure. With a set structure in place, *I am optimistic that I will be able to complete the core [documentation](https://github.com/Vanilla-OS/documentation/issues/112) and [handbook guides](https://github.com/Vanilla-OS/handbook/issues/104) before the stable release*.

### Can you describe the process of reaching out to translators and how they got involved with the project?

This has been a relatively easy process, requiring no intervention from our side. Most of the translators are passionate Vanilla OS users and testers who wanted to get involved and have contributed by translating our project components into various languages.

We have an active community of translators in our Discord server, where they suggest improvements to our source strings and processes. Their enthusiasm and contributions have been invaluable in making Vanilla OS more accessible to a global audience.

### How do the translation efforts work within the team, and what tools or methods do you find most effective?

At Vanilla OS, we use [Weblate](https://weblate.org/) as our localization platform to receive new translations and manage translations for our components.

Weblate is the best FOSS localization platform out there, with support for multiple translation file formats. It provides an intuitive and modern feature-rich interface suitable for both new and non-technical translators and developers. On behalf of the Vanilla OS Project, I thank them for hosting our translation strings under the Libre plan on their main [Hosted Weblate](https://hosted.weblate.org/) instance.

Within our team, core developers draft the source strings for our components, which I subsequently proofread. We typically utilize Gettext PO/JSON file formats to manage translations. These translation files are integrated with Weblate, facilitating the automation of new pull requests to our upstream project whenever there are additions or modifications to strings. I routinely merge these translation pull requests bi-weekly, based on the changes identified in the PRs diff.

We enhance our workflow by utilizing Weblate's string descriptions feature to provide additional context for strings. Additionally, we leverage the Screenshots feature to visually illustrate the placement of translated strings within our GUI applications, ensuring accuracy and clarity in localization efforts.

### How did community feedback influence the documentation and translation process?

Community feedback has been instrumental in the whole process of adding and managing documentation and translations.

During Vanilla OS Kinetic, concerns were raised about having separate Documentation and Handbook websites. We addressed this by designing our in-house Documentation server called [Chronos](https://github.com/Vanilla-OS/Chronos), which combines all our documentation and guides into a unified place for easier access.

We are always open to feedback on our documentation and translation processes from our users and contributors, and their input has been invaluable in helping us improve and streamline these processes.

### How do you ensure that translations are accurate and consistent across different languages?

Ensuring accurate and consistent translations across different languages is crucial for the quality and usability of our project. While I use machine translation tools like Google Translate to validate additions or modifications to pull requests, ensuring complete accuracy can be challenging without native proficiency in every language. If you notice any grammatical errors or inconsistencies in our translated strings. In that case, I encourage you to fix them directly on [Weblate](https://hosted.weblate.org/projects/vanilla-os/) or reach out to us on Discord so we can address them promptly. Your feedback and contributions are highly valued in maintaining the quality of our translations.

### What are your plans for the future of documentation and translation in Vanilla OS after the release of Orchid?

Currently, the core documentation and translation team consists solely of me, but I have plans to expand our team in the future. I have compiled a list of individuals interested in contributing to the documentation for the Vanilla OS project, and I plan to reach out to them after the stable release of Vanilla OS 2 Orchid. I will start them off with simple tasks to get them acquainted with our processes and tools.

Additionally, I am considering adding language coordinators or reviewers for languages with multiple translators. These coordinators would help ensure consistency and accuracy across translations and keep them up-to-date with our latest tools and features.

Expanding our team and implementing these strategies will help strengthen our documentation and translation efforts, making Vanilla OS more accessible and user-friendly for a global audience.

### Which feature do you think is the most innovative in Vanilla OS 2 Orchid and why?

In my opinion, the most innovative feature in Vanilla OS 2 Orchid is the use of [Vib](https://github.com/Vanilla-OS/Vib) for building OCI images of the host system with ease. This tool enables us to create clear, understandable definitions using recipes, which helps in maintaining well-structured and consistent builds of our images. It streamlines the process of image creation and management, enhancing efficiency and reliability in deploying Vanilla OS.

Following closely, I would highlight ABRoot and VSO container as default shell as other significant innovative features. These additions contribute to enhancing user experience and functionality within the operating system environment.

### What would you like to say to our community of users and developers regarding the importance of documentation and translation?

Documentation serves as a fundamental pillar of any project, providing clear and well-defined information that allows users, regardless of their background, to understand and utilize a tool within minutes. To enhance documentation:

- Ensure it is organized logically with clear headings and sections.
- Include examples and use cases to illustrate practical applications.
- Regularly update documentation to reflect changes and improvements in the tool.

Translation is equally vital as it enables a project to reach a wider audience by overcoming language barriers. It ensures that the project is accessible and understandable to diverse communities globally, fostering inclusivity and collaboration. To improve translation efforts:

- Encourage community involvement in translating content into different languages.
- Use localization platforms like Weblate, Crowdin, etc to manage translations efficiently.
- Provide context and guidelines to translators to maintain accuracy and consistency across languages.

Both documentation and translation play crucial roles in enhancing the usability and impact of a project, making it more accessible and user-friendly for everyone involved. Your contributions to these areas are invaluable in shaping a positive user experience and expanding the project's reach globally.

### How can interested individuals contribute to the documentation and translation efforts, and where can they find more information?

If you're interested in contributing to our documentation efforts, you can get involved by joining the discussion on our Discord server's documentation channel or participating in discussions on [GitHub Discussions](https://github.com/Vanilla-OS/documentation/discussions/categories/general).

For those interested in joining our translation efforts, you can begin translating directly on [Weblate](https://hosted.weblate.org/projects/vanilla-os/) or connect with us through the translation channel on our Discord server.

We welcome contributions from individuals of any skill level and sincerely appreciate your interest in helping us enhance our project.

---

We hope this interview with Dharun has provided you with a deeper understanding of the documentation and translation efforts behind the upcoming second version of Vanilla OS. Stay tuned for more updates and insights as we continue to innovate and improve your system.

If you're interested in contributing or learning more, be sure to visit our website and join our vibrant community.
