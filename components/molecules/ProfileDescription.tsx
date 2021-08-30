import { NextPage } from "next"
import styles from "./ProfileDescription.module.css"

const ProfileDescription : NextPage = () => {
  return (
    <div className="text-xl" >
      <table className="mt-12 ml-12 text-lg" >
        <tbody>
          <tr>
            <td className="w-32 h-12 font-medium  " >Affiliation</td>
            <td>京都工芸繊維大学</td>
          </tr>
          <tr>
            <td className="w-32 h-12 font-medium " >Age</td>
            <td>20(B3)</td>
          </tr>
          <tr>
            <td className="w-32 h-12 font-medium " >Contacts</td>
            <td>yuuma3895[at]yacoo.co.jp</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProfileDescription