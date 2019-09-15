import Fetch from 'isomorphic-unfetch';
import Layout from './components/Layout';
import Prices from './components/Prices';

const Home = props => {
	return (
		<Layout>
			<div>
				<h1>Welcome to BitzPrice</h1>
				<Prices bpi={props.bpi} />
			</div>
		</Layout>
	);
};

Home.getInitialProps = async function() {
	const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	const data = await res.json();

	return {
		bpi: data
	};
};

export default Home;
