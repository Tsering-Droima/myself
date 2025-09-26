import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Projects from "./Projects";
import Contact from "./Contact";

// Import Google Fonts globally
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700&display=swap');

  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    background-color: #FDF1E6;
    color: #000000;
  }
`;

const StyledImage = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 50% / 60%;
  object-fit: cover; /* ensures image fills the shape */
  clip-path: ellipse(50% 60% at 50% 50%);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 4;
  }
`
// ---------- Styled Components ----------
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  min-height: 90vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

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

const Name = styled.h1`
  font-family: 'Playfair Display', cursive;
  font-size: 48px;
  margin: 0 0 10px 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.h2`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
`;

const FollowButton = styled.button`
  background-color: #8B1E3F;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 30px;
  transition: 0.3s;

  &:hover {
    background-color: #701830;
  }
`;

const Intro = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;

  li {
    font-size: 16px;
    margin: 10px 0;
  }
`;

const Closing = styled.p`
  font-style: italic;
  font-size: 16px;
  margin: 20px 0;
`;

const ExploreButton = styled.button`
  background-color: #8B1E3F;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #701830;
  }
`;

// const ImagePlaceholder = styled.div`
//   background-color: #F7E8D9;
//   width: 300px;
//   height: 400px;
//   border-radius: 50% / 60%;
//   clip-path: ellipse(50% 60% at 50% 50%);

//   @media (max-width: 768px) {
//     width: 100%;
//     height: auto;
//     aspect-ratio: 3 / 4;
//   }
// `;
const ImagePlaceholder = styled.div`
  background-image: url('${process.env.PUBLIC_URL}/gang_leader3.png');
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 500px;
  border-radius: 50% / 60%;
  clip-path: ellipse(50% 60% at 50% 50%);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 4;
  }
`;

// ---------- Main Component ----------
const About = () => {
  return (
    <>
      <GlobalStyle />
      {/* Landing Page Section */}
      <Container>
        {/* Left Column with Content */}
        <LeftColumn>
          <Name>Pem Droima</Name>
          <Subtitle>Model • Dreamer • History Enthusiast</Subtitle>

          <FollowButton
            onClick={() =>
                window.open("https://www.instagram.com/official_dolma2025", "_blank")
              }
          >
            Follow
          </FollowButton>

          <Intro>
            Welcome to my little corner of the internet 💋 <br />
            I'm <strong>Pem Droima</strong>, a model who loves blending beauty
            with brains. When I'm not in front of the camera, you'll find me
            exploring the fascinating stories of history — from ancient empires
            to untold legends.
          </Intro>

          <BulletList>
            <li>💃 My cutest and boldest photoshoots</li>
            <li>📖 Personal stories & experiences</li>
            <li>🕰️ My love for history and the art of storytelling</li>
          </BulletList>

          <Closing>
            Get ready for a mix of glamour, charm, and curiosity — because life’s
            too short to be boring.
          </Closing>

          <ExploreButton>Explore</ExploreButton>
        </LeftColumn>

        {/* Right Column with Image */}
        <RightColumn>
          <ImagePlaceholder />
        </RightColumn>
      </Container>

      {/* Keep your other sections below */}
      <Projects />
      <Contact />
    </>
  );
};

export default About;
