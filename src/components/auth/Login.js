import { ArrowLeftOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../services/LoginAction';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const onFinish = async(values) => {
    await userLogin(values)(dispatch).unwrap();
    navigate ('/');
   
    // console.log('Success:', values);
    console.log('valuesss', values);

  };
 
  const handelback = (e) => {
    navigate(-1);
  }


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const testdata = useSelector((state) => state);
  console.log('Test data:', testdata?.authinfo?.loading);



  return (

    <div>
      

      <div class="mt-8">

        <LeftCircleOutlined onClick={handelback} />

        {/* <ArrowLeftOutlined onClick={handelback} /> */}
        {/* <button onClick={handelback}>Back</button> */}

        <Card class="w-250">

          {/* style={{
        width: 500,
      }} */}


          <div class="text-center mb-3">Login</div>

          <div>

            <Form
              onFinish={onFinish}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                // name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>

              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >


                <Button type="primary" htmlType="submit" className="bg-red-600 ml-5 w-55" loading={testdata?.authinfo?.loading}>
                  Log In
                </Button>




                <div>

                  <a onClick={showModal}>
                    forget password?
                  </a>
                  <Modal title="Find Your Account " open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                    <p>Please enter your email or mobile number to search for your account.</p>
                    <form>
                      <Form.Item>
                        <Input placeholder='Email or Mobile Number' />
                      </Form.Item>
                    </form>

                  </Modal>
                </div>

              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </div>

  )
}
export default Login