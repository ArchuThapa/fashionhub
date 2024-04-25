import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('api/allproduct',

    async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      // const data = await response.json();
      return response;
    }
  );


  export const fetchcarouselData = createAsyncThunk('api/carouseldata',

    async () => {
      const response = await axios.get(`https://fakestoreapi.com/products?limit=5`);
      return response;
    }
  );

  export const fetchAllUser = createAsyncThunk('api/userdata',

    async () => {
      const response = await axios.get(`https://fakestoreapi.com/users`);
      return response;
    }
  );


  export const fetchSearchData = createAsyncThunk('api/searchproduct',

    async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/category/jewelery`);
      return response;
    }
  );


  // export const fetchSearchDynamicData = createAsyncThunk('api/searchdynamicproduct',

  //   async (id) => {
  //     const response = await axios.get('https://fakestoreapi.com/products/${id}');
  //     return response;
  //   }
  // );



  export const fetchSearchDynamicData = createAsyncThunk(
    'api/searchdynamicproduct',
    async (id) => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`); // Use backticks for string interpolation
      return response.data; // Return response data
    }
  );

  export const fetchSortData = createAsyncThunk('api/sortdata',

    async (sort) => {
      const response = await axios.get(`https://fakestoreapi.com/products?sort=${sort}`);
      return response;
    }
  );