



import React from "react";
import { Form,Button,Input,message } from "antd";
import FormItem from "antd/es/form/FormItem"
import {  Upload } from 'antd';
import { useState } from "react";
export const formItem = (props)=>{
    return(
        <Form.Item
        {...props}
        >
            {props.children}
            </Form.Item>
    );

};
export const AntdInput=(props)=>{
    const tempRule=[
        {
            required:props.required,
            message:`Please Enter ${props.label}`,
        },
    ];
    const localrules=
    props.rule instanceof Array ? [...tempRule,...props.rule]:tempRule;
    return(
        <FormItem{...props} rules={localrules}>
        <Input onClick={props.onClick} onChange={props.onChange} type={props.type}/>
        </FormItem>
    );
};

export const SaveButton=(props)=>{
    return(
        <Button
        className=" bg-green-300 text-#fff"
        {...props}
        >
            {props.name}
        </Button>
    );
};
export const EditButton=(props)=>{
    return(
        <Button
        className=" bg-green-300 text-#fff"
        {...props}
        >
            Edit
        </Button>
    );
};




export const AntdUploder=(props)=>{
  const [imageUrl, setImageUrl] = useState(null);
    const tempRule=[
        {
            required:props.required,
            message:`Please Enter ${props.label}`,
        },
    ];

 
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      };
      const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
       
        return isJpgOrPng ;
      };


      const handleChange = (info) => {
        
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (url) => {
           
            setImageUrl(url);
          });
        
      };

      const uploadButton = (
        <button
          style={{
            border: 0,
            background: 'none',
          }}
          type="button"
        >
          
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </button>
      );
    const localrules=
    props.rule instanceof Array ? [...tempRule,...props.rule]:tempRule;
    return(
        <FormItem{...props} rules={localrules}>
        <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
        </FormItem>
    );
};