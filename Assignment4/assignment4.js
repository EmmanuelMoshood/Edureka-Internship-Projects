ratingData = [
{restaurant: 'KFC', rating:5},
{restaurant: 'Burger King', rating:4},
{restaurant: 'KFC', rating:3},
{restaurant: 'Domino', rating:2},
{restaurant: 'Subway', rating:3},
{restaurant: 'Domino', rating:1},
{restaurant: 'Subway', rating:4},
{restaurant: 'Pizza Hut', rating:5}
]



//create unique names of restaurant 
const UniqueRestaurants = Array.from(new Set(ratingData.map(({restaurant}) => restaurant)))
//for each restaurant, make an array of the its object data
let arr = []
UniqueRestaurants.map(restaurantName => {
    const filteredRatingData = ratingData.filter(item => item.restaurant == restaurantName);

    let outputObj = {
        restaurant: restaurantName,
        averageRating: filteredRatingData.reduce((prev, next) => prev + next.rating, 0 ) / filteredRatingData.length
    }

    arr.push(outputObj);
})

console.log(arr)

//all restaurants with average rating greater than or equal to 4.
const highRatingRestaurants = arr.filter(item => item.averageRating >= 4);
console.log(highRatingRestaurants)


