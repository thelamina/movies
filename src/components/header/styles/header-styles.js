import styled from 'styled-components/macro';

export const Container = styled.div`
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 100;
	background: #fff;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`;

export const Inner = styled.div`
	max-width: 1200px;
	width: 100%;
	padding: 16px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.div`
	text-align: center;
`;

export const Title = styled.h2`
	text-transform: uppercase;
	font-weight: bold;
	color: #e74c3c;

	margin: 0px;
	padding: 0px;
	line-height: 1.3;
`;

export const Sub = styled.span`
	font-size: 12px;
	background: #34495e;
	color: #fff;
	display: inline-block;
	line-height: 1.8;
	padding: 0 16px;
	margin: 0px;
	padding: 0px;
`;

export const Link = styled.button``;
