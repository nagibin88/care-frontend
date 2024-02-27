import React from "react";
import { WrappedFieldProps } from "redux-form";

interface RenderCheckboxProps extends WrappedFieldProps {
	label: string;
}

const RenderCheckbox: React.FC<RenderCheckboxProps> = ({ label, input }) => {
	return (
		<div className="checkbox-wrapper">
			<input
				{...input}
				id={`${input.name}-${label}`}
				type="checkbox"
				className={`checkbox`}
			/>

			<label
				htmlFor={`${input.name}-${label}`}
				className={`checkbox__label`}
			>
				<p className="checkbox__label__text" dangerouslySetInnerHTML={{ __html: label }}></p>
			</label>
		</div>
	);
};

export default RenderCheckbox;
