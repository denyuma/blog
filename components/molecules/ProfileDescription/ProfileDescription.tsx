import { NextPage } from "next"
import Link from "next/link"
import styles from "./ProfileDescription.module.css"

const ProfileDescription : NextPage = () => {
  return (
    <div className={styles.wrapper} >
      <table className={styles.descriptionTable} >
        <tbody>
          <tr>
            <td className={styles.descriptionTitle} >Affiliation</td>
            <td>京都工芸繊維大学</td>
          </tr>
          <tr>
            <td className={styles.descriptionTitle} >Age</td>
            <td>20(B3)</td>
          </tr>
          <tr>
            <td className={styles.descriptionTitle} >Contacts</td>
            <td>yuuma3895[at]yacoo.co.jp</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProfileDescription