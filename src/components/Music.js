import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export default function Music() {
  var data = useStaticQuery(graphql`
    query {
      farm: file(relativePath: { eq: "adam-farmrock.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      uo: file(relativePath: { eq: "adam-uo-bigscreen.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nikki: file(relativePath: { eq: "nikki-sixx.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sturgis: file(relativePath: { eq: "sturgis.JPG" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studio: file(relativePath: { eq: "studio.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mary: file(relativePath: { eq: "maryRules.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emo: file(relativePath: { eq: "adam-emo.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stage: file(relativePath: { eq: "adam-stage.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blues: file(relativePath: { eq: "blues-heaven.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mexico: file(relativePath: { eq: "BSVT6000.JPG" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h2 className="title">Bands</h2>
          <h3 className="subtitle mb-6">Music projects, touring, living</h3>

          <h3 className="title is-size-4">New Band FURBABY</h3>
          <h4 className="subtitle">Check it out!</h4>

          <figure className="image is-16by9 mb-6">
            <iframe
              className="has-ratio"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/piCdPUIlJlw"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Boxed In"
            ></iframe>
          </figure>

          <figure className="image">
            <Img fluid={data.farm.childImageSharp.fluid} />
          </figure>
          <figure className="image">
            <Img fluid={data.uo.childImageSharp.fluid} />
          </figure>
          <figure className="image">
            <Img fluid={data.blues.childImageSharp.fluid} />
          </figure>
          <figure className="image">
            <Img fluid={data.nikki.childImageSharp.fluid} />
          </figure>
          <figure className="image">
            <Img fluid={data.studio.childImageSharp.fluid} />
          </figure>
          <figure className="image">
            <Img fluid={data.mexico.childImageSharp.fluid} />
          </figure>
          <figure className="image">
            <Img fluid={data.sturgis.childImageSharp.fluid} />
          </figure>
          <figure className="image">
            <Img fluid={data.emo.childImageSharp.fluid} />
          </figure>
          <figure className="image">
            <Img fluid={data.stage.childImageSharp.fluid} />
          </figure>
        </div>
      </div>
    </section>
  );
}
