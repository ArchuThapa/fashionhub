import React from 'react'
import Reusablecomponentfirst from './Reusablecomponentfirst'
import { hotproduct, product, product1 } from '../../uttlis'
import Reusablecomponentsecond from './Reusablecomponentsecond'
import Reusablecomponentthird from './Reusablecomponentthird'
import Carousel from './Carousel'
import LatestProduct from './LatestProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchcarouselData } from '../../../services/AllProduct'
import { Skeleton, Spin } from 'antd'


const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state?.allproduct)
  const { data: carouseldata, loading: carouselloading, error: carouselerror } = useSelector((state) => state?.carouseldata)


  // const { data } = useSelector((state) => state.allproduct);


  console.log('dafadsf', data);
  console.log('dafdf', loading);
  console.log('dfsafdfa', error);
  // console.log('rgsdag', data);
  console.log('rgsdd3ag', data?.data);
  console.log('rgsdd3agss', carouseldata?.data);
  React.useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchcarouselData());

  }, [dispatch]);



  return (

    <div>
      <div>

        <Skeleton loading={carouselloading}>
        {/* <Carousel tittle={'Sweater'} data={hotproduct} /> */}
        <Carousel tittle={'Sweater'} data={carouseldata?.data} />
        </Skeleton>

      </div>




      <div>
        <Spin spinning={loading}>
          <LatestProduct tittle={'Latest Product'} data={hotproduct} />



          {/* <Reusablecomponentfirst tittle={'Hot Product'} data={hotproduct} /> */}
          <Reusablecomponentfirst tittle={'Hot Product'} data={data?.data?.map((item)=>{
            return{
              ...item,
              
              qty:1
            }
          })} />

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