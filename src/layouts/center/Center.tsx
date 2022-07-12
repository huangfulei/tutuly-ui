import { twMerge } from "tailwind-merge";

const centerStyles = "flex justify-center items-center";

interface CenterProps extends React.ComponentProps<"div"> {
	className?: string;
	children: React.ReactNode;
}

const Center: React.FC<CenterProps> = props => {
	const { className, children, ...rest } = props;

	return (
		<div className={twMerge(centerStyles, className)} {...rest}>
			{children}
		</div>
	);
};

export default Center;
