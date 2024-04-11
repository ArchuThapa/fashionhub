import { Card } from 'antd'
import React from 'react'

const Reusablecomponentsecond = ({ tittle, data }) => {
    return (

        <div>
       
       <div className='font-extrabold text-base text-[red]'>{tittle}</div>

       <div className='grid grid-cols-12 grid-flow-row gap-4'> 
        {
            data?.map((item)=> (
               <div key={item.id}
                className="md:col-span-3">

                    <div>


                    <Card>
                                    <div className='flex justify-start gap-2'>

                                    <div>

                                    <img src={item.image} alt={item.name} className="h-[70px] w-[70px]" />
                                    </div>
                                    <div>

                                    <div className="text-[red] text-2xl font-bold">

                                        ${item.price}

                                    </div>



                                    <div className="text-base">


                                        {item.name}


                                        </div>

                                        </div>
                                        </div>

                                        <div className='min-h-10'>

                                            {item.description}
                                        </div>
                                        <div>

                                            <button className="bg-slate-950 text-slate-50 w-full h-[40px]">Add to Cart</button>
                                        </div>

                                        </Card>

                                        </div>     
                        </div>
                                   
                  
                        ))
                        }
            
                                    
                               
                                </div>
         


           

        </div>
       

    )
}

export default Reusablecomponentsecond