import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.css";
import { SlideWrapper, SliderWrapper } from "./styled";

interface ImageSliderProps {
  media: MediaItem[];
}

export const ImageSlider = ({ media }: ImageSliderProps) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const imageUrls = media?.map((mediaItem) => mediaItem.cdnUrl || "") || ["/no_image_image.png"];

    setImages(imageUrls);
  }, [media]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {images?.map((image, index) => (
          <SlideWrapper key={index} className="slideWrapper">
            <img
              src={image}
              alt={`image-${index}`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "280px",
                borderRadius: "8px",
                aspectRatio: "auto",
              }}
            />
          </SlideWrapper>
        ))}
      </Slider>
    </SliderWrapper>
  );
};
