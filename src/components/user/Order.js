import React from 'react'
// import { useAppContext } from '../ContextApi'
import { useDispatch, useSelector} from 'react-redux'
import { DeleteOutlined, MinusSquareOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { updateCard } from '../../redux/slices/AddToCard'
import {  useNavigate } from 'react-router-dom';
const Order = () => {
    // const { appState } = useAppContext();
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const carditem = useSelector((state) => state)
    console.log('hii', carditem);
    const [orderdata, setOrderData] = React.useState([]);
    const handelAdd = (id) => {
        const addtoqty = orderdata?.map((item) => {
            if (id === item.id) {
                return {
                    ...item,
                    qty: item.qty + 1,
                };
            }
            else {
                return {
                    ...item,
                };
            }
        });

        dispatch(updateCard(addtoqty))
    };


    const handelMinus = (id, qty) => {
        if (qty > 1) {
            const minusQty = orderdata.map((item) => {
                if (id === item.id) {
                    return {
                        ...item,
                        qty: item.qty - 1,
                    };
                } else {
                    return {
                        ...item,
                    };
                }
            });
            dispatch(updateCard(minusQty))
            
        }
    };

    const handelDelete = (id) => {
        dispatch(updateCard(carditem?.addtocard?.data?.filter((item) => item.id !== id)))
    };

    React.useEffect(() => {
        setOrderData(carditem?.addtocard?.data)
    }, [carditem?.addtocard?.data]);

    const totalPrice = orderdata?.reduce((total, item) => {
        return total + item.price * item.qty;
    }, 0);

     console.log('orderdata', orderdata);
return (
    <div>
      <h1>Details</h1>
  <div>
  {
        orderdata.map((item) => {
          return (
            <div key={item.id} className=' flex font-varela text-md 
                 items-center px-2 my-2 justify-between border-b-2 border-b-slate-400'>
              <div className='flex'>
                <img src={item.image} alt="items" className=' h-16 w-16'></img>

                <section className='px-2'>
                  <h1 className='text-blue-500 font-bold flex justify-center'>{item.name}</h1>
                  <h2 className='text-red-500'>Price:${item.price * item.qty}</h2>
                  <h1>QTY:{item.qty}</h1>
                </section>
              </div>
              <div>

                <h1 className='text-green-500'><PlusCircleOutlined onClick={() => handelAdd(item.id)} /></h1>

                <h1 ><MinusSquareOutlined onClick={() => handelMinus(item.id, item.qty)} /></h1>
                <h1 className='text-red-500'><DeleteOutlined onClick={() => handelDelete(item.id)} /></h1>
              </div>

            </div>
          )
        })
      }
  </div>
      <div>
        <h1 className='bg-red-200 w-32 '>Total price: ${totalPrice}  </h1>
        {/* <button className='bg-green-700  w-full py-3'onClick={()=>navigate(/payment)}>Order Now</button> */}
        <button  className='bg-green-700  w-full py-3' onClick={()=> navigate('/payment')}>
          Order Now
        </button>
      </div>
    </div>
  )
}

export default Order