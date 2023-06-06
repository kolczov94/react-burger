export type TUser = {
  email: string;
  name: string;
};

export type TUserResponse = {
  success: boolean;
  user: TUser;
};

export type TUserUpdateResponse = {
  success: boolean;
  user: TUser;
};
