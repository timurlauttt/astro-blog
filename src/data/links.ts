import LinkedinIcon from '../components/icons/LinkedinIcon.astro'
import GithubIcon from '../components/icons/GithubIcon.astro'
import InstagramIcon from '../components/icons/InstagramIcon.astro'
// ADD YOUR SOCIAL NETWORKS HERE
export const SOCIALNETWORKS = [
	{
		name: 'Github',
		url: 'https://github.com/timurlauttt',
		icon: GithubIcon
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/urip-yoga-pangestu-65a541231/',
		icon: LinkedinIcon
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/__timurlaut',
		icon: InstagramIcon
	},
] as const
