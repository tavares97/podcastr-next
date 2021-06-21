// 1 FORMA SPA
// 2 FORMA SSR
// 3 FORMA SSG

import { useEffect } from 'react';

export default function Home(props) {
	// *SPA
	// useEffect(() => {
	// 	fetch('http://localhost:3333/episodes')
	// 		.then(res => res.json())
	// 		.then(data => console.log(data));
	// }, []);

	console.log(props.episodes);

	return (
		<>
			<h1>Hello</h1>
		</>
	);
}

// *SSR
// export async function getServerSideProps() {
// 	const res = await fetch('http://localhost:3333/episodes');
// 	const data = await res.json();

// 	return {
// 		props: {
// 			episodes: data,
// 		},
// 	};
// }

//*SSG
export async function getStaticProps() {
	const res = await fetch('http://localhost:3333/episodes');
	const data = await res.json();

	return {
		props: {
			episodes: data,
		},
		revalidate: 60 * 60 * 8,
	};
}
