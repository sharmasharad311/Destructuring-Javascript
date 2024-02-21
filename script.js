// Destructring is a feature introduced in ES6 that allows you to extract values from objects or arrays and assign them to variables in a concise way.


// ♥----------Array Destructring------------> ♥                              
                                                                            
const list = ["cars", "bikes", "sportscar"];        //this is an Array      
const [four, two, five] = list;                     //array destructuring   
                                                                            
console.log(four);        console.log(two);     console.log(five);          
// output: cars           // output: bikes      //output: sportscar          




// ♥--------Objects Destructuring-----------> ♥

const profile = {
    Full_Name: "Sharad Sharma",             //this is an Object with some values
    City_Name: "Aligarh",
    User_age: 30,
}

const {Full_Name, City_Name, User_age} = profile;       //here we are desturcturing

console.log(Full_Name);         console.log(City_Name);         console.log(User_age);
// output: Sharad Sharma        //output: Aligarh               //output: 30

