export const debounce = (fn, dely) => {
  let timer;

  return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        fn.call(context, ...args);    
      }, dely);
  }
}

export const convertKeyPharse = (str, replaceStr = 'AND') => {
  return str.replace(/\s/g, ` ${replaceStr} `);
}