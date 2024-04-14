import React from 'react'
import Reusablecomponentfirst from './Reusablecomponentfirst'
import { hotproduct, product, product1 } from '../../uttlis'
import Reusablecomponentsecond from './Reusablecomponentsecond'
import Reusablecomponentthird from './Reusablecomponentthird'
import Carousel from './Carousel'
import LatestProduct from './LatestProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../services/AllProduct'
import { Spin } from 'antd'


const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error} = useSelector((state) => state?.allproduct);
  // const { data } = useSelector((state) => state.allproduct);


  console.log('dafadsf', data);
  console.log('dafdf', loading);
  console.log('dfsafdfa', error);
  // console.log('rgsdag', data);
  console.log('rgsdd3ag', data?.data);
 
  React.useEffect(()=>{
    dispatch(fetchProducts())

  }, [dispatch]);



  return (

    <div>
      <div>
        <Carousel tittle={'Sweater'} data={hotproduct} />

      </div>
    



      <div>
      <Spin spinning={loading}>
        <LatestProduct tittle={'Latest Product'} data={hotproduct} />

        
        <Reusablecomponentfirst tittle={'Hot Product'} data={hotproduct} />
      
        <Reusablecomponentfirst tittle={'Product'} data={product} />
        {/* <Reusablecomponentfirst tittle={'Product1'} data={product1} /> */}

        <Reusablecomponentfirst tittle={'Product1'} data={data?.data} />
      
        <Reusablecomponentsecond tittle={'Sweater'} data={product1} />
        <Reusablecomponentthird tittle={'Sweater'} data={product1} />
        </Spin>


      </div>


    </div>
  )
}

export default Dashboard;