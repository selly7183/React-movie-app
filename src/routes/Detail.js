import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.scss";
//import PropTypes from "prop-types";

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	const getMovie = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
			)
		).json();
		setMovies(json.data.movie);
		setLoading(false);
	};

	useEffect(() => {
		getMovie();
	}, []);

	return (
		<div>
			{loading ? (
				<span className={styles.loader}>
					<img
						src={process.env.PUBLIC_URL + `/loading.gif`}
						alt="loading"
					/>
				</span>
			) : (
				<div>
					<img
						src={movies.background_image}
						className={styles.bg}
						alt="img"
					/>
					<div className={styles.wrap}>
						<img
							src={movies.medium_cover_image}
							className={styles.detail_img}
							alt="img"
						/>
						<div className={styles.cont}>
							<h2>
								{movies.title} ({movies.year})
							</h2>
							<p className={styles.txt}>
								평점 : {movies.rating}점 | 다운로드 :{" "}
								{movies.download_count} 회
							</p>
							<p className={(styles.txt, styles.genres)}>
								{movies.genres.map((g) => (
									<span key={g}>{g}</span>
								))}
							</p>
							<p className={styles.description}>
								{movies.description_intro.length > 250
									? `${movies.description_intro.slice(
											0,
											300
									  )}.`
									: movies.description_intro}
							</p>

							<p></p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
/*
Detail.propTypes = {
	id: PropTypes.number.isRequired,
	background_image: PropTypes.string.isRequired,
	medium_cover_image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
	rating: PropTypes.string.isRequired,
	download_count: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
*/
export default Detail;
