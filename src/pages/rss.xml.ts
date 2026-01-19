import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '../data/site.config'

export async function GET(context: any) {
	const posts = await getCollection('blog')
	
	// Handle empty blog collection
	if (!posts || posts.length === 0) {
		return rss({
			title: siteConfig.title,
			description: siteConfig.description,
			site: context.site,
			items: []
		})
	}
	
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `post/${post.slug}/`
		}))
	})
}
