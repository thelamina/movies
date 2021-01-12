import {
	Container,
	Inner,
	Link,
	Logo,
	Sub,
	Title,
} from './styles/header-styles';

export default function Header({ children, ...restProps }) {
	return (
		<Container>
			<Inner {...restProps}>{children}</Inner>
		</Container>
	);
}

Header.Logo = ({ title, sub, children, ...restProps }) => {
	return (
		<Logo {...restProps}>
			<Title>{title}</Title>
			<Sub>{sub}</Sub>
		</Logo>
	);
};

Header.Link = ({ children, ...restProps }) => {
	return <Link {...restProps}>{children}</Link>;
};
