import React from "react"

import Layout from "../components/Layout"
import Search from "../components/Search"
import SEO from "../components/seo"

const SearchPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Search />
  </Layout>
)

export default SearchPage
