import { NextPage } from "next"
import { ReactNode } from "react"
import styles from "./SkillItem.module.css"

type Props = {
  children: ReactNode,
  bgColor: string,
  color?: string,
  text: string,
  rotate?: boolean,
}

const SkillItem: NextPage<Props> = ({children, bgColor, color, text, rotate}) => {
  if (rotate) {
    return (
      <div className={`flex ${bgColor} ${color} rounded-full px-4 py-2 ml-5`}> 
        <div className={styles.rotate} >
            {children}
        </div>
        <span className="text-base ml-1" >{text}</span>
      </div>
    )
  }

  return (
    <div className={`flex ${bgColor} ${color} rounded-full px-4 py-2 ml-5`}> 
      {children}
      <span className="text-base ml-1" >{text}</span>
    </div>
  )
}

export default SkillItem