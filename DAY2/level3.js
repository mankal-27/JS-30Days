//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let phrase1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

let wordLoveMatch = phrase1.match(/love/gi);
console.log(`wordLoveMatch is ${wordLoveMatch}`);
console.log(`Number of Love Under wordLoveMatch is ${wordLoveMatch.length}`);

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let phrase2 = 'You cannot end a sentence with because because because is a conjunction'
let matchWordFromPhrase2 = phrase2.match(/because/gi);
console.log('Number of because Mathced Under phrase2 is :',matchWordFromPhrase2.length);

/* 
Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
*/

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
var newString = sentence.replace(/([^a-z0-9 ._\-]+)/gi, '');
console.log(newString);
//var frequencyWords = newString.split(' ');

// Split the text into words
const words = newString.split(' ');

// Count the frequency of each word
const wordFrequency = {};
words.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});

// Find the most frequent word
let mostFrequentWord = '';
let maxFrequency = 0;

for (const word in wordFrequency) {
    if (wordFrequency[word] > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = wordFrequency[word];
    }
}
console.log(`Most Frequent Word: "${mostFrequentWord}" (Frequency: ${maxFrequency})`);


//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let annualIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let digitFromAnnualIncome = annualIncome.match(/\d+/g);
console.log(digitFromAnnualIncome);

let totalAnnualIncome = 0;
for(let i = 0 ; i < digitFromAnnualIncome.length ; i++){
    totalAnnualIncome += parseInt(digitFromAnnualIncome[i])
}

console.log(`Total Annual Income is ${totalAnnualIncome}`);