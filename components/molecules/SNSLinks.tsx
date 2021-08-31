import { NextPage } from "next"
import { FaGithub } from "react-icons/fa"
import { BiLinkAlt } from "react-icons/bi"
import { BsPencil } from "react-icons/bs"
import SNSIcon from "../atoms/SNSIcon"


const SNSLinks: NextPage = () => (
  <div className="flex" >
    <SNSIcon href="https://github.com/denyuma" bgColor="bg-gray-700" text="GitHub" >
      <FaGithub size="1.4rem" />
    </SNSIcon>
    <SNSIcon href="https://atcoder.jp/users/omattosan" bgColor="bg-green-500" text="AtCoder"  >
      <BiLinkAlt size="1.4rem" />
    </SNSIcon>
    <SNSIcon href="/posts/" bgColor="bg-blue-400" text="Blog" >
      <BsPencil size="1.4rem" />
    </SNSIcon>
  </div>
)

export default SNSLinks