import { Button, Card, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const handelback = (e) => {
    navigate(-1);
  }

  return (

    <div>


      <div class="mt-8">
        <button onClick={handelback}>Back</button>
        <Card class="w-[700px]">

          {/* style={{
        width: 500,
      }} */}

          <div class="text-center mb-3">SignUp</div>

          <div>

            <Form
              onFinish={onFinish}
              layout="vertical"
            >

              <div className='grid grid-cols-12 gap-x-2'>

                <div className='col-span-6'>

                  <Form.Item
                    label="First Name"
                    name="first name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your first name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                </div>


                <div className='col-span-6'>

                  <Form.Item
                    label="Last Name"
                    name="last name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your last name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                </div>


                <div className='col-span-6'>

                  <Form.Item
                    label="address"
                    name="Address"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your address!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                </div>



                <div className='col-span-6'>

                  <Form.Item
                    label="Contact"
                    name="contact"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your contact!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                </div>


                <div className='col-span-6'>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your  email!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                </div>

                <div className='col-span-6'>

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

                </div>


                <div className='col-span-6'>

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

                </div>

                <div className='col-span-6'>

                  <Form.Item
                    label=" Confirm Password"
                    name="confirm password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your confirm password!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                </div>


              </div>


              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" className="bg-red-600">
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </div>

  )
}
export default Signup