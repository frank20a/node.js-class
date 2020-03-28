//Object property shorthand

const name = 'Frank'
const userAge = 20

const user = {
    name,
    age: userAge,
    location: 'Athens'
}

console.log(user)

//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    sale: undefined,
    rating: 3.5
} 

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel, stock, rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction ('order', product)