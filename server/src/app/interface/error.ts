// error source
export type TErrorSource = {
  path: string | number | undefined;
  message: string;
}[];

export type TGenericErrorReturn = {
  statusCode: number;
  message: string;
  errorSources: TErrorSource;
};
