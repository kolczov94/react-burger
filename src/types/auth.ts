export type TLoginResponse = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
  };
};

export type TRegisterResponse = {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
};

export type TUpdateTokenResponse = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

export type TMessageResponse = {
  success: boolean;
  message: string;
};
