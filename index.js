export const isEmpty = str => str.length === 0;
export const isBlank = str => str.trim().length === 0;
export const startsWith = (str1, str2) => str1.indexOf( str2 ) === 0;


export default {
  isEmpty,
  isBlank,
  startsWith
}