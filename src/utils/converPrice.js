export const converPrice = (price) => {
  let result = [];
  let rs = '';
  let priceString = price.toString().split("").reverse();

  if (priceString.length > 3) {
    let count = 0;
    let count1 = 0;
    for (let i = 0; i < priceString.length; i++) {
      count++;
      // result = result.push(priceString[i]);
      result.push(priceString[i]);
      
      if (count %3 === 0) {
          count1++;
        result.splice(i+count1, 0, ".");
      }
    }
  }

  const a = result.reverse();
  if(a[0] === '.'){
    a.shift(a[0]);
  }
  for(let j = 0; j < a.length;j++){
      rs+=a[j];
  }

  if(rs === ''){
    rs = price;
  }

  return rs;
};
