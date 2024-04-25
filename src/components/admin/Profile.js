import React from 'react'

import { Form } from 'antd'
import Header from './Header';
import { AntdInput, AntdUploder, SaveButton } from '../common';

const Profile = () => {
  const handleFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <div>
      <div className=' flex justify-between'>
      <Header name="Profile"/>
     
      </div>
      <Form onFinish={handleFinish} layout="vertical">
      <div className=' grid grid-cols-4 gap-3 px-10' >
      <div className=' col-span-2'>
        <AntdInput required name="firstname" label="First Name"/>
      </div>
      <div className=' col-span-2'>
        <AntdInput required name="middlename" label= "Middle Name"/>
      </div>
      <div className=' col-span-2'>
        <AntdInput required name="lastname" label= "Last Name"/>
      </div>
      <div className=' col-span-2'>
        <AntdInput required name="email" label="Email" type="email"/>
      </div>
      <div className=' col-span-2'>
        <AntdInput required name="phone" label="Phone" type="number"/>
      </div>
      <div>
      <AntdUploder />
      </div>
      <div className=' col-span-4 text-center'>
      <SaveButton name="save" htmlType="submit" className=" bg-emerald-300 w-2/6 font-varela"/>
          
      </div>
      </div>
      </Form>
    </div>
  )
}

export default Profile