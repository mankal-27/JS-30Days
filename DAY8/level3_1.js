const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

console.log("Before -----", users.length)
function signUp(singleUser){
    for(const user of users){
        if(user.username === singleUser.username){
           return console.log("User Already exist Please check again")
        }
    }
    users.push(singleUser)
    console.log("User Successfully added!")
}
const newUser = {
    _id: 'xyz123',
    username: 'John',
    email: 'john@example.com',
    password: 'password123',
    createdAt: '08/01/2022 11:00 AM',
    isLoggedIn: false
  }
signUp(newUser)
console.log("After-------", users.length)

function signIn(username, password){
    for(const user of users){
        if(user.username === username && user.password === password){
            user.isLoggedIn = true;
            console.log(`Welcome ${username}! You are now signed in.`)
            return;
        }
    }
    console.log("Invalid Username or Password. Please Check your Creds.");
}

signIn('Asab','123456')
signIn('John', 'password123')
signIn('xcdd','33ddd')

function rateProduct(productId, userId, rating){
    for(const product of products){
        if(product._id === productId){
            product.ratings.push({userId, rate:rating});
            console.log(`Product ${product.name} has been rated by ${userId} with a rating of ${rating}`)
            return;
        }
    }
    console.log(`Product with ID ${productId} not found.`);
}
function averageRating(productId) {
    for (const product of products) {
      if (product._id === productId) {
        const ratings = product.ratings.map(rating => rating.rate);
        const numberOfRatings = ratings.length;
  
        if (numberOfRatings === 0) {
          console.log(`Product ${product.name} has no ratings yet.`);
          return;
        }
  
        const totalRating = ratings.reduce((total, rate) => total + rate, 0);
        const average = totalRating / numberOfRatings;
  
        console.log(`Average rating for product ${product.name}: ${average.toFixed(2)}`);
        return;
      }
    }
    console.log(`Product with ID ${productId} not found.`);
}
  

rateProduct('eedfcf', 'fg12cy', 4.5);
averageRating('eedfcf');
averageRating('aegfal');
averageRating('sada');

function likeProduct(productId, userId){
    for(const product of products){
        if(product._id === productId){
            const likedIndex = product.likes.indexOf(userId);

            if(likedIndex === -1){
                product.likes.push(userId);
                console.log(`${userId} liked the product ${product.name}`)
            }else{
                product.likes.splice(likedIndex,1);
                console.log(`${userId} removed the like from the product ${product.name}.`);
            }
            return;
        }
    }
    console.log(`Product with ID ${productId} not found.`)
}


likeProduct('eedfcf', 'fg12cy'); // Like the product
console.log(products);

likeProduct('aegfal', 'fg12cy'); // Remove like from the product
console.log(products);