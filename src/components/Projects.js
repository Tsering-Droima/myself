import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 16px;
  width: max-content;
  animation: scroll 20s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const SlideItem = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: #f0f0f0;

  @media (max-width: 1024px) {
    width: 150px;
    height: 225px;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 180px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 4px 0;
  font-size: 12px;
`;

const images = [
  {
    src: "https://assets.telegraphindia.com/telegraph/2024/Sep/1727684464_blackpink-lisa-moonlit-floor.jpg",
    caption: "Sunbath",
  },
  {
    src: "https://hips.hearstapps.com/hmg-prod/images/lisa-vacation-67895a1dea0af.jpg?crop=1.00xw:0.801xh;0,0.173xh&resize=640:*",
    caption: "Bikini Pic",
  },
  {
    src: "https://i.pinimg.com/736x/64/c6/09/64c609f7da70dff7511aa281b6928a6d.jpg",
    caption: "Traditional Pic",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBIr_Rly7EKXZpYLRWVKHMogIKUhJz9pdXA&s",
    caption: "Gym Dress",
  },
  {
    src: "https://image.koreaboo.com/2024/09/Snapinsta.app_458284584_1302705794441754_7236507774250232019_n_1080-512x640.jpg",
    caption: "Sunset",
  },
  {
    src: "https://i.redd.it/230809-lisa-ig-update-v0-aho0nesnb3hb1.jpg?width=1440&format=pjpg&auto=webp&s=022482f144e923ffa2c05b4997caedd0efef2347",
    caption: "Poolside",
  },
  {
    src: "https://s.yimg.com/ny/api/res/1.2/JBdp8h2rLlUNqZw7l_EbVA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/mandatory_995/c4a9f8d98a1c7e7dade537faebd6b0be",
    caption: "Bikni Pose",
  },
  {
    src: "https://w0.peakpx.com/wallpaper/369/952/HD-wallpaper-lisa-blackpink-lalisa-manoban-thai-singer-portrait-hoot.jpg",
    caption: "Portrait 2",
  },
  {
    src: "https://i.pinimg.com/736x/f8/6c/04/f86c049cac39d2f29a6b3708c708341a.jpg",
    caption: "Fashion Pic 1",
  },
  {
    src: "https://s.yimg.com/ny/api/res/1.2/3FK_kSgOrZb17M9eNpCeFA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg7Y2Y9d2VicA--/https://media.zenfs.com/en/billboard_547/9fa33fada582e75a669be01eec919b91",
    caption: "Fashion Pic 2",
  },
];


export default function HorizontalCarousel() {
  const trackRef = useRef(null);

  // Duplicate slides for seamless scrolling
  const slides = [...images, ...images];

  return (
    <RightColumn>
      <CarouselContainer>
        <CarouselTrack ref={trackRef}>
          {slides.map((img, idx) => (
            <SlideItem key={idx}>
              <SlideImage src={img.src} alt={img.caption} />
              <Caption>{img.caption}</Caption>
            </SlideItem>
          ))}
        </CarouselTrack>
      </CarouselContainer>
    </RightColumn>
  );
}
