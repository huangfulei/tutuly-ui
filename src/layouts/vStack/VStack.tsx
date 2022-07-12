import { twMerge } from "tailwind-merge";

interface VStackStoriesProps extends React.ComponentProps<"div"> {
	children: React.ReactNode;
	className?: string;
}

const vStackStyles = "flex flex-col flex-wrap space-y-2";

const VStack: React.FC<VStackStoriesProps> = props => {
	const { children, className, ...rest } = props;

	return (
		<div className={twMerge(vStackStyles, className)} {...rest}>
			{children}
		</div>
	);
};

export default VStack;
