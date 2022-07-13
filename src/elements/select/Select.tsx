import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface OptionProps {
	label: string;
	value: string | number;
}

interface SelectProps extends React.ComponentProps<"button"> {
	options: OptionProps[];
	onSelected: (option: OptionProps) => void;
	label?: string;
	className?: string;
	children?: React.ReactNode;
}

const Select: React.FC<SelectProps> = props => {
	const { options, label, onSelected, className } = props;
	const [selected, setSelected] = useState(options[0]);

	return (
		<Listbox
			value={selected}
			onChange={value => {
				setSelected(value);
				onSelected(value);
			}}>
			{({ open }) => (
				<>
					<Listbox.Label className='block text-sm font-medium text-gray-700'>{label}</Listbox.Label>
					<div className='mt-1 relative'>
						<Listbox.Button
							className={twMerge(
								"relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
								className
							)}>
							<span className='block truncate'>{selected.label}</span>
							<span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
								<SelectorIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave='transition ease-in duration-100'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'>
							<Listbox.Options className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
								{options.map(option => (
									<Listbox.Option
										key={option.label}
										className={({ active }) =>
											twMerge(
												active ? "text-white bg-indigo-600" : "text-gray-900",
												"cursor-default select-none relative py-2 pl-8 pr-4"
											)
										}
										value={option}>
										{({ selected, active }) => (
											<>
												<span className={twMerge(selected ? "font-semibold" : "font-normal", "block truncate")}>
													{option.label}
												</span>

												{selected ? (
													<span
														className={twMerge(
															active ? "text-white" : "text-indigo-600",
															"absolute inset-y-0 left-0 flex items-center pl-1.5"
														)}>
														<CheckIcon className='h-5 w-5' aria-hidden='true' />
													</span>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
};

export default Select;
