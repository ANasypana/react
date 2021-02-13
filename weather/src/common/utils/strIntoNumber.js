export const strIntoNumber = str => {
  const removeCommas = str.split(',').join('');

  const numbers =  removeCommas.match(/[\d\.\-]+/g);

  if(numbers && numbers[0].length > 1){
    let data = numbers[0];

    if(data === '-.' || data === '-0.'){
      return '-0.'
    }

    if(data === '.0'  || data ==='0.0'){
      return '0.0'
    }

    if(data === '-.0'  || data ==='-0.0'){
      return '-0.0'
    }

    if(data.includes('..')){
      data = data.slice(0, -1);
    }

    const lastSymbol = data.slice(-1);

    data = lastSymbol === '-' ? data.slice(0, -1) : data;

    if(data.length === 1){
      return data
    }

    if(lastSymbol === '.'){
      const number = data.slice(0, -1).includes('.') ?
        Number(data.slice(0, -1)).toLocaleString('en-IN').toString() :
        Number(data).toLocaleString('en-IN').toString() + '.';

      return number
    }

    return Number(data).toLocaleString('en-IN').toString()

  }

  const number = numbers === null ? '' : numbers[0];

  return number
}