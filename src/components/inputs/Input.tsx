import React from "react";

export type InputProps = {
	label?: string;
	multiline?: boolean;
} & (
	| React.InputHTMLAttributes<HTMLInputElement>
	| React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = ({ multiline, ...props }: InputProps) => {
	if (multiline) {
		return (
			<textarea
				{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
			/>
		);
	}
	return (
		<input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />
	);
};

const Input = ({ label, className, ...rest }: InputProps) => {
	return (
		<div className="relative">
			{label && (
				<label htmlFor={label} className="absolute pt-1 pl-3 text-xs">
					{label}
				</label>
			)}
			<InputOrTextArea
				id={label}
				className={`
        bg-dark text-gray-primary rounded-md p-3
        disabled:bg-disabled disabled:border-2 disabled:border-disabled
        ${label && "pt-5"}
        ${className}
      `}
				{...rest}
			/>
		</div>
	);
};

export default Input;
