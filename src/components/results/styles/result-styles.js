import styled from 'styled-components/macro';

export const Container = styled.div`
	max-width: 1200px;
	width: 90%;
	margin: auto;
	margin-top: 40px;
`;

export const Title = styled.h3`
	margin: 0;
	margin-top: 10px;
	padding: 0 10px;
	// white-space: nowrap;
	// overflow: hidden;
	font-weight: 600;
	// text-overflow: ellipsis;
	width: 100%;
`;

export const Text = styled.p`
	color: #757575;
	padding: 5px 10px;
	margin: 0px;
`;

export const List = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-template-rows: auto;
	gap: 40px 40px;
	padding: 0;
	@media (max-width: 500px) {
		gap: 10px 30px;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	}
`;

export const ListItem = styled.li`
	list-style: none;
	position: relative;
	max-width: 300px;
	height: 350px;
`;

export const Image = styled.img`
	box-shadow: 0px 2px 24px 2px rgba(0, 0, 0, 0.25);
	box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.3);
	width: 100%;
	border-radius: 5px 5px 0px 0px;
	height: 80%;
	object-fit: cover;
`;

export const Button = styled.button`
	position: absolute;
	bottom: 100px;
	right: -20px;
	background: #e08d4f;
	border-radius: 50%;
	cursor: pointer;
	border: 0px solid red;
	width: 50px;
	height: 50px;
	font-size: 20px;
	padding: 12px;
	outline: none;
	transition: all 1s;

	color: #000;
	box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.6);

	& :hover {
		img {
			transition: all 0.3s;
			transform: scale(1.2);
		}
	}
`;

export const ButtonImage = styled.img`
	width: 100%;
`;
