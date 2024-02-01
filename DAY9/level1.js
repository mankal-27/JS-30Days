const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

function toPrintUsingForEach(arr){
    arr.forEach(eachValue => {
        console.log(eachValue)
    })
}

toPrintUsingForEach(countries)
toPrintUsingForEach(names)
toPrintUsingForEach(numbers)
console.log("*******forEach End********")
console.log("**********Map Started*********")
function useMapForUpperCase(arr){
    arr.map(function(eachValue) {
     console.log(eachValue.toUpperCase());
    })
}

function useMapForUpperCase_1(arr){
    arr.map((eachValue) => console.log(eachValue.toUpperCase()));
 }

function lengthFindForArray(arr){
    arr.map((eachValue) => console.log(eachValue.length));
}

function squareNum(arr){
    arr.map((eachValue) => console.log(eachValue * eachValue))
}

function productMap(obj){
    obj.map((eachValue) => console.log(eachValue.price))
}
useMapForUpperCase(countries)
useMapForUpperCase_1(countries)
lengthFindForArray(countries)
squareNum(numbers)
useMapForUpperCase(names);
productMap(products)

console.log("*****End of map**********")
console.log("*********start of filer*******")

const newLand = countries.filter((eachValue) => eachValue.includes('land'))
console.log(newLand)
const sixChart = countries.filter((eachValue) => eachValue.length === 6);
console.log(sixChart)
const sixChartMore = countries.filter((eachValue) => eachValue.length > 6 );
console.log(sixChartMore);
const startSwith = countries.filter((eachValue) => eachValue.startsWith("E"));
console.log(startSwith);
const priceValues = products.filter((eachValue) => eachValue.price)
console.log(priceValues)

function getStringList(arr) {
    return arr.filter(item => typeof item === 'string');
}
  
  // Example usage
  const mixedArray = ['Finland', 25, 'Denmark', true, 'Norway', 'IceLand'];
  const stringList = getStringList(mixedArray);
  console.log(stringList);