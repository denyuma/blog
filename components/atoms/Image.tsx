import { NextPage } from "next"

const Image: NextPage= () => {
  return (
    <img 
      src="/images/profile.jpg" 
      alt="profile image" 
      className="w-40 h-40 rounded-full"
    />
  )
}

export default Image