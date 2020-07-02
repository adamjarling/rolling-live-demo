import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const HeroAbout = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "events.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      Tag="section"
      className={`hero is-medium ${className}`}
      fluid={data.desktop.childImageSharp.fluid}
    >
      <div className="hero-body">
        <div className="container"></div>
      </div>
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(HeroAbout)`
  color: white;
  /* &:before {
    opacity: 0.5 !important;
  } */
`;

export default StyledBackgroundSection;
