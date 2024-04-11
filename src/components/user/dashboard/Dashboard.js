import React from 'react'
import Reusablecomponentfirst from './Reusablecomponentfirst'
import { hotproduct, product, product1 } from '../../uttlis'
import Reusablecomponentsecond from './Reusablecomponentsecond'
import Reusablecomponentthird from './Reusablecomponentthird'
import Carousel from './Carousel'
import LatestProduct from './LatestProduct'


const Dashboard = () => {
  return (

    <div>
      <div>
        <Carousel tittle={'Sweater'} data={hotproduct} />

      </div>



      <div className='grid w-full gap-y-2'>

        <LatestProduct tittle={'Latest Product'} data={hotproduct} />
        <Reusablecomponentfirst tittle={'Hot Product'} data={hotproduct} />
        <Reusablecomponentfirst tittle={'Product'} data={product} />
        <Reusablecomponentfirst tittle={'Product1'} data={product1} />
        <Reusablecomponentsecond tittle={'Sweater'} data={product1} />
        <Reusablecomponentthird tittle={'Sweater'} data={product1} />



      </div>


    </div>
  )
}

export default Dashboard