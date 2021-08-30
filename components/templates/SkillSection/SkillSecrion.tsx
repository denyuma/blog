import { NextPage } from "next"
import SectionTitle from "../../atoms/SectionTitle"
import Skills from "../../molecules/Skills"

const HomeSection: NextPage = () => {
  return (
    <section className="mt-24">
      <SectionTitle
        title="Languages/Framework"
        subTitle="言語/フレームワーク"
      />
      <Skills />
    </section>
  )
}

export default HomeSection