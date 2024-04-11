import { Button, Card, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const Signup = () => {
  const navigate =useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const handelback=(e)=>{
    navigate(-1);
  }
  return (
    <div>
      <div class="mt-3">
        <button onClick={handelback}>Back</button>
        <Card
          style={{
            width: 300,
          }}
        >
          <div class="text-center mb-3">Sign Up</div>

          <div>
            <Form
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}

            >
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="username"
                label="User Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input

                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
      <Outlet />
    </div>
  )
}
export default Signup