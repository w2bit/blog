import { allAuthors } from 'contentlayer/generated'
import { genPageMetadata } from 'src/app/seo'
import { Editors } from 'src/features/AboutPage/Editors'
import { OurGoal } from 'src/features/AboutPage/OurGoal'

export const metadata = genPageMetadata({ title: 'Sobre' })

export default function Page() {
  const editors = ['default', 'davidson']
  const authorsList = allAuthors.filter((p) => editors.includes(p.slug))
  return (
    <>
      <OurGoal />
      <Editors authorsList={authorsList} />
    </>
  )
}
