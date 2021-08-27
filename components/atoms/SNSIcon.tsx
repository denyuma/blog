import { NextPage } from "next"
import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  href: string,
  bgColor: string,
  text: string,
}

const SNSIcon: NextPage<Props> = ({children, href, bgColor, text}) => (
  <div className={`${bgColor} text-gray-200 rounded-full ml-10`}> 
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-28" >
      {children}
      <span className="text-base ml-1" >{text}</span>
    </a>
  </div>
)

export default SNSIcon