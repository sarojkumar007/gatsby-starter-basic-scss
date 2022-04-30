import * as React from "react"
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title={`Home`} />
      <h1>Hello World</h1>
    </Layout>
  )
}

export default IndexPage
