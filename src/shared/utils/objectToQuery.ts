export const objectToQuery = (obj: Object, shouldStringfy?: boolean) => {
  var str: string[] = [];
  for (var key in obj)
    if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null) {
      if (shouldStringfy) str.push(encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(obj[key])));
      else str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  return str.join('&');
};
