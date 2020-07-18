import { graphql } from 'gatsby'

export const fetchBackgroundImages = graphql`
  query {
    circle: file(relativePath: { eq: "circle.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    stripes: file(relativePath: { eq: "stripes.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
