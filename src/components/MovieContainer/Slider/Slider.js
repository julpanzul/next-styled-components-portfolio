import { useRef, useState, useEffect } from "react/cjs/react.development";
import MovieCard from "../MovieCard/MovieCard";
import {
  Item,
  ListWrapper,
  SliderContainer,
  SliderControl,
  SliderNavButton,
} from "./SliderStyles";
function Sliders({ movies = [] }) {
  const [cardToShow, setCardToShow] = useState(6);
  const [translate, setTranslate] = useState(0);
  const totalPage = Math.floor(movies.length / cardToShow);
  const translateVal = () => {
    const val = (movies.length / cardToShow) * 100 - 100;
    if (val > 100) {
      return val / totalPage;
    }
    return val;
  };
  const sliderRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      function getWidth() {
        return sliderRef.current.offsetWidth;
      }
      setCardToShow(Math.floor(getWidth() / 160));
      window.addEventListener("resize", getWidth);
      return () => window.removeEventListener("resize", getWidth);
    }
  });
  const slidePrev = () => {
    setTranslate(translate + translateVal());
  };
  const slideNext = () => {
    setTranslate(translate - translateVal());
  };

  const sliderStyle = () => {
    return {
      transform: `translate3d(${translate}%, 0 , 0)`,
      transition: "ease .5s",
    };
  };
  return (
    <SliderContainer>
      <ListWrapper ref={sliderRef} style={sliderStyle()}>
        {movies.map((movie, i) => (
          <Item key={i} style={{ flex: `1 0 ${100 / cardToShow}%` }}>
            <MovieCard movie={movie} />
          </Item>
        ))}
      </ListWrapper>
      <SliderControl>
        <SliderNav
          direction="prev"
          onClick={slidePrev}
          disabled={translate + 1 > 0}
        />
        <SliderNav
          direction="next"
          onClick={slideNext}
          disabled={translate < -(translateVal() * totalPage) + 1}
        />
      </SliderControl>
    </SliderContainer>
  );
}

export default Sliders;

const SliderNav = ({ direction, onClick, disabled }) => {
  return (
    <>
      {!disabled && (
        <SliderNavButton
          onClick={onClick}
          style={direction === "prev" ? { left: 0 } : { right: 0 }}
        >
          {direction}
        </SliderNavButton>
      )}
    </>
  );
};
