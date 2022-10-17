import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.scss";

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		const json = await (
			await fetch(
				"https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year"
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div className={styles.container}>
			{loading ? (
				<span className={styles.loader}>
					<span>
						<img
							src={process.env.PUBLIC_URL + `/loading.gif`}
							alt="loading"
						/>
					</span>
				</span>
			) : (
				<div className={styles.movie_Cont}>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							medium_cover_image={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
							year={movie.year}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
