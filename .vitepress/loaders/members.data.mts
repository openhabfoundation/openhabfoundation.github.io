import { createContentLoader } from "vitepress";

export default createContentLoader("**/*.md", {
  includeSrc: true,
  transform(page) {
    return page
      .filter((page) => page.frontmatter.layout === "MemberPage")
      .map((page) => {
        const begin = page.src!.lastIndexOf("---");
        const end = page.src!.indexOf("<!-- more -->");
        const excerpt = page.src!.substring(begin + 3, end).trim();

        return {
          title: page.frontmatter.title,
          url: page.url,
          logo: page.frontmatter.logo,
          link: page.frontmatter.link,
          excerpt: excerpt,
        };
      });
  },
});
