import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.scss";

const Movie = ({ id, medium_cover_image, title, summary, genres, year }) => {
	return (
		<div className={styles.movie}>
			<Link to={`/movie/${id}`}>
				<img
					src={medium_cover_image}
					alt={title}
					className={styles.movie_img}
				/>
			</Link>
			<div className={styles.movie_Txt}>
				<Link to={`/movie/${id}`}>
					<h2>
						{title} ({year})
					</h2>
					<ul className={styles.genres}>
						{genres.map((g) => (
							<li key={g}>{g}</li> // genres가 array이기 때문에 map을 써야함.
						))}
					</ul>
					<p>
						{summary.length > 235
							? `${summary.slice(0, 235)}...`
							: summary}
					</p>
				</Link>
			</div>
		</div>
	);
};

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	medium_cover_image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
