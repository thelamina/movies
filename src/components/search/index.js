import React from 'react';
import { Button, Container, Input, Image } from './styles/search-styles';

export default function Search({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Search.Input = ({ children, ...restProps }) => {
	return <Input {...restProps} />;
};

Search.Button = ({ children, ...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

Search.Image = ({ children, ...restProps }) => {
	return <Image {...restProps} />;
};
