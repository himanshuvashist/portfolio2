import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        "himanshu",
        "himanshu vashist",
        "software developer",
        "freelancer",
        "javascript",
        "js",
      ]}
    />
    <LandingBio />
  </Layout>
)

export default IndexPage
