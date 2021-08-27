import { NextPage } from "next"

type Props = {
  title: string,
  subTitle: string,
}

const SectionTitle: NextPage<Props> = ({ title, subTitle }) => {
  return (
    <div className="text-center mt-12" >
      <h2 className="text-3xl font-bold text-green-700" >{title}</h2>
      <h4 className="text-base font-normal text-gray-400" >{subTitle}</h4>
    </div>
  )
}

export default SectionTitle
