export interface CardData {
	id: string;
	imageUrl: string;
	imageAlt: string;
	title: string;
	description: string;
	buttonText: string;
}

export const cardData: CardData[] = [
	{
		id: "modal_1",
		imageUrl: "/shubham-dhage-PspvX6Zx6J4-unsplash.jpg",
		imageAlt: "Shoes",
		title: "Shoes!",
		description: "If a dog chews shoes whose shoes does he choose?",
		buttonText: "Buy Now",
	},
	{
		id: "modal_2",
		imageUrl: "/shubham-dhage-TIRAs1UxvP8-unsplash.jpg",
		imageAlt: "Mountain",
		title: "Mountain!",
		description: "Mountains are beautiful and serene.",
		buttonText: "Explore Now",
	},
	{
		id: "modal_3",
		imageUrl: "/shubham-dhage-YNjl-o_oGXc-unsplash.jpg",
		imageAlt: "Beach",
		title: "Beach!",
		description: "The beach is a perfect place to relax.",
		buttonText: "Visit Now",
	},
	{
		id: "modal_4",
		imageUrl: "/services/background.jpg",
		imageAlt: "Beach",
		title: "Beach!",
		description: "The beach is a perfect place to relax.",
		buttonText: "Visit Now",
	},
];
