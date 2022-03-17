import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import FieldItem from "./FieldItem";

const AddContact = ({ contact, setContact }: any) => {
	const validationSchema = Yup.object({
		name: Yup.string().required("Required !"),
		email: Yup.string().required("Required !"),
		phone: Yup.string().required("Required !"),
		address: Yup.string(),
	});

	const handleSubmit = (values: any) => {
		console.log("Form values", values);
	};

	return (
		<Formik
			initialValues={contact}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{(formik) => (
				<Form className="w-[40%] mx-auto my-10 bg-slate-500/50 p-10 flex flex-col gap-5">
					<FieldItem
						label="Name"
						type="text"
						name="name"
						placeholder="Minhaz Mithu"
						isRequired={true}
					/>
					<FieldItem
						label="Email"
						type="email"
						name="email"
						placeholder="minhaz@domain.com"
						isRequired={true}
					/>
					<FieldItem
						label="Phone"
						type="text"
						name="phone"
						placeholder="523465456"
						isRequired={true}
					/>
					<FieldItem
						label="Address"
						type="text"
						name="address"
						placeholder="Ullapara, Sirajganj"
					/>

					<div className="flex items-center justify-center mt-10">
						<input
							type="submit"
							value="Add Contact"
							disabled={!(formik.dirty && formik.isValid)}
							className="text-2xl font-bold bg-gradient-to-br from-lime-600 via-violet-800 to-fuchsia-600 px-5 py-2 rounded-md drop-shadow-lg text-yellow-400 cursor-pointer"
						/>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default AddContact;
