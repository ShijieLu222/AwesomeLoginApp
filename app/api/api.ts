import request from "./api.interface";
// 登录参数类型
export interface LoginParams {
  account: string;
  password: string;
}

// 登录返回类型（可根据实际API调整）
export interface LoginResult {
  token: string;
  user: {
    id: string;
    name: string;
  };
}

export function LoginApi(data:LoginParams) :Promise<LoginResult> {
    return request.post('/login',data)
}