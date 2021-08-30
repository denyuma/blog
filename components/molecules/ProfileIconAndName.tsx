import { NextPage } from "next"
import Image from "../atoms/Image"

const Profile: NextPage = () => {
  return (
    <div className="mt-8" >
      <Image />
      <h3 className="text-center mt-2 text-2xl font-medium" >Den Yuma</h3>
    </div>
  )
}

export default Profile