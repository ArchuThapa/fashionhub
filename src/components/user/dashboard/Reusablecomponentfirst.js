import { Card } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { useAppContext } from '../../ContextApi'
import { updateCard } from '../../../redux/slices/AddToCard'

const Reusablecomponentfirst = ({ tittle, data }) => {
    const { appState, updateState } = useAppContext()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const carditem = useSelector((state) => state)

   
    const handleDetails = (item) => {
        updateState({
            ...appState,
            data: item
        });
        navigate('/details');
    };

    const addTOCard = (item) => {

        dispatch(updateCard([...new Set([...carditem?.addtocard?.data,...[item]])]));
        // dispatch(updateCard([]));  // FIRST WE HAVE TO PASS EMPTY ARRAY

    };
    

    return (

        <div>
            <div className='font-extrabold text-base text-[red]'>{tittle}</div>
            <div className=' py-1 font-varela grid lg:grid-cols-5 md:grid-cols-2 gap-1 px-8'></div>

            <div className="grid grid-cols-12 grid-flow-row gap-4">
                {
                    data?.map((item) => (
                        <div key={item.id} className="col-span-2"  >
                            <div className='grid gap-2' >
                                {item.name}
                                <Card
                                    cover={<img src={item.image} className="h-[150px]" alt={item.name} />}
                                >

                                    <div className='grid gap-2' onClick={() => handleDetails(item)}>
                                        <div>
                                            {item.price}
                                        </div>

                                        <div>
                                            {item.description}
                                        </div>

                                        <div>
                                            {item.brand}
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-slate-950 text-slate-50 w-full h-[40px] mt-2" onClick={() => addTOCard(item)} >Add to Cart</button>




                                    </div>

                                </Card>



                            </div>

                        </div>
                    ))
                }
            </div>

            {/* <div>HotProduct</div> */}

        </div>

    )
}
export default Reusablecomponentfirst