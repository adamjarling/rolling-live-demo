import React from "react";
import Img from "gatsby-image";
import ExternalLink from "./ExternalLink";

export default function Card({ title, url, description, fluid }) {
  return (
    <div className="card my-6">
      <div className="card-image">
        <figure className="image">
          <Img fluid={fluid} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h3>{title}</h3>
          <p>
            <ExternalLink url={url}>{url}</ExternalLink>
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
