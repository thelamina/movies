import { Spinner, Container } from './styles/loading-styles';

export default function Loading() {
	return (
		<Container>
			<Spinner viewBox='0 0 50 50'>
				<circle
					className='path'
					cx='25'
					cy='25'
					r='20'
					fill='none'
					strokeWidth='4'
				/>
			</Spinner>
		</Container>
	);
}
