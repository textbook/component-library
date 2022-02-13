import { FC } from "react";

export interface ButtonProps {
	label: string;
	onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;
