import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTransactionsAPI, getCategoriesAPI } from "API";

export const fetchAllTransactions = createAsyncThunk('fetchAllTransactions', async (token) => {
    const response = await getAllTransactionsAPI(token);
    return response
});

export const fetchCategories= createAsyncThunk('fetchCategories', async (queryParams) => {
    const response = await getCategoriesAPI(queryParams);
    return response;
});