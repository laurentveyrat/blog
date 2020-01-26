/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Header from "./header"
// import "./layout.css"

import { Layout, Menu, Icon } from "antd"

const { Header, Content, Footer, Sider } = Layout

const GLayout = ({ children, page }) => {
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
   <Layout style={{ minHeight: "100vh" }}>
        <Sider breakpoint="lg" collapsedWidth="0">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[page]}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" />
                <span className="nav-text">Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="https://www.youtube.com/watch?v=Kc0uacyvMCQ" target="_blank">
                <Icon type="video-camera" />
                <span className="nav-text">Youtube</span>
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/page-2">
                <Icon type="upload" />
                <span className="nav-text">Page 2</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/about">
                <Icon type="user" />
                <span className="nav-text">About</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#001529", padding: "0 8px" }}>
            <h1 style={{ color: "white" }}>{data.site.siteMetadata.title}</h1>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <div style={{ maxWidth: 960 }}>{children}</div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            BLOG ©2020 Created by Laurent Veyrat
          </Footer>
        </Layout>
      </Layout>
  )
}

GLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GLayout
