import { twMerge } from "tailwind-merge";

interface HStackProps extends React.ComponentProps<"div"> {
	children: React.ReactNode;
	className?: string;
}

const hStackStyles = "flex flex-wrap space-x-2";

const HStack: React.FC<HStackProps> = props => {
	const { children, className, ...rest } = props;

	return (
		<div className={twMerge(hStackStyles, className)} {...rest}>
			{children}
		</div>
	);
};

export default HStack;
