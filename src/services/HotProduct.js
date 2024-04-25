import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from "antd";

export const hotProductAction = createAsyncThunk(
  "auth/hotproduct",
  async ({ title,price,description,image,category}) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `https://fakestoreapi.com/products`,
        { title,price,description,image,category},
        config
      );
      notification.success({
        message: "Success",
        description: "Product Added",
      });

      return data;
    } catch (error) {
      console.log("err", error);
      notification.open({
        message: "Error",
        description: error.response.data,
      });
    }
  }
);