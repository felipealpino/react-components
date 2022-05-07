export const deleteObjectKeys = (obj: object, keys: string[]) => {
  keys.forEach((key) => delete obj[key]);
  return obj;
};
