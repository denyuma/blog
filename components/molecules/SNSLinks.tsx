import { NextPage } from "next"
import { FaGithub } from "react-icons/fa"
import { BiLinkAlt } from "react-icons/bi"
import SNSIcon from "../atoms/SNSIcon"


const SNSLinks: NextPage = () => (
  <div className="flex" >
    <SNSIcon href="https://github.com/denyuma" bgColor="bg-gray-700" text="GitHub" ml="10">
      <FaGithub size="1.4rem" />
    </SNSIcon>
    <SNSIcon href="https://atcoder.jp/users/omattosan" bgColor="bg-green-500" text="AtCoder" ml="5" >
      <BiLinkAlt size="1.4rem" />
    </SNSIcon>
  </div>
)

export default SNSLinks