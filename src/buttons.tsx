import { FC } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
	label: string;
	mode?: "primary" | "secondary";
	onClick: () => void;
}

const StyledButton = styled.button<Omit<ButtonProps, "label">>`
	border: none;
	border-radius: 2px;
	box-sizing: border-box;
	cursor: pointer;
	display: inline-block;
	font-size: 14px;

	${({ mode }) => {
		switch (mode) {
			case "secondary":
				return css`
					background-color: #ffffff;
					border: 2px solid #228722;
					color: #228722;
					padding: 6px 12px;
				`;
			default:
				return css`
					background-color: #228722;
					color: #ffffff;
					padding: 8px 14px;
				`;
		}
	}}
`;

export const Button: FC<ButtonProps> = ({ label, ...rest }) => (
	<StyledButton {...rest}>{label}</StyledButton>
);
