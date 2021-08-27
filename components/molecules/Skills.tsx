import { NextPage } from "next"
import { SiJavascript, SiReact, SiNextDotJs, SiNodeDotJs, SiGraphql, SiApollographql, SiGo } from "react-icons/si"
import SkillItem from "../atoms/SkillItem/SkillItem"

const Skills: NextPage = () => (
  <>
    <div className="flex mt-5" aria-label="JavaScript" >
      <SkillItem bgColor="bg-yellow-300" text="JavaScript" ml="5">
        <SiJavascript size="1.4rem" />
      </SkillItem>
      <SkillItem  bgColor="bg-blue-500" text="React.js" rotate={true} ml="5" >
        <SiReact size="1.4rem" />
      </SkillItem>
      <SkillItem  bgColor="bg-gray-800" color="text-gray-200" text="Next.js" ml="5" >
        <SiNextDotJs size="1.4rem" />
      </SkillItem>
      <SkillItem bgColor="bg-green-500" text="Node.js" ml="5">
        <SiNodeDotJs size="1.4rem" />
      </SkillItem>
    </div>
    <div className="flex mt-3 " aria-label="GraphQL" >
      <SkillItem bgColor="bg-pink-500" text="GraphQL" ml="5">
        <SiGraphql size="1.4rem" />
      </SkillItem>
      <SkillItem bgColor="bg-indigo-600" color="text-gray-200" text="Apollo.js" ml="5">
        <SiApollographql size="1.4rem" />
      </SkillItem>
    </div>
    <div className="flex mt-3 " aria-label="Golang" >
      <SkillItem bgColor="bg-blue-400" text="Golang" ml="5">
        <SiGo size="1.7rem" />
      </SkillItem>
    </div>
  </>
)

export default Skills