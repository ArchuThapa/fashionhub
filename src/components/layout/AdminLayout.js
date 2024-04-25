import React from 'react';
import {  Outlet, useNavigate } from 'react-router-dom'
import {  Layout, Menu, theme } from 'antd'
import { adminItems } from '../uttlis/index';
const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const Navigate =useNavigate();
  const handelRoute=(e)=>{
    Navigate(`${e.key}`);
  }
  console.log('hiiidsf', handelRoute);
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div class="flex">
          <div class="flex-none p-4 ">Logo</div>
          <div class="flex-none p-4 ">profile</div>
          <div class="flex-none p-4 ">Logout</div>
         

        </div>
   
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={adminItems}
              onClick={handelRoute}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
           
            <div>
        <Outlet/>
    </div>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
       Archana Thapa ©{new Date().getFullYear()} Created by Archana Thapa
      </Footer>
    </Layout>
  );
};
export default AdminLayout;





