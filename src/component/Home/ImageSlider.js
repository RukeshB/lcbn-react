import { Carousel } from "@material-tailwind/react";
import image_1 from "../../assets/image/AMN04602.jpg";
import image_2 from "../../assets/image/1658750357963.jpg";

const ImageSlider = () => {
  return (
    <Carousel
      className="h-screen"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="h-full w-full overflow-hidden relative">
      <div className="h-full w-full opacity-40 bg-black absolute"></div>
        <img
          src={image_1}
          alt="image_1"
          className="h-full w-full object-center object-cover"
        />
      </div>
      <div className="h-full w-full overflow-hidden relative">
      <div className="h-full w-full opacity-40 bg-black absolute"></div>
      <img src={image_2} alt="image_2" className="h-full w-full object-center object-cover" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
