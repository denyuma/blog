import { NextPage } from "next"
import Image from "../../atoms/Image/Image"
import styles from "./ProfileIconAndName.module.css"

const Profile: NextPage = () => {
  return (
    <div className={styles.wrapper} >
      <Image />
      <h3 className={styles.name} >Den Yuma</h3>
    </div>
  )
}

export default Profile