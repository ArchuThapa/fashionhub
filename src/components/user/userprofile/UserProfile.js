

import React from 'react';
import {  Tabs } from 'antd';
import Profile from '../../admin/Profile';



const UserProfile = () => {
    const items=[
        {
            key: '1',
            label: 'Profile',
            children: <Profile />,
          },
          {
            key: '2',
            label: 'Activity',
            children: 'Content of Tab Pane 1',
          },
    ]
    return (
      <>
        <Tabs
          defaultActiveKey="1"
          items={items}
        />
      </>
    );
}

export default UserProfile