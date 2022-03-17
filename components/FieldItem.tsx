import { ErrorMessage, Field } from "formik";
import React from "react";

interface IFieldItem {
	label: string;
	type: string;
	name: string;
	placeholder: string;
	isRequired?: boolean;
}

const FieldItem = ({
	label,
	type,
	name,
	placeholder,
	isRequired,
}: IFieldItem) => {
	return (
		<div className="flex">
			<div className="w-1/4">
				<label htmlFor={name} className="text-white font-bold text-2xl ">
					{label} {isRequired && <sup className="text-rose-700">*</sup>}
				</label>
			</div>
			<div className="w-3/4">
				<Field
					type={type}
					name={name}
					placeholder={placeholder}
					required={isRequired}
					className="w-full px-5 py-1 rounded-md border-0 bg-purple-800 text-xl"
				/>
				<div className="font-normal text-red-600 text-right">
					<ErrorMessage name={name} />
				</div>
			</div>
		</div>
	);
};

export default FieldItem;
