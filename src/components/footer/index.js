import { Container, Inner, Text } from './styles/footer-styles';

export default function Footer({ children, ...restProps }) {
	return (
		<Container>
			<Inner {...restProps}>{children}</Inner>
		</Container>
	);
}
Footer.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};
