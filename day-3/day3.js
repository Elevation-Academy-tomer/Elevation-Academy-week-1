const plants = ["OAK", "Lilly", "Belladonna", "Yew"];

console.log(`The first plant is ${plants[0]} and the last is ${plants[plants.length - 1]}`);

let myStuff = ["a", "b", "c"];
let bigStuff = ["dfdf"];
bigStuff.push(...myStuff);

console.log(bigStuff);

bigStuff.splice(1);

console.log(bigStuff);

const associations = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]

associations.splice(associations.length - 2)
console.log(associations) // prints ["life"]

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"];
const newGenes = [];
newGenes.push(...genes );

console.log(newGenes);

let car ={
    color : "red",
    numWheels : 4,
    isFancy: false
};

console.log(`The ${car.color} has ${car.numWheels}`)

const numbers = [1, 2, 3];
const nums = numbers;

numbers[0] = 20;

console.log(numbers);

let p1 ={
    name : "Tomer",
    age : 27,
    city : "Tel-Aviv"
}

let p2 ={
    name : "Alon",
    age : 31,
    city : "Ramt Gan"
}

if(p1.age === p2.age && p1.city === p2.city){
    console.log("Jill wanted to date Robert");
}
else{
    console.log("Jill wanted to date Robert, but couldn't");
}

let myList =[
    {name: "tomer", age : 26}, {petName: "dog", ageOfPet : 21}
];

myList[0].name = "Alon";
myList.splice(1,1);

console.log(myList);

let ArryWithTwoObj = [
    {type: "numbers"}, {NameOfSchool : "Tel-Aviv"}
]

myList.push(...ArryWithTwoObj);

console.log(myList);

let library = {
 books : [{title : "Harry Poter", aurthor : "J K rolling"},{title : "Hobit", aurthor : "Somebody"}]
 }

 console.log(Array.isArray(myList));

myList.push(...library.books);

 console.log(myList);

 const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');
  const nameLower = name.toLowerCase();
  if(typeof reservations[nameLower]!= "undefined" && reservations[nameLower].claimed == false){
      alert("Welcome");
  }

  else if(typeof reservations[nameLower] != "undefined" &&  reservations[nameLower].claimed == true){
    alert("You already reserved a place");
}
else{
    reservations[nameLower] = {claimed:  true};
    alert("Your reservation was saved");
    console.log(reservations);
}

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true,
    fridge: {
        price: 500,
        works: false,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const nameOfItems = prompt('Please enter the name of the item');
const nameLowerOfItems = nameOfItems.toLowerCase();
if(kitchen.fridge.items[0].name == nameLowerOfItems){
        if(kitchen.hasOven && kitchen.fridge.works){
            console.log(`Geraldine's ${kitchen.fridge.items[0].name} expired ${date - kitchen.fridge.items[0].expiryDate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${kitchen.fridge.items[0].name} in.`)
        }

        else if(kitchen.hasOven && kitchen.fridge.works == false){
            console.log(`Geraldine's ${kitchen.fridge.items[0].name} expired ${date - kitchen.fridge.items[0].expiryDate} day ago.  Probably because her fridge doesn't work. Luckily, she has an oven to cook the  ${kitchen.fridge.items[0].name} in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`)
        }

        else if(kitchen.hasOven == false && kitchen.fridge.works == false){
            console.log(`Geraldine's ${kitchen.fridge.items[0].name} expired ${date - kitchen.fridge.items[0].expiryDate} day ago.  Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the  ${kitchen.fridge.items[0].name} in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`)
        }
        else{
            console.log(`Geraldine's ${kitchen.fridge.items[0].name} expired ${date - kitchen.fridge.items[0].expiryDate} day ago. Too bad she doesn't have an oven to cook the ${kitchen.fridge.items[0].name} in.`) 
        }
}

else if(kitchen.fridge.items[1].name == nameLowerOfItems){
    if(kitchen.hasOven && kitchen.fridge.works){
        console.log(`Geraldine's ${kitchen.fridge.items[1].name} expired ${date - kitchen.fridge.items[1].expiryDate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${kitchen.fridge.items[1].name} in.`)
    }

    else if(kitchen.hasOven && kitchen.fridge.works == false){
        console.log(`Geraldine's ${kitchen.fridge.items[1].name} expired ${date - kitchen.fridge.items[1].expiryDate} day ago.  Probably because her fridge doesn't work. Luckily, she has an oven to cook the  ${kitchen.fridge.items[1].name} in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`)
    }

    else if(kitchen.hasOven == false && kitchen.fridge.works == false){
        console.log(`Geraldine's ${kitchen.fridge.items[1].name} expired ${date - kitchen.fridge.items[1].expiryDate} day ago.  Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the  ${kitchen.fridge.items[1].name} in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`)
    }
    else{
        console.log(`Geraldine's ${kitchen.fridge.items[1].name} expired ${date - kitchen.fridge.items[1].expiryDate} day ago. Too bad she doesn't have an oven to cook the ${kitchen.fridge.items[1].name} in.`) 
    }
    
}

else if(kitchen.fridge.items[2].name == nameLowerOfItems){
    if(kitchen.hasOven && kitchen.fridge.works){
        console.log(`Geraldine's ${kitchen.fridge.items[2].name} expired ${date - kitchen.fridge.items[2].expiryDate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${kitchen.fridge.items[2].name} in.`)
    }

    else if(kitchen.hasOven && kitchen.fridge.works == false){
        console.log(`Geraldine's ${kitchen.fridge.items[2].name} expired ${date - kitchen.fridge.items[2].expiryDate} day ago.  Probably because her fridge doesn't work. Luckily, she has an oven to cook the  ${kitchen.fridge.items[2].name} in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`)
    }

    else if(kitchen.hasOven == false && kitchen.fridge.works == false){
        console.log(`Geraldine's ${kitchen.fridge.items[2].name} expired ${date - kitchen.fridge.items[2].expiryDate} day ago.  Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the  ${kitchen.fridge.items[2].name} in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`)
    }
    else{
        console.log(`Geraldine's ${kitchen.fridge.items[2].name} expired ${date - kitchen.fridge.items[2].expiryDate} day ago. Too bad she doesn't have an oven to cook the ${kitchen.fridge.items[2].name} in.`) 
    }
    
}

else{
    console.log("the item you choose is not exisit");
}




let nameArray = ["Tomer", "Moshiko", "Idan"];
let ageOfNames = [27, 22, 17];

for (let i in nameArray) {
    console.log(`${nameArray[i]} is ${ageOfNames[i]}`)
}

let numbers = [4, 4, 4, 2];
let sum = 0;

for (let num of numbers) {
    sum += num;

}
let avarg = sum / numbers.length;

console.log(sum);
console.log(avarg);

let nums = [];
let counter = 0;

while (counter < 100) {
    nums[counter] = nums.push(counter + 1);
    counter++;

}

console.log(nums);

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
        nums.splice(i, 1);
    }
}

console.log(nums);

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []


for (let i = 0; i < names.length; i++) {
    let obj = {};
    obj.name = names[i];
    obj.age = ages[i];
    people.push(obj);
}

console.log(people);


for (let i in people) {
    console.log(`${people[i].name} is ${people[i].age}`)
}


const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]

for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == 2) {
        posts.splice(i, 1);
    }
}



console.log(posts);


const posts2 = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [{ id: 1, text: "Idiot has no idea" }, { id: 2, text: "I agree!" }, { id: 3, text: "Fool!" }]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

for (let i = 0; i < posts2.length; i++) {
    if (posts2[i].id == 2) {
        for (let j = 0; j < posts2[i].comments.length; j++) {

            if (posts2[i].comments[j].id == 2) {
                posts2[i].comments.splice(j, 1);

            }
        }
    }
}

console.log(posts2);


const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (let d in dictionary) {
        console.log(`Words that begin with  ${d}`);
    
    for(let i of dictionary[d]){
        console.log(i);
    }

}
