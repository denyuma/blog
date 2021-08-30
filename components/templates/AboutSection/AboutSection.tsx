import { NextPage } from "next"
import SectionTitle from "../../atoms/SectionTitle"
import Profile from "../../organisms/Profile"

const HomeSection: NextPage = () => {
  return (
    <section>
      <SectionTitle
        title="About Me"
        subTitle="私について"
      />
      <Profile />
    </section>
  )
}

export default HomeSection