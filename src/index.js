
exports.min = function min (array = []) {

  if(typeof array === undefined || array.length === 0) {
      return 0;
    }

    let result = array.reduce((ac, el, ind) => {
      if(ac > el) {
          return el;
      }
      
      return ac;  
    }, array[1])

  return result;
}

exports.max = function max (array = []) {
 
  if(typeof array === undefined || array.length === 0) {
      return 0;
    }
    let result = array.reduce((ac, el, ind) => {
      if(ac < el) {
          return el;
      }

      return ac;
    }, array[1])

  return result;
}

exports.avg = function avg (array = []) {
  let result;
  if(typeof array === undefined || array.length === 0) {
    return 0;
  }

  result = array.reduce((ac, el, ind) => {
    return ac + el;
  }, 0)

  return result / array.length;
}
