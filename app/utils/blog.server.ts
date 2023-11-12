export async function getBlog(slug: string) {
  // TODO get blog from github
  // parse markdown
  // return frontmatter and blog content
  return {
    frontmatter: {
      title: "My Blog",
      tags: ["javascript", "typescript", "nodejs"]
    },
    content: "This is my blog content"
  };
}
