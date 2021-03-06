import React from "react"
import Grid from "@material-ui/core/Grid"

import Layout from "components/layout"
import SEO from "components/SEO"
import CreditCardApiDemo from "../containers/CreditCardApiDemo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container justify="center">
      <Grid item xs={12} sm={6} md={6}>
        <CreditCardApiDemo />
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
