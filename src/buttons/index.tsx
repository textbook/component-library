import { FC } from "react";
import { StyledButton } from "./buttons.styles";

export interface ButtonProps {
	label: string;
	mode?: "primary" | "secondary";
	onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ label, ...rest }) => (
	<StyledButton {...rest}>{label}</StyledButton>
);
