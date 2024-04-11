import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';


export const userLogin = createAsyncThunk(
    "auth/login",
    async ({ username, password }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",

                },
            };
            const { data } = await axios.post(
                'https://fakestoreapi.com/auth/login',
                { username, password },
                config

            );

            notification.success({
                message: "Success",
                description:"Logged in successfully",
            })   
        

            return data;
        }
        catch (error) {
            console.log('error1', error.message);
            // if (error.response && error.response.data.message) {
            //     return rejectWithValue(error.response.data.message);
            // }
            // else {
            //     return rejectWithValue(error.message);
            // }
    notification.error({
        message: 'Error',
        description: error?.response?.data,
    });
            

        }
    }
);