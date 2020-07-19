import Img from 'gatsby-image'
import styled from '@emotion/styled'

export const Stripes = styled(Img)`
  left: 0;
  bottom: 0;

  width: 100%;
  max-width: 800px;

  transform: translate(-50%, 45%);

  @media (min-width: 640px) {
    transform: translate(5%, 63%);
  }
`

export const Circle = styled(Img)`
  top: 0;
  right: 0;
  width: 60%;
  max-width: 730px;
  transform: translate(25%, -20%);
`
