import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <div>
        <p>Hello from examples page</p>
        <Header></Header>
        <HeaderStatic></HeaderStatic>
        <h5>author: {author}</h5>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
export default examples
