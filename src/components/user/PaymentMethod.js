import React from 'react'
import { Table } from "antd";
import { useSelector } from 'react-redux'
import { paymentMethod } from '../uttlis';
import { Esewa } from './Esewa';
import KhaltiCheckout from 'khalti-checkout-web';
import { khalti } from './Khalti';


const PaymentMethod = () => {
    const carditem = useSelector((state) => state)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'title',
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

    

    
    const path = "https://uat.esewa.com.np/epay/main";
    const params = {
        amt: totalPrice,
        psc: 0,
        pdc: 0,
        txAmt: 0,
        tAmt: totalPrice,
        pid: "ee2c3cal",
        scd: "EPAYTEST",
        su: "https://merchant.com.np/page/esewa_payment_success",
        fu: "https://merchant.com.np/page/esewa_payment_failed",
    }


    const [isPayment, setPayment] = React.useState({
        esewa: false,
        khalti: false
    })
    const handelpayment = (id) => {

        console.log("sfdafas", id)
        if (id === 1)
        {
            setPayment({
                esewa: true,
                khalti: false
            })

        }
            
            else if(id ===2 )
            {
                const checkout = new KhaltiCheckout(khalti);
                    checkout.show({amount:totalPrice});
             
            }
            
    }

    console.log("fasdf", isPayment)
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
                        <div className="flex flex-col items-center mt-40 ml-10" onClick={() => handelpayment(item.id)}>
                            <img src={item.image} alt={item.name} className="h-[100px] w-[100px] object-contain" />
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
            {
                isPayment?.esewa && (
                    <Esewa path={path} params={params} />
                )
            }
        </div>
    )
}
export default PaymentMethod