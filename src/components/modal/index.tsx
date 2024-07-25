import React, { useEffect, useRef } from "react";

interface IndexProps {
	children: React.ReactNode;
	id: string;
	isOpen: boolean;
}

export function Modal({ children, id, isOpen }: IndexProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		console.log(isOpen);
		if (isOpen) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [isOpen]);
	return (
		<>
			<dialog
				ref={dialogRef}
				id={id}
				className="modal modal-bottom sm:modal-middle"
			>
				{children}
			</dialog>
		</>
	);
}
