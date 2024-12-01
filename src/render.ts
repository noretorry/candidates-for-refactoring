
/*
 *  Используем шаблонные литералы ._.
*/ 
const render = (size: number) => {
  const sizeAttribute = size > 0 ? ` size="${size + 1}"` : '';
  return `<hr${sizeAttribute}/>`; // <hr> не поддерживает children, используем самозакрывающийся тег
};
