import { NextPage } from "next"
import styles from "./SectionTitle.module.css"

type Props = {
  title: string,
  subTitle: string,
}

const SectionTitle: NextPage<Props> = ({ title, subTitle }) => {
  return (
    <div className={styles.wrapper} >
      <h2 className={styles.title} >{title}</h2>
      <h4 className={styles.subTitle} >{subTitle}</h4>
    </div>
  )
}

export default SectionTitle