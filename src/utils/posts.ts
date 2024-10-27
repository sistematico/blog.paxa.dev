import { getCollection } from 'astro:content';

export const getCollectionByName = async () => {
  const posts = await getCollection('posts');

  if (posts && posts.length > 0) {
    return posts.filter(({ data }) => {
      return import.meta.env.PROD ? !data.draft : true;
    });
  }
  
  return [];
}