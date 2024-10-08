import fs from 'fs'
import matter from 'gray-matter'
import 'katex/dist/katex.css'
import path from 'path'
import { remark } from 'remark'
import 'src/css/prism.css'
import { markdownAstRemarkPlugin } from 'src/layouts/PostLayout/markdownAstRemarkPlugin'

const postsDirectory = path.join(process.cwd(), 'data/blog')

export async function getHeadingsTreeFromArticle(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  const articleData = getArticleDataFromFile(fileContents)
  const markdown = articleData.content
  const processedContent = await convertMarkdownToVFile(markdown)
  return processedContent.data.headings
}

function getArticleDataFromFile(fileContents) {
  return matter(fileContents)
}

async function convertMarkdownToVFile(markdown) {
  return await remark().use(markdownAstRemarkPlugin).process(markdown)
}
