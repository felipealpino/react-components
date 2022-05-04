export const removeDuplicatesFromArray = (arrayWithDuplicatedItens: any[]): any[] => {
  return [...new Set(arrayWithDuplicatedItens.map((s) => JSON.stringify(s)))].map((s) => JSON.parse(s));
};
