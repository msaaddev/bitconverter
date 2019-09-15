import Link from 'next/link';

const Home = () => {
	return (
		<div>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
			</ul>
			<h1>Hello! NextJS</h1>
			<p>Application to view Bitcoin prices.</p>
		</div>
	);
};

export default Home;
