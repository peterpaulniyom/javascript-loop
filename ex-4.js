// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
let i = 0;
for (i in restaurants){
    newRestaurants[i] = `Restaurant Name: ${restaurants[i]}`;
}


console.log(newRestaurants);
