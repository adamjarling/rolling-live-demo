import React from "react";
import Layout from "../components/Layout";
import HomeHero from "../components/heros/Home";
import Seo from "../components/Seo";
import Img from "gatsby-image";
import Kerry from "../components/Kerry";

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
    {/* <section className="section">
      <Img fluid={data.bgImage.childImageSharp.fluid} />
    </section> */}
    <Kerry />
    <section className="section">
      <div className="container">
        <Img fluid={data.deckRoland.childImageSharp.fluid} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Img fluid={data.deckC.childImageSharp.fluid} />
      </div>
    </section>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    bgImage: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "rls-logo2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    deckRoland: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "deck-roland.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 70, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    deckC: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "deck-chrysalis.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 70, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
