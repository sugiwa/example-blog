/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>
          <div className='mainBlock'>
            <div className='mainFrame'>
              <div className='mainArticle'>
                {children}
              </div>
            </div>
          </div>
          <div className='subBlock'>
            <div className='subFrame'>
              <h2>人気記事</h2>
              <ol>
                <li><Link to='/article/example'>example</Link></li>
                <li><Link to='/article/example2'>example2</Link></li>
                <li><Link to='/article/example3'>example3</Link></li>
                <li><Link to='/article/example4'>example4</Link></li>
                <li><Link to='/article/example5'>example5</Link></li>
              </ol>
            </div>
            <div className='subFrame'>
              <h2>最新記事</h2>
              <ol>
                <li><Link to='/article/example5'>example5</Link></li>
                <li><Link to='/article/example4'>example4</Link></li>
                <li><Link to='/article/example3'>example3</Link></li>
                <li><Link to='/article/example2'>example2</Link></li>
                <li><Link to='/article/example'>example</Link></li>
              </ol>
            </div>
          </div>
        </main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Example
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
