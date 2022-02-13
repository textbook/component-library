import { FC } from "react";
import styled from "styled-components";

export interface ButtonProps {
	label: string;
	onClick: () => void;
}

const StyledButton = styled.button`
	background-color: #28A228;
	border: none;
	border-radius: 2px;
	box-sizing: border-box;
	color: white;
	cursor: pointer;
	display: inline-block;
	font-size: 14px;
	padding: 8px 14px;
`;

export const Button: FC<ButtonProps> = ({ label, onClick }) => (
	<StyledButton onClick={onClick}>{label}</StyledButton>
);
