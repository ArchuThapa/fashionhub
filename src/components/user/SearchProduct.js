import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { fetchSearchDynamicData } from '../../services/AllProduct'
import { useDispatch, useSelector } from 'react-redux'
import { Rate, Skeleton } from 'antd'
const SearchProduct = () => {
    const params = useParams()
    const location = useLocation()
    console.log("params", params)
    const dispatch = useDispatch()
    const { data , loading } = useSelector((state) => state.searchdynamicproduct);
    React.useEffect(() => {
        dispatch(fetchSearchDynamicData(`${params.id}`))
    }, [params?.id])
    console.log("datadasaadah", data)
    return (
        <Skeleton loading={loading}>
           <div className="grid md:grid-cols-12 grid-flow-row">
            <div className="md:col-span-6 md:ml-[10rem]">
                <div className="sm:w-1/2 mdIw-[500px] max-h-32 h-40 bg-black ">
                        <div>
                            <img src={data?.image} className="h-34 w-full " alt='gg' />
                        </div>
                </div>
            </div>
            <div className="md:col-span-6 grid gap-2">
                <div>
                    {data?.title}
                </div>
                <div>
                    {data?.category}
                </div>
                <div className="flex">
                Price:
                <div>
                     {data?.price}
                </div>
                </div>
                <div>
                    {data?.brand}
                </div>
                <div>
                    {data?.description}
                </div>
                <div>
                    <Rate allowHalf value={data?.rating.rate} className="text-[red]" />
                </div>
            </div>
        </div>
        </Skeleton>
    )
}
export default SearchProduct