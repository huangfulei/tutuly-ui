import { twMerge } from "tailwind-merge";

interface CheckboxProps extends React.ComponentProps<"input"> {
	children?: React.ReactNode;
	className?: string;
}

const checkboxStyles = "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2";

const Checkbox: React.FC<CheckboxProps> = props => {
	const { className, children, ...rest } = props;

	return (
		<div className={"flex items-center"}>
			<input className={twMerge(checkboxStyles, className)} type='checkbox' {...rest} />
			{children}
		</div>
	);
};

export default Checkbox;
