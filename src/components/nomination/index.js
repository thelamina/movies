import React from 'react';
import {
	Button,
	Container,
	Title,
	Inner,
	Image,
	List,
	ListItem,
	Text,
	Content,
	Close,
	Bold,
} from './styles/nomination-styles';

export default function Nomination({ show = false, children, ...restProps }) {
	return (
		<Container show={show}>
			<Inner {...restProps}>{children}</Inner>
		</Container>
	);
}

Nomination.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Nomination.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};

Nomination.List = ({ children, ...restProps }) => {
	return <List {...restProps}>{children}</List>;
};

Nomination.ListItem = ({ children, ...restProps }) => {
	return <ListItem {...restProps}>{children}</ListItem>;
};

Nomination.Content = ({ children, ...restProps }) => {
	return <Content {...restProps}>{children}</Content>;
};

Nomination.Button = ({ children, ...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

Nomination.Close = ({ children, ...restProps }) => {
	return <Close {...restProps}>x</Close>;
};

Nomination.Image = ({ children, ...restProps }) => {
	return <Image {...restProps} />;
};

Nomination.Bold = ({ children, ...restProps }) => {
	return <Bold {...restProps}>{children}</Bold>;
};
