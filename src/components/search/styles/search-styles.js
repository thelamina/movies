import styled from 'styled-components/macro';

export const Container = styled.div`
	max-width: 800px;
	width: 90%;
	position: relative;
	margin: auto;
	margin-top: 100px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 20px;
	display: inline-block;
	outline: none;
	border-radius: 45px;
	font-size: 20px;
	border: 2px solid #757575;
	color: #757575;
`;

export const Button = styled.button`
	position: absolute;
	right: 30px;
	top: 10px;
	bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #e08d4f;
	border-radius: 50%;
	cursor: pointer;
	border: 0px solid #e08d4f;
	width: 48px;
	height: 48px;
	outline: none;
	opacity: 0.5;
	transition: all 1s;
	cursor: default;
	&:hover {
		transform: rotate(360deg);
	}
`;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;
