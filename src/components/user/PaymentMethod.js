import React from 'react'
import { Table } from "antd";
import { useSelector } from 'react-redux'
import { paymentMethod } from '../uttlis';

const PaymentMethod = () => {
    const carditem = useSelector((state) => state)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            key: 'qty',
        },

    ];
    const totalPrice = carditem?.addtocard?.data?.reduce((total, item) => {
        return total + item.price * item.qty;
    }, 0);
    const totalQty = carditem?.addtocard?.data?.reduce((total, item) => {
        return total + item.qty;
    }, 0);
    return (

        <div className="grid grid-cols-2 gap-4">
        
        <div>
            <div>
                <strong>PaymentMethod</strong>
            </div>
            <Table dataSource={carditem?.addtocard?.data} columns={columns} />
            <div>
                Total Qty: {totalQty} & Total Sum: {totalPrice}
            </div>
        </div>

    
        <div className="flex justify-start gap-2">
            {paymentMethod?.map((item) => (
                <div key={item.id}>
                    <div className="flex flex-col items-center mt-40 ml-10">
                        <img src={item.image} alt={item.name} className="h-[100px] w-[100px] object-contain" />
                        {item.name}
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}




export default PaymentMethod