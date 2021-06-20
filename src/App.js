import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" isLargeRow fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" isLargeRow fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" isLargeRow fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" isLargeRow fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" isLargeRow fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" isLargeRow fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries"  isLargeRow fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
