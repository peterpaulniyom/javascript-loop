// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
let rev = companyName.length - 1;

while (rev >= 0){
    reversedCompanyName +=companyName[rev];
    rev--;
}

console.log(reversedCompanyName);
