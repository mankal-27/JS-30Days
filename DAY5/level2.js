let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let cleanedText = text.replace(/[^\w\s]/g, '');
let words = cleanedText.split(/\s+/);
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');

console.log(shoppingCart)
var honeyIndex = shoppingCart.indexOf("Honey");
console.log(honeyIndex)
if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
}
console.log(shoppingCart)
var teaIndex = shoppingCart.indexOf("Tea")
shoppingCart[teaIndex] = "Green Tea";
console.log(shoppingCart);