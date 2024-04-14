import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('api/allproduct',

    async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      // const data = await response.json();
      return response;
    }
  );


