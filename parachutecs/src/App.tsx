import './App.css'
import React, { FC } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout


const App: FC = () => (
  <div className="App">
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={['Home', 'Blog'].map((name, index) => {
          const key = index + 1;
          return {
            key,
            label: name,
          };
        })}
      />
    </Header>
    <Content style={{ padding: '0 50px', margin: '16px 0' }}>
      <div className="site-layout-content">
      <h1>Paracute Customer Success</h1>
      <p>Helping companies build Customer Success programs that scale</p>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Parachute Customer Success ©2022</Footer>
  </Layout>
  </div>
);

export default App;