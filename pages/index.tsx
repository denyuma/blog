import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import AboutSection from '../components/templates/AboutSection';
import SkillSection from '../components/templates/SkillSection';

const Home: NextPage = () => {
	return (
		<Layout home>
			<Head>
				<title>
					den's portfolio
				</title>
			</Head>
			<AboutSection />
			<SkillSection />
		</Layout>
	);
}

export default Home