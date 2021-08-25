import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getPostsData } from '../lib/posts';
import { postData } from '../types';
import AboutSection from '../components/templates/AboutSection';

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

const Home: NextPage<Props>= ({ allPostsData }) => {
	return (
		<Layout home>
			<Head>
				<title>
					den's portfolio
				</title>
			</Head>
			<AboutSection />
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
		</Layout>
	);
}

export default Home