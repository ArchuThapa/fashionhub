import React from 'react'
import { useAppContext } from '../ContextApi'
import {  Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Reusablecomponentfirst from './dashboard/Reusablecomponentfirst';

const Details = () => {
    const {appState}=useAppContext();

  return (
    <div className=' w-[1000px] flex flex-wrap justify-around'>
    <div><img className='w-[300px] h-[300px]' src={appState?.data?.image}  alt="" /></div>
    <div>
        <div>
            Name:{appState.data.name}
            <div>
           Price: {appState.data.price}
            </div>
            <div>
            Description:{appState.data.description}
            </div>
            <div>
             Brand:{appState.data.brand}
            </div>
            <div>
              Discount:{appState.data.discount}%
            </div>
            <div>
View:{appState.data.view}
            </div>
            <div>
              Stock:{appState.data.stock}
            </div>
            {/* <div>
              relatedProduct:{appState.data.relatedProduct}
            </div> */}
            <div>
            <Rate allowHalf defaultValue={appState.data.Rate} />;
            <TextArea></TextArea>

            </div>

            <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600">
                                Buy Now
                                </button>
        </div>
        <div> <button className="bg-blue-900 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600">
                                Add To Cart
                                </button></div>

    </div>
    <div className="md:col-span-6 md:ml-[10rem]">
             <Reusablecomponentfirst data={appState?.data?.relatedProduct}/>
            </div>
    </div>
  )
}

export default Details;