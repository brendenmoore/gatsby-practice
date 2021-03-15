import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/desert.jpg"
import { GatsbyImage } from "gatsby-plugin-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "ocean.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 400
          height: 300
          transformOptions: { grayscale: false }
          placeholder: BLURRED
        )
      }
    }
    fluid: file(relativePath: { eq: "beach.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" alt="desert at night" />
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <GatsbyImage
          image={data.fixed.childImageSharp.gatsbyImageData} alt="beach"
        ></GatsbyImage>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <GatsbyImage
          image={data.fluid.childImageSharp.gatsbyImageData} alt="palms"
        ></GatsbyImage>
      </article>
    </section>
  )
}

export default Images
