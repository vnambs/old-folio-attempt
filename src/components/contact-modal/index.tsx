import { CloseCircle } from "iconsax-react";
import React, { useState, FormEvent } from "react";

interface ModalProps {
	id: string;
	onClose: () => void;
}
interface ContactFormData {
	name: string;
	company: string;
	email: string;
	request: string;
	privacyAccepted: boolean;
}
const Contact = ({ id, onClose }: ModalProps) => {
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		company: "",
		email: "",
		request: "",
		privacyAccepted: false,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	async function handleSubmit(
		event: FormEvent<HTMLFormElement>
	): Promise<void> {
		event.preventDefault();
		const formDatas = new FormData(event.currentTarget);
		try {
			const response = await fetch("/api/contact", {
				method: "post",
				body: formDatas,
			});

			if (!response.ok) {
				console.log("falling over");
				throw new Error(`response status: ${response.status}`);
			}

			alert("Message successfully sent");
		} catch (err) {
			console.error(err);
			alert("Error, please try resubmitting the form");
		}
	}

	return (
		<>
			<div className="max-w-[100% min-w-[100%] modal-box bg-transparent">
				<div
					className="card card-compact shadow-xl h-[50%] relative overflow-hidden"
					id={id}
				>
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button
							className="btn-circle btn-md items-center flex btn-ghost absolute right-2 top-2"
							onClick={onClose}
						>
							<CloseCircle size="32" color="#FFF" />{" "}
						</button>
					</form>
					<form
						onSubmit={handleSubmit}
						className="text-white bg-black p-5 rounded-lg"
					>
						<div>
							<label htmlFor="name" className="block">
								NAME & SURNAME *
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="block w-full mt-2 mb-2 p-2 border-b-2 border-white bg-black text-white placeholder-white focus:outline-none"
								/>
							</label>
						</div>
						<div>
							<label htmlFor="company" className="block">
								COMPANY
								<input
									type="text"
									id="company"
									name="company"
									value={formData.company}
									onChange={handleChange}
									className="block w-full mt-2 mb-2 p-2 border-b-2 border-white bg-black text-white placeholder-white focus:outline-none"
								/>
							</label>
						</div>
						<div>
							<label htmlFor="email" className="block">
								EMAIL *
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="block w-full mt-2 mb-2 p-2 border-b-2 border-white bg-black text-white placeholder-white focus:outline-none"
								/>
							</label>
						</div>
						<div>
							<label htmlFor="request" className="block">
								REQUEST *
								<textarea
									id="request"
									name="request"
									value={formData.request}
									onChange={handleChange}
									required
									className="block w-full mt-2 mb-2 p-2 border-b-2 border-white bg-black text-white placeholder-white focus:outline-none h-24"
								/>
							</label>
						</div>
						<button
							type="submit"
							className="block w-full mt-5 mb-5 p-2 rounded bg-white text-black border-none"
						>
							SEND MESSAGE
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
