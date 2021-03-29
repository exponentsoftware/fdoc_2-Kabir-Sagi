function fncreateArrayOfArrays(){



const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]  
var result = countries.map(country => [country.toLowerCase(), country.substring(0, 3), country.length])
console.log(countries);
console.log(result);
}
fncreateArrayOfArrays()
