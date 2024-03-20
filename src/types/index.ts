export type MetaData = {
  theme: string;
};

export type Auth = {
  accessToken?: string;
  refreshToken?: string;
  role?: string;
};

type CommonFileds = {
  id?: string;
};
export type User = {
  name?: string;
  username?: string;
  password?: string;
} & CommonFileds;

