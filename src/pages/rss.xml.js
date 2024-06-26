import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
const title = import.meta.env.PUBLIC_APP_NAME;
const description = import.meta.env.PUBLIC_APP_DESC;

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title,
		description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/posts/${post.slug}/`,
		})),
	});
}
