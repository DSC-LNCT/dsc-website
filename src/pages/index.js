import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/global.scss"
import Hero from "../components/Hero"

const IndexPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <Hero title={title} description={description} />
      <div style={{ maxWidth: `30px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query homeQuery {
    markdownRemark(frontmatter: { type: { eq: "home" } }) {
      frontmatter {
        title
        description
        cta {
          url
          text
        }
        image {
          publicURL
        }
      }
    }
  }
`

export default IndexPage
