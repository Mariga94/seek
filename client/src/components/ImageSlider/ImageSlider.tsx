import { ImageSliderProps } from "../../types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./ImageSlider.css";
const ImageSlider = ({ images }: ImageSliderProps) => {
  return (
    <div className="image-slider_carousel">
      <Carousel showArrows={true}>
        {images.map((image: string, index: number) => {
          return (
            <div key={index} className="slider-image">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageSlider;

// <div className="slide flex-col">
//   <Slider {...settings}>
//     {images.map((image: string, index: number) => {
//       return (
//         <div key={index}>
//           <img
//             src={image}
//             alt={`Image ${index + 1}`}
//             className="slider-image"
//           />
//         </div>
//       );
//     })}
//   </Slider>
//   <div className="slider-navigation">
//     <button onClick={prevSlide}>&#8592;</button>
//     <button onClick={nextSlide}>&#8594;</button>
//   </div>
// </div>
