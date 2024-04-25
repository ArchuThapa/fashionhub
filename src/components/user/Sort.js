import { Pagination, Select, Skeleton } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSortData } from '../../services/AllProduct';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../ContextApi';
import ReusablecomponentFirst from './dashboard/Reusablecomponentfirst'


const Sort = () => {

  const dispatch = useDispatch();
  // const { appState, updateState } = useAppContext();
  // const navigate = useNavigate();
  // const carddata = useSelector((state) => state)


  const { data, loading } = useSelector((state) => state?.sortdata);
  console.log('datghhdzsgfsra', data?.data);


  React.useEffect(() => {
    dispatch(fetchSortData());
  }, [dispatch]);

  const options = [

    {
      value: "desc",
      label: "Desc"
    },
    {
      value: "brand",
      label: "Brand"
    }
  ]

  const handleChange = (value, option) => {
    console.log('selected', value, option);
    dispatch(fetchSortData(value));
  };

  const onShowSizeChange = (current, pageSize) => {
    console.log('sfdsfgdsg' ,current,pageSize);
  };



  return (
    <div>
      <div>Sort:</div>

      <Select
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={options}
        allowClear={true}

      />


      <Skeleton loading={loading}>
        <div>
          <ReusablecomponentFirst title={'HotProduct'} data={data?.data?.map((item) => {
            return {
              ...item,
              qty: 1
            }
          })} />
        </div>
      </Skeleton>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={1}
        total={100}
      />
    </div>
  )
}

export default Sort

