import { StaticImageData } from 'next/image'

export interface IFeaturedArticle {
	img: StaticImageData
	name: string
	text: string
	timeRead: string,
  link:string
}
export interface IArticle {
	img: StaticImageData
	name: string
	time: string,
  link:string
}

