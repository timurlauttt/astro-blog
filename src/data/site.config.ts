interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://your-blog.vercel.app/', // Write here your website url (update after deployment)
	author: 'Urip Yoga Pangestu', // Site author
	title: 'Blog - Urip Yoga Pangestu', // Site title.
	description: 'Blog pribadi Urip Yoga Pangestu tentang kehidupan sehari-hari dan teknologi.', // Description to display in the meta tags
	lang: 'id-GB',
	ogLocale: 'id_GB',
	shareMessage: 'Bagikan postingan ini', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
