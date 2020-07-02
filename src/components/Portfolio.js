import React from "react";
import Card from "./Card";
import { useStaticQuery, graphql } from "gatsby";
import n from "../images/northwestern-thumbnail.jpg";
import styled from "styled-components";

const NImage = styled.img`
  float: left;
  height: 85px;
  width: auto;
  padding-right: 1rem;
`;

export default function Portfolio() {
  var data = useStaticQuery(graphql`
    query {
      abbarama: file(relativePath: { eq: "portfolio-abbarama.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trader: file(relativePath: { eq: "portfolio-trade-r.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      daredevil: file(relativePath: { eq: "portfolio-daredevil.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nulib: file(relativePath: { eq: "portfolio-nulib.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fi: file(relativePath: { eq: "portfolio-film-independent.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      uo: file(relativePath: { eq: "portfolio-urge-overkill.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      osd: file(relativePath: { eq: "portfolio-osd-viewer.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      morningstar: file(relativePath: { eq: "portfolio-morningstar.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avalon: file(relativePath: { eq: "portfolio-avalon.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thelastvegas: file(relativePath: { eq: "portfolio-thelastvegas.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      arch: file(relativePath: { eq: "portfolio-arch.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const portfolio = [
    {
      title: "ABBARAMA",
      url: "https://www.abbarama.com/",
      description:
        "GatsbyJS, React, and Netlify CMS power this new website for pop sensation ABBARAMA.",
      fluid: data.abbarama.childImageSharp.fluid,
    },
    {
      title: "Northwestern Libraries Digital Collections",
      url: "https://dc.library.northwestern.edu/",
      description:
        "React/Redux discovery application architected from the ground-up. Hits an AWS Elasticsearch index, reads IIIF manifests, and utilizes ReactiveSearch for faceting & search.",
      fluid: data.nulib.childImageSharp.fluid,
    },
    {
      title: "Trade-r",
      url: "https://trade-r.com/",
      description:
        "Cryptocurrency trading PWA which enforces disciplined trading entrances and exits. Built from the ground up with React, Firebase suite and various crypto APIs. Launch February 2020.",
      fluid: data.trader.childImageSharp.fluid,
    },
    {
      title: "Daredevil Pedals",
      url: "https://www.daredevilpedals.com/",
      description:
        "Chicago-based fuzz pedal company making the raddest hand-wired fuzz and delay pedals on the market. Check 'em out and fuzz on.",
      fluid: data.daredevil.childImageSharp.fluid,
    },
    {
      title: "Film Independent",
      url: "https://www.filmindependent.org/",
      description: "WordPress, PHP, CodeIgniter MVC, Filemaker Pro",
      fluid: data.fi.childImageSharp.fluid,
    },
    {
      title: "Urge Overkill",
      url: "http://www.urgeoverkill.com/",
      description:
        "A smattering of WordPress plugins, some custom PHP modules and CSS drive Chicago's indie darlings, Urge Overkill's website.",
      fluid: data.uo.childImageSharp.fluid,
    },
    {
      title: "OpenSeadragon React Viewer NPM Package",
      url: "https://www.npmjs.com/package/openseadragon-react-viewer",
      description:
        "NPM package React component designed as a wrapper around the OpenSeadragon viewer. If your application supports tiled images for deep zoom, import this component into your React application, feed it a IIIF manifest URL via props and it will render an OpenSeadragon viewer with custom navigation, filtering of tile sources, and zoom/pan controls.",
      fluid: data.osd.childImageSharp.fluid,
    },
    {
      title: "Morningstar Investments",
      url: "https://www.morningstar.com/",
      description:
        "ES5 JavaScript custom framework, AEM (Adobe Experience Mananger), CSS3/HTML.",
      fluid: data.morningstar.childImageSharp.fluid,
    },
    {
      title: "Avalon Media System",
      url: "https://www.avalonmediasystem.org/",
      description:
        "Audio / Video repository application co-developed by Indiana and Northwestern Universities. A Rails application, where I re-vamped the entire JavaScript implementation into ES6+ modules, and began a UI component pattern using ReactJS and Webpack.",
      fluid: data.avalon.childImageSharp.fluid,
    },
    {
      title: "The Last Vegas",
      url: "https://thelastvegas.com/",
      description:
        "GatsbyJS, React, and HTMLUP tool this website for Chicago's garage, glam boogie rock faves.",
      fluid: data.thelastvegas.childImageSharp.fluid,
    },
    {
      title: "ARCH: Institutional Repository",
      url: "https://arch.library.northwestern.edu/",
      description:
        "Arch is Northwestern Libraries Institutional Repository, designed for self-deposit of works including research, thesis, and dissertations by faculty and students. Built on top of the Samvera community's Hyrax application, I customized this Rails application to adhere to Northwestern Global Marketing branding guidelines.",
      fluid: data.arch.childImageSharp.fluid,
    },
  ];

  return (
    <>
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h2 className="title">Portfolio</h2>
            <h3 className="subtitle">...and web projects</h3>
            <div className=" content">
              <p>
                Innovative and proactive Front-End Developer capable of
                developing component-based, JavaScript web applications for
                demanding clients. Talented in building front-end stacks, team
                leadership and independent problem-solving. Highly organized
                multitasker with expertise in scheduling projects, enhancing
                designs and verifying code. Prepared to offer React, JavaScript
                and UX abilities in challenging roles.
              </p>

              <p>
                <NImage src={n} alt="Northwestern University" />I currently work
                for{" "}
                <a
                  href="https://www.library.northwestern.edu/"
                  target="_blank"
                  className="has-text-white"
                >
                  Northwestern University Libraries Repository and Digital
                  Curation department,
                </a>{" "}
                writing open-source, repository applications which digitize the
                world's cultural heritage assets.
              </p>
            </div>
            {portfolio.map((item) => (
              <Card key={item.title} {...item} />
            ))}
            <div className="content">
              <button className="button is-fullwidth">
                View All (Coming soon)
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
