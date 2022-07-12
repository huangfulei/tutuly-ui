import { HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

const inputStyles =
	"block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-indigo-500 sm:text-sm";

const labelStyles = "mb-1 block text-sm font-medium text-gray-700";

interface InputProps {
	id: string;
	label?: string;
	type?: HTMLInputTypeAttribute;
	className?: string;
}
const Input: React.FC<InputProps> = props => {
	const { id, label, className, type = "text", ...rest } = props;

	return (
		<div>
			{label && (
				<label htmlFor={id} className={labelStyles}>
					{label}
				</label>
			)}
			<input id={id} type={type} {...rest} className={twMerge(inputStyles, className)} />
		</div>
	);
};

export default Input;
