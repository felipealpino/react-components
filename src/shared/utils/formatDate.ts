export const formatDate = (date: Date, typeMonth: 'numeric' | 'long') => {
  return new Date(date).toLocaleDateString('pt-br', {
    year: 'numeric',
    month: typeMonth,
    day: 'numeric',
    timeZone: 'UTC',
  });
};
