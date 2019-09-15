import Link from 'next/link';

const About = () => {
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
			About BitzPrice
		</div>
	);
};

export default About;
