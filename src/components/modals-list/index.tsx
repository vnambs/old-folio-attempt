"use client";

import React, { useState } from "react";
import Modals from "../modal-cart/modals";
import { Modal } from "../modal";
import Card from "../card";

const cardData = [
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

const modalData = [
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

const ModalList = () => {
	// Helper function to randomly assign widths
	const getRandomWidth = (index: number) => {
		const widths = ["md:w-[70%]", "md:w-[30%]", "md:w-[30%]", "md:w-[70%]"];
		return widths[index % 4];
	};

	const [openModalId, setOpenModalId] = useState<string | null>(null);

	const handleOpenModal = (id: string) => {
		setOpenModalId(id);
	};

	const handleCloseModal = () => {
		setOpenModalId(null);
	};

	return (
		<div className="flex flex-wrap justify-between">
			{cardData.map((card, index) => (
				<div
					key={card.id}
					className={`w-full ${getRandomWidth(index)} p-2`}
					onClick={() => handleOpenModal(card.id)}
					role="button"
					tabIndex={0}
					onKeyDown={e => {
						if (e.key === "Enter") handleOpenModal(card.id);
					}}
				>
					{/* The button to open modal */}
					<div className="w-full">
						<Card
							id={card.id}
							imageUrl={card.imageUrl}
							imageAlt={card.imageAlt}
							title={card.title}
							description={card.description}
						/>
					</div>

					{/* Modal component with props */}

					<Modal id={card.id} isOpen={openModalId === card.id}>
						<Modals
							id={card.id}
							title={modalData[index].title}
							content={modalData[index].content}
							imageUrl={card.imageUrl}
							imageAlt={card.imageAlt}
							onClose={handleCloseModal}
						/>
					</Modal>
				</div>
			))}
		</div>
	);
};

export default ModalList;
