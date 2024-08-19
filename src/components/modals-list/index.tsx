"use client";

import React, { useState } from "react";
import Modals from "../modal-cart/modals";
import { Modal } from "../modal";
import Card from "../card";
import { cardData } from "./card-data";
import { modalData } from "./modal-data";

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
