import React from "react";
import useStorage from "../hooks/useStorage";

interface IContact {
	name: string;
	email: string;
	phone: string;
	address?: string;
}

const ContactItem = ({ label, data }: any) => {
	return (
		<div className="flex gap-5 text-xl">
			<p className="font-bold">{label}</p>
			<p>{data}</p>
		</div>
	);
};

const Contact = ({ item, index }: any) => {
	// const [contactList, setContactList] = useStorage<IContact[]>(
	// 	"contactList",
	// 	[]
	// );

	const contactList = JSON.parse(localStorage.getItem("contactList") || "");

	const { name, email, phone, address } = item;

	const deleteContact = (index: number) => {
		const newContactList = [...contactList];
		newContactList.splice(index, 1);
		localStorage.setItem("contactList", JSON.stringify(newContactList));

		console.log("clicked", newContactList);
	};

	return (
		<div className="bg-green-600/25 rounded-lg p-5 text-slate-300">
			<h1 className="text-2xl font-bold text-amber-400 text-center">{name}</h1>
			<div className="px-5 py-5 flex items-center justify-between">
				<div className="">
					<ContactItem label="Email" data={email} />
					<ContactItem label="Phone" data={phone} />
					<ContactItem label="Address" data={address} />
				</div>
				<div className="flex gap-5">
					<button
						onClick={() => deleteContact(index)}
						className="bg-black text-rose-700 font-bold px-3 py-2 text-lg rounded-lg drop-shadow-lg "
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
