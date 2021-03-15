import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"

export const query = graphql`
  query GetProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      info {
        info
      }
      image {
        gatsbyImageData
      }
    }
  }
`

const productTemplate = ({
  data: {
    product: {
      title,
      price,
      image,
      info: { info },
    },
  },
}) => {
  const imageData = getImage(image)
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">back to products</Link>
        <h1>Single product: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <GatsbyImage image={imageData} alt={title}></GatsbyImage>
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>Add to Cart</button>
        </article>
      </section>
    </Layout>
  )
}

export default productTemplate
