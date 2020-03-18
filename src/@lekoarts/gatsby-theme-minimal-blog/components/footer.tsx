/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>
        Created with
        {` `}
        <Styled.a
          aria-label="Link to the site generator"
          href="https://gatsbyjs.org"
        >
          Gatsby
        </Styled.a>
        {` `}
        by
        {` `}
        <Styled.a
          aria-label="Link to the site author"
          href="https://boborchard.com"
        >
          Bob Orchard
        </Styled.a>
      </div>
    </footer>
  )
}

export default Footer
