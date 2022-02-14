import styled, { css } from "styled-components";

import { ButtonProps } from ".";

export const StyledButton = styled.button<Omit<ButtonProps, "label">>`
	border: none;
	border-radius: 2px;
	box-sizing: border-box;
	cursor: pointer;
	display: inline-block;
	font-size: 14px;

	${({ mode, theme }) => {
		switch (mode) {
			case "secondary":
				return css`
					background-color: ${theme.colors.secondary};
					border: 2px solid ${theme.colors.primary};
					color: ${theme.colors.primary};
					padding: 6px 12px;
				`;
			default:
				return css`
					background-color: ${theme.colors.primary};
					color: ${theme.colors.secondary};
					padding: 8px 14px;
				`;
		}
	}}
`;
