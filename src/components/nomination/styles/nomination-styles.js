import styled from 'styled-components/macro';

export const Container = styled.div`
	height: 100%;
	background: white;
	position: fixed;
	top: 0;
	right: 0;
	width: 45%;
	z-index: 200;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	transform: translateX(${({ show }) => (!show ? '100%' : '0%')});
	transition: transform 0.3s ease-out;

	@media (max-width: 500px) {
		width: 98%;
	}
`;
export const Inner = styled.div`
	padding: 10px;
`;
export const Title = styled.h3``;

export const Text = styled.p``;

export const List = styled.ul``;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Content = styled.div``;

export const Image = styled.img``;

export const Button = styled.button``;

export const ButtonImage = styled.img``;
