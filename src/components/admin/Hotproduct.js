import { Form } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { hotProductAction } from "../../services/HotProduct";
import { AntdInput, AntdUploder, SaveButton } from "../common";
import Header from "./Header";

const HotProduct = () => {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    console.log("productadded", values);
    await hotProductAction(values)(dispatch).unwrap();
  };
  const [isHotProduct, setisHotProduct] = React.useState([
    {
      title: null,
      price: null,
      description: null,
      category: null,
      image: null,
      sn: 0,
    },
  ]);

  const handleAdd = () => {
    const data = {
      title: null,
      price: null,
      description: null,
      category: null,
      image: null,
      sn: isHotProduct.length,
    };

    setisHotProduct([...isHotProduct, ...[data]]);
  };
  const handleDel = (id) => {
    const deletedata = isHotProduct.filter((item) => item.sn !== id);
   

    setisHotProduct(deletedata);
  };


  return (
    <div>
        <div><Header name="HotProdut"/>
        </div>
    
      <SaveButton name={`Add`} onClick={handleAdd} />
      
      <div>
        <Form layout="vertical" onFinish={onFinish}>
          {isHotProduct.map((item, idx) => {
            return (
               <div key={idx}>
              <div className=" grid grid-cols-2">
              <div>
                  <AntdInput name={["title", item.sn]} label={`Title`} />
                </div>
                <div>
                  <AntdInput name={["price", item.sn]} label={`Price`} />
                </div>
              
                <div>
                  <AntdInput name={["category", item.sn]} label={`Category`} />
                </div>
                <div>
                  <AntdInput name={["description", item.sn]} label={`Description`} />
                </div>
                <div>
                  <AntdUploder
                    name={["image", item.sn]}
                    label={`Image`}
                    listType="picture-card"
                  />
                </div>
                <div className=' col-span-2 text-center'>
                  <SaveButton
                    name="save"
                    htmlType="submit"
                    className=" bg-emerald-300 w-2/6 font-varela"
                  />
                </div>
               
              </div>
            
              <SaveButton name="delete" className=" bg-red-500 mt-2"
                  onClick={()=>handleDel(item.sn)}
                />
       
              </div>
            );
          })}
        </Form>
      </div>
    </div>
  );
};

export default HotProduct;