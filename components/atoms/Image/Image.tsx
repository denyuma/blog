import { NextPage } from "next"
import styles from "./Image.module.css"

type Props = {
  width: number,
  height: number,
  src: string,
}

const Image: NextPage<Props> = ({width, height, src}) => {
  return (
    <img 
      src="/images/profile.jpg" 
      alt="profile image" 
      className="w-32 h-32 rounded-full"
    />
  )
}

export default Image