import React from 'react';
import {
	Button,
	Container,
	Title,
	Image,
	List,
	ListItem,
	Text,
	ButtonImage,
} from './styles/result-styles';
import heart from '../../assets/icons/heart.svg';

export default function Result({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Result.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Result.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};

Result.List = ({ children, ...restProps }) => {
	return <List {...restProps}>{children}</List>;
};

Result.ListItem = ({ children, ...restProps }) => {
	return <ListItem {...restProps}>{children}</ListItem>;
};

Result.Button = ({ disabled, children, ...restProps }) => {
	return (
		<Button disabled={disabled} {...restProps}>
			<ButtonImage src={heart} alt='heart' />
		</Button>
	);
};

Result.Image = ({ children, ...restProps }) => {
	return <Image {...restProps} />;
};
