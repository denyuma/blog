import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { allPostsIdsType, postData } from '../types';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsData = (): Array<postData> => {
	const fileNames: Array<string> = fs.readdirSync(postsDirectory);
	const allPostsData: Array<postData> = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, '');

		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf-8');

		const matterResult = matter(fileContents);
		return {
			id,
			title: matterResult.data.title,
			date: matterResult.data.date,
		};
	});

	return allPostsData
}



export const getAllPostIds = (): Array<allPostsIdsType> => {
	const fileNames: Array<string> = fs.readdirSync(postsDirectory);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		};
	});
}

export const getPostData = async (id): Promise<postData> => {
	const fullPath: string = path.join(postsDirectory, `${id}.md`);
	const fileContents: string = fs.readFileSync(fullPath, 'utf8');

	const matterResult = matter(fileContents);

	const processedContent = await remark().use(html).process(matterResult.content);

	const contentHtml: string = processedContent.toString();

	return {
		id,
		contentHtml,
		title: matterResult.data.title,
		date: matterResult.data.date,
	};
}
