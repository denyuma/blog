import { NextPage } from "next"
import ProfileIconAndName from "../../molecules/ProfileIconAndName"
import ProfileDescription from "../../molecules/ProfileDescription"
import styles from "./Profile.module.css"

const Profile: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <ProfileIconAndName />
      <ProfileDescription />
    </div>
  )
}

export default Profile