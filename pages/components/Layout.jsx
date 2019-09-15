import Head from 'next/head';
import NavBar from './NavBar';


const Layout = props => {
	return (
		<div>
			<Head>
				<title>BitzPrice</title>
				<link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
			</Head>
			<NavBar />
			{props.children}
		</div>
	);
};

export default Layout;
