// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here

for (let i of scores){
    if (i < minScore || typeof minScore === 'undefined'){
        minScore = i;
    }
}

console.log(minScore);
