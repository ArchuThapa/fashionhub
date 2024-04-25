import React from 'react';
import { AutoComplete, Avatar, Badge, ConfigProvider, Drawer, Dropdown, Image, Input, Layout, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import logok from '../image/logok.png';
import { LoginOutlined, SettingOutlined, ShoppingCartOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
// import { useAppContext } from '../ContextApi';
import { useDispatch, useSelector } from 'react-redux'
import Order from '../user/Order';
import { logout } from '../../redux/slices/LoginSlices';
import { fetchSearchData} from '../../services/AllProduct';
const { Header, Content, Footer } = Layout;
const UserLayout = () => {
  // const{appState }=useAppContext()
  const carditem = useSelector((state) => state)
  console.log('carditem', carditem);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const iteminfo = [
    {
      name: 'About Us',
      link: '/aboutus'
    },
    {
      name: 'Contact Us',
      link: '/contactus'
    },
    {
      name: 'Blog',
      link: '/blog'
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

  const handelback = (item) => {
    Navigate(item.link)

  }


  const [open, setOpen] = React.useState(false);


  const onClose = () => {
    setOpen(false);
  };


  const handelOrderList = () => {

    if (carditem?.addtocard?.data?.length >= 1)


      // appState?.addtocard?.length >=1
      setOpen(true);
  }


  const items = [
    {
      key: '1',
      label: <div onClick={() => handleClick("/user/profile")}>Profile</div>,

      icon: <UserOutlined />,

    },
    {
      key: '2',
      label: <div onClick={() => handleClick("/user/setting")}>Setting</div>,
      icon: <SettingOutlined />,

    },
    {
      key: '3',
      label: <div onClick={() => handleClick(3)}>Logout</div>,
      icon: <LoginOutlined />,

    },

  ];

  const handleClick = (e) => {
    if (e === 3) {
      dispatch(logout());
    }
    else {
      Navigate(`${e}`)
    }
  }

  const handleSearch = (value) => {
    console.log('valuewrwaef', value)
    dispatch(fetchSearchData(value?.target?.value));
  };

  const onSelect = (e, option) => {
    Navigate(`/searchproduct/${option.id}`)
    console.log('onSelect', option);
  };
  const { data: searchdata } = useSelector((state) => state.searchproduct);
  console.log("fdsafasd", searchdata?.data)

  console.log("hhhhh", logout);


  return (

    <ConfigProvider
      theme={{
        components: {
          Layout: {
            /* here is your component tokens */
            bodyBg: '#b585c5',
            headerBg: '#b585c5',
            footerBg: '#b585c5'
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
              <Image src={logok} alt="logo" preview={false} width={60}
                height={60}
                className="rounded-full"
                layout="responsive"
                quality={100} />
            </div>


            <div className='ml-6'>
              <AutoComplete
                popupMatchSelectWidth={252}
                style={{
                  width: 300,
                }}
                options={searchdata?.data?.map((item) => {
                  return {
                    ...item,
                    value: item?.title,
                    label: item?.category
                  }
                })}
                onSelect={onSelect}
                size="large"
              >
                {/*   onPressEnter={handleSearch} */}

                <Input.Search size="large" placeholder="Search Product Here" onSearch={handleSearch} />
              </AutoComplete>
            </div>

            <div className='iteminfo'>

              {iteminfo?.map((item) => (
                <div key={item.link} onClick={() => handelback(item)}>

                  {item.name}

                </div>
              ))}
            </div>
            <div className='iteminfo'>
              {
                carditem?.authinfo?.userToken && (
                  <div>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      trigger={['click']}
                      placement="bottomCenter"
                    >
                      <Avatar icon={<UserAddOutlined />} />

                    </Dropdown>

                  </div>

                )
              }
              <div>
                {/* <Badge count={[...new Set (appState?.addtocard)].length} size="small" onClick={handelOrderList}> */}
                <Badge count={carditem?.addtocard?.data?.length} size="small" onClick={handelOrderList}>


                  <Avatar icon={<ShoppingCartOutlined />} size="small" />
                </Badge>


              </div>
              {authinfo?.map((item) => (
                <div key={item.link} onClick={() => handelback(item)}>

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
          open && (
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