export interface Film {
	title: string;
	episode_id: number;
	opening_crawl: string;
	direction: string;
	producer: string;
	release_date: string;
	image_url: string;
	comments: { name: string; body: string }[];
}

export interface Charakter {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	image_url: string;
}

export interface Shop {
	name: string;
	price: number;
	image_url: string;
	quantity: number;
	description: string;
	type: string;
}
