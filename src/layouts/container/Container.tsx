import { twMerge } from "tailwind-merge";

const containerStyles = "container mx-auto sm:px-6 lg:px-8";

interface ContainerProps extends React.ComponentProps<"div"> {
	className?: string;
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = props => {
	const { className, children, ...rest } = props;

	return (
		<div className={twMerge(containerStyles, className)} {...rest}>
			{children}
		</div>
	);
};

export default Container;
