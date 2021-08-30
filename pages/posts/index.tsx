import { GetStaticProps, NextPage } from "next"
import Link from 'next/link';
import Date from '../../components/date';
import { getPostsData } from "../../lib/posts";

import utilStyles from "../../styles/utils.module.css"
import { postData } from "../../types";

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData: Array<postData> = getPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

type Props = {
	allPostsData: Array<postData>
}

const Posts: NextPage<Props> = ({allPostsData}) => {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
  )
}

export default Posts