import styles from "../../styles/SortButton.module.scss";

interface SortButtonProps {
	icon: React.ReactNode;
	children: React.ReactNode;
	onSort: () => void;
	className?: string;
}

export const SortButton = (props: SortButtonProps) => {
	return (
		<button
			onClick={props.onSort}
			className={`${styles.sortButton} ${props.className}`}
		>
			<span>{props.children}</span>
			{props.icon}
		</button>
	);
};
