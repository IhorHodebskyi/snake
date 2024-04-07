import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";

axios.defaults.baseURL =
	"https://backend-phonebook-kfp6.onrender.com";

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = "";
};

export const signUp = createAsyncThunk(
	"auth/signUp",
	async (credentials, thunkAPI) => {
		try {
			const { data } = await axios.post(
				"/users/signup",
				credentials,
			);
			setAuthHeader(data.token);
			return data;
		} catch (error) {
			const { data } = error.response;
			Notify.info(data.message);
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const logIn = createAsyncThunk(
	"users/login",
	async (credentials, thunkAPI) => {
		try {
			const { data } = await axios.post(
				"/users/login",
				credentials,
			);
			setAuthHeader(data.token);
			return data;
		} catch (error) {
			const { data } = error.response;
			Notify.info(data.message);
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const logOut = createAsyncThunk(
	"auth/logout",
	async (_, thunkAPI) => {
		try {
			await axios.post("/users/logout");
			clearAuthHeader();
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const refreshUser = createAsyncThunk(
	"auth/refresh",
	async (_, thunkAPI) => {
		try {
			const state = thunkAPI.getState();
			const persistedToken = state.auth.token;

			if (persistedToken === null) {
				return thunkAPI.rejectWithValue(
					"Unable to fetch user",
				);
			}

			setAuthHeader(persistedToken);
			const { data } = await axios.get("/users/current");
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
