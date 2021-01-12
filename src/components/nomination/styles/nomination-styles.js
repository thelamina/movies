import styled from 'styled-components/macro';

export const Container = styled.div`
	height: 100%;
	background: white;
	position: fixed;
	overflow: auto;
	top: 0;
	right: 0;
	width: 40%;
	z-index: 200;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	transform: translateX(${({ show }) => (!show ? '110%' : '3%')});
	transition: transform 0.5s ease-out;

	@media (max-width: 500px) {
		width: 98%;
	}
`;
export const Inner = styled.div`
	padding: 10px;
`;
export const Title = styled.h3`
	text-align: center;
	text-transform: uppercase;
	font-size: 22px;
	font-weight: bold;
`;

export const Text = styled.p``;

export const Bold = styled.span`
	font-weight: bold;
`;

export const List = styled.ul`
	margin: 0;
	padding: 0;
`;

export const ListItem = styled.li`
	display: flex;
	// justify-content: space-between;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0 10px;
	padding-bottom: 10px;
	margin-bottom: 10px;
	border-bottom: 2px solid #ededed;
`;

export const Content = styled.div`
	padding: 0px 20px;
	width: 90%;
`;

export const Image = styled.img`
	max-width: 100%;
	height: 160px;
	width: 120px;
	object-fit: cover;
`;

export const Button = styled.button`
	background: transparent;
	border: 1px solid #e08d4f;
	cursor: pointer;
	padding: 10px;
	color: #e08d4f;
	outline: none;
	transition: all 0.2s ease-in-out;
	&:hover {
		color: #fff;
		background: #e08d4f;
	}
`;
export const Close = styled.button`
	background: #e08d4f;
	border: 1px solid #e08d4f;
	font-size: 14px;
	font-weight: bold;
	padding: 6px;
	color: #fff;
	height: 24px;
	width: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 50%;
	outline: none;
`;

export const ButtonImage = styled.img``;
