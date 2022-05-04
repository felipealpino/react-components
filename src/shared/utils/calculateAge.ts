// birthdate must has the format yyyy-mm-dd
export const calcAge = (birthdate: string): number | string => {
  const age = Math.floor((Date.now() - +new Date(`${birthdate.split('-').join('/')}`)) / 31557600000);
  if (isNaN(age) || age < 0) return '';
  return age;
};
