import React from 'react';
import {  Avatar, Badge, ConfigProvider,Drawer,Image, Layout, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import logok from '../image/logok.png';
import { ShoppingCartOutlined } from '@ant-design/icons';
// import { useAppContext } from '../ContextApi';
import { useSelector} from 'react-redux'
import Order from '../user/Order';
const { Header, Content, Footer } = Layout;
const UserLayout = () => {
// const{appState }=useAppContext()
const carditem = useSelector((state) => state)
    console.log('carditem', carditem);
  const Navigate=useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const iteminfo=[
    {
      name:'About Us',
      link:'/aboutus'
    },
    {
      name:'Contact Us',
      link:'/contactus'
    },
    {
      name:'Blog',
      link:'/blog'
    },]

    const authinfo = [
      {
        name: 'Sign Up',
        link: '/signup'
      },
      {
        name: 'Login',
        link: '/login'
      }
    ];
  
    const handelback=(item)=>{
      Navigate(item.link)
    
    }


    const [open, setOpen] = React.useState(false);

  
    const onClose = () => {
      setOpen(false);
    };


    const handelOrderList =() =>{
    
      if(carditem?.addtocard?.data?.length>=1)
      
     
      // appState?.addtocard?.length >=1
      setOpen(true);
    }

    
    return (
      
<ConfigProvider
  theme={{
    components: {
      Layout: {
        /* here is your component tokens */
        bodyBg: '#b585c5',
        headerBg: '#b585c5',
        footerBg:'#b585c5'
      },
    },
  }}
>





      <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className='header'>
          <div className='absolute left-3 mt-0.5 ml-8 overflow-hidden'>
      


            <Image src={logok} alt="logo"preview={false}   width={60}
                    height={60}
                    className="rounded-full"
                    layout="responsive"
                    quality={100}/>
            </div>
         
          <div className='iteminfo'>

            
         
            {iteminfo?.map((item) => (
              <div key={item.link} onClick={()=>handelback(item)}>
              
                  {item.name}
               
              </div>
            ))}
          </div>
            <div className='iteminfo'>
            <div>
            {/* <Badge count={[...new Set (appState?.addtocard)].length} size="small" onClick={handelOrderList}> */}
            <Badge count={carditem?.addtocard?.data?.length} size="small" onClick={handelOrderList}>


              <Avatar icon={<ShoppingCartOutlined />} size="small" />
            </Badge>

            
            </div>
              {authinfo?.map((item) => (
                <div key={item.link} onClick={()=>handelback(item)}>
              
                    {item.name}
          
          
                </div>
              ))}
            </div>
          </div>
        </Header>
        
        <Content
          style={{
            padding: '0 48px',
        
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Archana Thapa ©{new Date().getFullYear()} Created by Archana Thapa
        </Footer>
      </Layout>
      <div>
        {
        open &&(
          <Drawer title="Order List" onClose={onClose} open={open}>
       <Order />
        </Drawer>

        )
        

        }
      
        
      </div>
      </ConfigProvider>
    );
  };
  
  export default UserLayout;