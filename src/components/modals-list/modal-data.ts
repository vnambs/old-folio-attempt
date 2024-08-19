export interface ModalData {
	id: string;
	title: string;
	content: string;
	imageUrl: string;
	imageAlt: string;
	closeText: string;
}

export const modalData: ModalData[] = [
	{
		id: "modal_1",
		title: "Hello Shoes!",
		content: "This modal is for shoes.",
		imageUrl: "/shubham-dhage-PspvX6Zx6J4-unsplasht.jpg",
		imageAlt: "Shoes",
		closeText: "Close",
	},
	{
		id: "modal_2",
		title: "Hello Mountain!",
		content: "This modal is for the mountain.",
		imageUrl: "/shubham-dhage-TIRAs1UxvP8-unsplash.jpg",
		imageAlt: "Shoes",
		closeText: "Close",
	},
	{
		id: "modal_3",
		title: "Hello Beach!",
		content: "This modal is for the beach.",
		imageUrl: "/shubham-dhage-YNjl-o_oGXc-unsplash.jpg",
		imageAlt: "Shoes",
		closeText: "Close",
	},
	{
		id: "modal_4",
		title: "Hello TEST!",
		content: "This modal is for the beach.",
		imageUrl: "/services/background.jpg",
		imageAlt: "Shoes",
		closeText: "Close",
	},
];
