export const printLog = (action) => {
  console.log(`%c[REDUX] ${action.type}: `, 'background: #222; color: #bada55', action.payload || '');
}

export const sumArray = arr => {
  return arr.reduce((sum, n) => sum += n, 0).toFixed(2)
}