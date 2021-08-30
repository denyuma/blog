import { NextPage } from "next"
import ProfileIconAndName from "../molecules/ProfileIconAndName"
import ProfileDescription from "../molecules/ProfileDescription"
import styles from "./Profile.module.css"
import SNSLinks from "../molecules/SNSLinks"

const Profile: NextPage = () => {
  return (
    <div className="flex justify-center" >
      <ProfileIconAndName />
      <div >
        <ProfileDescription />
        <SNSLinks />
      </div>
    </div>
  )
}

export default Profile