import path from "path"
import fs from "fs/promises"
import parseFrontMatter from "front-matter"
import invariant from "tiny-invariant"
import { marked } from "marked"
import hljs from "highlight.js"

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
const postsPath = path.join(__dirname, "../../", "posts")
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

  const res: Record<string,any> = {}

  try {
    res["__dirname"] = await fs.readdir(__dirname)
  } catch {
    res["__dirname"] = "error"
  }

  try {
    res["__dirname/posts"] = await fs.readdir(path.join(__dirname, "./", "posts"))
  } catch {
    res["__dirname/posts"] = "error"
  }

  try {
    res["__dirname/../"] = await fs.readdir(path.join(__dirname, "../"))
  } catch {
    res["__dirname/../"] = "error"
  }

  try {
    res["__dirname/../../"] = await fs.readdir(path.join(__dirname, "../../"))
  } catch {
    res["__dirname/../../"] = "error"
  }

  try {
    res["__dirname/../../api"] = await fs.readdir(path.join(__dirname, "../../", "api"))
  } catch {
    res["__dirname/../../api"] = "error"
  }

  try {
    res["__dirname/../_build"] = await fs.readdir(path.join(__dirname, "../_build"))
  } catch {
    res["__dirname/../_build"] = "error"
  }

  try {
    res["__dirname/../../../"] = await fs.readdir(path.join(__dirname, "../../../"))
  } catch {
    res["__dirname/../../../"] = "error"
  }

  try {
    res["__dirname/../../../../"] = await fs.readdir(path.join(__dirname, "../../../../"))
  } catch {
    res["__dirname/../../../../"] = "error"
  }

  try {
    res["__dirname/../../../../../"] = await fs.readdir(path.join(__dirname, "../../../../../"))
  } catch {
    res["__dirname/../../../../../"] = "error"
  }

  try {
    res["__dirname/../../../../../../"] = await fs.readdir(path.join(__dirname, "../../../../../../"))
  } catch {
    res["__dirname/../../../../../../"] = "error"
  }

  return res

  // return Promise.all(
  //   dir.map(async (filename) => {
  //     const filepath = path.join(postsPath, filename)
  //     console.log("filepath",filepath)
  //     const file = await fs.readFile(filepath)
  //     console.log("file",file)
  //     const { attributes } = parseFrontMatter(file.toString())
  //     invariant(
  //       isValidPostAttributes(attributes),
  //       `${filename} has bad meta data`,
  //     )
  //     return {
  //       slug: filename.replace(/\.md$/, ""),
  //       ...attributes,
  //     }
  //   }),
  // )
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
