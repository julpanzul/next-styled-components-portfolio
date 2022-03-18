import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Slider from "./Slider/Slider";

function MovieContainer({ title, movies = [] }) {
  const fetchMovies = () => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push({ id: i, title: "Movie " + i, score: "5.5", type: "TV" });
    }

    return arr;
  };

  return (
    <Section nopadding id="movies">
      <SectionDivider />
      <SectionTitle main>{title}</SectionTitle>
      <Slider movies={movies} />
    </Section>
  );
}

export default MovieContainer;
