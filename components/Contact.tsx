import React from "react";

interface IContact {
	name: string;
	email: string;
	phone: string;
	address?: string;
}

const Contact = ({item}: any) => {
  const {name, email, phone, address} =  item;

  console.log(name, email);
	return (
		<div>
			<h2 className="text-white">Name: {name}</h2>
		</div>
	);
};

export default Contact;
