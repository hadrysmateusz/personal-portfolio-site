import path from "path"
import fs from "fs/promises"
import parseFrontMatter from "front-matter"
import invariant from "tiny-invariant"
import { marked } from "marked"
import hljs from "highlight.js"

// TODO: this is an attempt to temporarily force these files to be included in build, but a permanent solution is required, probably by using mdx routes like for projects
import "../../posts/background-properties-explained.md"
import "../../posts/css-gradients-guide.md"
import "../../posts/css-list-styling.md"
import "../../posts/font-shorthand.md"
import "../../posts/js-get-all-characters-in-string.md"
import "../../posts/gradient-text.md"

export type Post = {
  slug: string
  title: string
  shortDescription: string
  category: string
  coverImage: string
  html: string
}

export type PostMarkdownAttributes = {
  title: string
  shortDescription: string
  category: string
  coverImage: string
}

// path relative to server output
const postsPath = path.join(__dirname, "../..", "posts")
console.log("__dirname",__dirname)
console.log("postsPath",postsPath)

function isValidPostAttributes(
  attributes: any,
): attributes is PostMarkdownAttributes {
  return (
    attributes?.title && attributes?.shortDescription && attributes?.category
  )
}

export async function getPosts() {
  console.log("__dirname",__dirname)
  console.log("postsPath",postsPath)
  const dir = await fs.readdir(postsPath)
  console.log("dir",dir)

  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename))
      console.log("file",file)
      const { attributes } = parseFrontMatter(file.toString())
      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data`,
      )
      return {
        slug: filename.replace(/\.md$/, ""),
        ...attributes,
      }
    }),
  )
}

export async function getPost(slug: string) {
  const filepath = path.join(postsPath, slug + ".md")
  console.log("__dirname",__dirname)
  console.log("postsPath",postsPath)
  console.log("filepath",filepath)
  const file = await fs.readFile(filepath)
  const { attributes, body } = parseFrontMatter(file.toString())
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`,
  )
  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    },
  })
  const html = marked(body)
  return {
    slug,
    html,
    ...attributes,
  }
}
