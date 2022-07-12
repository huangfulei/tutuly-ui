import React from "react";
import { twMerge } from "tailwind-merge";

const primaryButtonStyles =
	"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white dark:text-black bg-indigo-600 dark:bg-indigo-900 hover:bg-indigo-700 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-900";

const secondaryButtonStyles =
	"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

export interface ButtonProps extends React.ComponentProps<"button"> {
	secondary?: boolean;
	className?: string;
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = props => {
	const { secondary = false, className, children, ...rest } = props;

	const buttonStyles = secondary ? secondaryButtonStyles : primaryButtonStyles;

	return (
		<button type='button' className={twMerge(buttonStyles, className)} {...rest}>
			{children}
		</button>
	);
};

export default Button;
