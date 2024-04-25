import React from 'react'
import
{ Table }
from
"antd"
;
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser } from '../../services/AllProduct';
import Header from './Header';

const UserList = () => {
    const dispatch =useDispatch();
  
    const { data} = useSelector((state) => state?.userdata)
    console.log('dadfad', data?.data)




    React.useEffect(() => {
        dispatch(fetchAllUser());
      
    
      }, [dispatch]);
    // const dataSource = [
    //     {
    //       key: '1',
    //       name: 'Mike',
    //       age: 32,
    //       address: '10 Downing Street',
    //     },
    //     {
    //       key: '2',
    //       name: 'John',
    //       age: 42,
    //       address: '10 Downing Street',
    //     },
    //   ];
      
      const columns = [
        {

            title: 'First Name',
          dataIndex: ['name', 'firstname'],
          
        },
        {
          title: 'Last Name',
          dataIndex: ['name', 'lastname'],
         
        },
        {
          title: 'Email',
          dataIndex: 'email',
          
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
         
        },
        {
          title: 'Username',
          dataIndex: 'username',
         
        },
        {
          title: 'Password',
          dataIndex: 'password',
         
        },

       


        {
          title: 'Address',
          dataIndex: ['address','city']
         
        },
      ]
      
  return (
    <div> 
           <Header name='UserList'/>
        <Table dataSource={data?.data} columns={columns} />
    </div>
  )
}

export default UserList