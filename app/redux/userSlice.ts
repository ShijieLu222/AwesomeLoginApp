import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginApi, LoginParams, LoginResult } from '../api/api';
import { User } from "../types/types";

// Redux 中 user 状态的初始值
interface UserState {
    loading: any;
    error: any;
    user: User | null; // 当前登录的用户（初始为 null 表示未登录）
}

// 初始状态
const initialState: UserState = {
    user: null,
    error:'',
    loading:false,
};

export const userSlice = createSlice({
    name: 'user', // slice 名称
    initialState, // 初始状态
    reducers: {
        //  登录成功或注册成功后调用，设置用户信息
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginThunk.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(LoginThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user; // 根据你的返回结构
                // 可选：token 也可以存
            })
            .addCase(LoginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
})


export const LoginThunk = createAsyncThunk<
    LoginResult,
    LoginParams, { rejectValue: string }
>(
    'user/login',
    async (params, { rejectWithValue }) => {
        try {
            const result = await LoginApi(params);
            return result; //这里res会自动进入 fulfilled 分支
        } catch (error: any) {
            //失败时，用 rejectWithValue 返回错误字符串
            return rejectWithValue(error?.response?.data?.message || error.message || '登录失败');
        }
    }
)









// 导出 action
export const { setUser } = userSlice.actions;

// 默认导出 reducer（关键！store.ts 要用的就是它）
export default userSlice.reducer;

