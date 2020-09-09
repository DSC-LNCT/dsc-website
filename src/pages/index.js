import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const query = graphql`
  query homeQuery {
    markdownRemark(frontmatter: { type: { eq: "home" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`

export default IndexPage