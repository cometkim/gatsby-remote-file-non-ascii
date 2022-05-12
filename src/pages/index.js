import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  {
    site {
      siteMetadata {
        test {
          publicURL
        }
      }
    }
  }
`;

const SecondPage = ({ data }) => {
  return (
    <Layout>
      <a target="_blank" href={data.site.siteMetadata.test.publicURL}>
        Can I download file?
      </a>
    </Layout>
  );
}

export default SecondPage
