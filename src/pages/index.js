import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={styles.h1}>Example Blogへようこそ</h1>
    <p>このブログではエンジニアについて発信しています。</p>
    <div style={{ maxWidth: `300px`, margin:`0 auto 1.45rem`,}}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
