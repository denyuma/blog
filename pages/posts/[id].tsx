import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { allPostsIdsType, postData } from '../../types';

export const getStaticPaths: GetStaticPaths = async () => {
	const paths: Array<allPostsIdsType> = getAllPostIds();

	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData: postData = await getPostData(params.id);

	return {
		props: {
			postData,
		},
	};
}

type Props = {
	postData: postData,
}

const Post: NextPage<Props> = ({ postData }) => {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<Date dateString={postData.date} />
			<br />

			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}

export default Post