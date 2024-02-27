import React from "react";
import { WrappedFieldProps } from "redux-form";

interface RenderRadioProps extends WrappedFieldProps {
	label: string;
}

const RenderRadio: React.FC<RenderRadioProps> = ({ label, input }) => {
	return (
		<div className="checkbox-wrapper">
			<input
				{...input}
				id={`${input.name}-${label}`}
				className="checkbox"
				type="radio"
			/>

			<label htmlFor={`${input.name}-${label}`} className={`checkbox__label`}>
				<p className="checkbox__label__text" dangerouslySetInnerHTML={{ __html: label }}></p>
			</label>
		</div>
	);
};

export default RenderRadio;
