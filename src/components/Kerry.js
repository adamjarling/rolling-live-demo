import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Kerry() {
  var data = useStaticQuery(graphql`
    query {
      kerry: file(relativePath: { eq: "kerry-brown.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-size-1">Kerry Brown</h2>
        <div className="columns">
          <div className="column is-two-fifths-desktop is-one-third-fullhd">
            <Img fluid={data.kerry.childImageSharp.fluid} />
          </div>
          <div className="column is-three-fifths-desktop is-two-thirds-fullhd">
            <div className="content">
              <p>
                Award-winning multi-platinum music producer, artist manager, and
                event producer Kerry Brown is involved in the marketing and
                production of over 50 million records sold. He has produced or
                executive produced and consulted on numerous high-level
                entertainment properties. His knowledge of emerging digital
                trends is also extensive and was used in his production of the
                live multimedia show for Pepsi’s 2014 Superbowl’s celebration
                #PEPCITY as well as in the #808 & #909 day for Roland.
              </p>
              <p>
                Kerry also produced His Holiness the Dalai Lama’s 80th birthday
                party, Santa Barbara’s legendary Starry Nites Festival, and ONE
                LOVE MALIBU that featured Katy Perry, Gwen Stefani, Rita Ora,
                Joe Walsh, Robin Thicke, Rick Springfield, Alanis Morissette,
                Macy Gray, and more which raised 1 million+ for the recovery of
                the Malibu fire areas. Brown’s most recent involvement with live
                production was in partnership with The Art of Elysium to bring
                their gala ‘HEAVEN IS ROCK AND ROLL’ to life at the Hollywood
                Palladium, reuniting the surviving members of Nirvana (Dave
                Grohl, Krist Novoselic & Pat Smear) with St. Vincent, Beck and
                Violet Grohl as well as L7, Cheap Trick and Marilyn Manson.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
