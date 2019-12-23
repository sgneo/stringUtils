export const handleParams = (...params) => {
  params.forEach(param => {
    if (typeof param !== "string") {
      throw new Error("Required: string, received: something else");
    }
  });
};

export const isEmpty = str => {
  handleParams(str);

  return str.length === 0;
};

export const isBlank = str => {
  handleParams(str);

  return str.trim().length === 0;
};

export const startsWith = (str1, str2) => {
  handleParams(str1, str2);

  return str1.indexOf(str2) === 0;
};

export const trimStart = str => {
  handleParams(str);

  return str.replace(/^\s+/, '');
};

export const trimEnd = str => {
  handleParams(str);

  return str.replace(/\s+$/, '');
};


export default {
  isEmpty,
  isBlank,
  startsWith,
  trimStart,
  trimEnd
}