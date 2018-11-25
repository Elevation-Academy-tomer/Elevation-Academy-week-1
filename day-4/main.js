/// Function ////
/*
///Exercise 1///

const calcAge = function(currentDate, brithDay){
    let age = currentDate - brithDay;
    return age;
}

const age = calcAge(2017, 1989);
console.log(age);


///Exercise 2///

const calcAge2 = function(currentDate, brithDay){
    let age = currentDate - brithDay;
    let ageArray = [age, age -1];
    return ageArray;
}

const age2 = calcAge2(2018, 2015);
console.log(`Your age is ${age2[0]} or ${age2[1]}`);

///Exercise 3///

const isEven = function(number){
    if(number %2 == 0){
        return true;
    }
    else{
        return false;
    }

}

const num = isEven(23);
console.log(num);

///Exercise 4///

const arrOdd = function(arrNum){
    for(let num of arrNum){
        if(isEven(num)){
            console.log(num);
        }
    }
}

const arr = [1,2,3,4,5,6,7,8,9,10];
arrOdd(arr);


///Exercise 5///

const checkExists = function(arr , number){
    let flag = false;
    for(let num of arr){
        if(num == number){
            flag = true
            break;
        }
        else{
            flag = false;
        }
    }
    return flag;
}

const bool = checkExists([1, 2, 3], 3);
console.log(bool)

///Exercise 6///

const calculator = {
    add : function(num1, num2){
        return num1 + num2;
    },

    subtract : function(num1, num2){
        return num1 - num2;
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2))

///Exercise 7///
const increaseByNameLength = function(money, name){
    return money * name.length;
}

const makeRegal = function(name){
    return `His Royal Highness, ${name}`;
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) 


                               ////// Function mini-lesson ////

///Exercise 1///

people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ];

  const capitalize = function(str){
      let capitalizeStr = "";
      capitalizeStr += str[0].toUpperCase();
      capitalizeStr += str.slice(1);
      return capitalizeStr;
  }

  const getAge= function(age){
      if(age < 21){
          return 'Underage'
      }
      else if(age > 55){
        return '55+'
      }
      else{
          return age + " years old"
      }
     
  }

  const getProfession= function(profession){
   return capitalize(profession);
  }

  const getCityAndCountry= function(city ,country){
    let cirtUp = capitalize(city);
    let countrytUp = capitalize(country);
    return `${cirtUp}, ${countrytUp}`;
   }

   const catchphraseFun= function(catchphrase){
    let catchphrasetUp = capitalize(catchphrase);  
    return `"${catchphrasetUp}"`
   }

  const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)}` 
    summary += ` ${getProfession(person.profession)}`  
    summary += ` from ${getCityAndCountry(person.city, person.country)}. ` 
    summary += capitalize(person.name) + " loves to say " + catchphraseFun(person.catchphrase)
    return summary
  }


  for(let p of people_info){
    console.log(getSummary(p))
}


///Exercise 2///
const conterStory = function(char, arr, wordCounts2){
    let counter = 0;
    for(let i =0; i < arr.length; i++){
        if(char == arr[i]){
            counter++;
        }
    }
    wordCounts2[char] = counter;

}

const getAllStory = function(specialCharsArr , AllStory, obj){
       let newStory = AllStory.toLowerCase();
       let arrChars = newStory.split(" ");
       let wordCounts2 = {}
       console.log(arrChars);
       //let arrNumbers = [];
       
        for(let i =0; i < arrChars.length; i++){
            //arrNumbers.push(conterStory(arrChars[i], arrChars));
            conterStory(arrChars[i], arrChars, wordCounts2);
        }

        console.log(wordCounts2);
}

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}
getAllStory(specialChars ,story,  wordCounts)


                                                /// This ////
///Exercise 1///
const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed() //should alert "I'm not longer hungry"

  ///Exercise 2///
  const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + this.amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);

  ///Exercise 3///
  const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fuel : 0,
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());

    ///Exercise 4///

    const tipJar = {
        coinCount: 20,
        tip: function () {
          this.coinCount += 1;
        },
        stealCoins : function(amount){
            this.coinCount =  this.coinCount - amount;
        }
      };
      
      tipJar.tip();
      console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
      
      tipJar.stealCoins(3);
      console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
      
      tipJar.stealCoins(10);
      console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

    ///Exercise 5///

    const revealSecret = function () {
        return this.secret;
      };
      
      const shoutIt = function (person, func) {
        person.revealItAll = func;
        const result = person.revealItAll();
        alert(person.name + " said: " + result);
      };
      
      const avi = {
        name: "Avi",
        secret: "Im scared of snakes!"
      };
      
      const narkis = {
        name: "Narkis",
        secret: "I dont have secrets because I'm zen like that."
      };
      
      shoutIt(avi, revealSecret);
      shoutIt(narkis, revealSecret);


///Exercise 6///
const coffeeShop = {
    beans: 40,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    makeDrink: function (drinkType) {
        let flag = false;
        for (let drink in coffeeShop.drinkRequirements) {
            if (drink != drinkType) {
                flag = false;

            }
            else {
                flag = true;
                break;
            }
        }
        if (flag && coffeeShop.beans > coffeeShop.drinkRequirements[drinkType]) {
            alert("your drink is " + drinkType);
            coffeeShop.beans = coffeeShop.beans - coffeeShop.drinkRequirements[drinkType];
        }
        else if (flag && coffeeShop.beans < coffeeShop.drinkRequirements[drinkType]) {

            alert("Sorry, we're all out of beans!");
        }
        else {
            alert("Sorry, we don't make ");
        }
    }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
*/
///Exercise 6.1///

const coffeeShop = {
    beans: 40,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },
    findDrink: function (drinkType) {
        return coffeeShop.drinkRequirements[drinkType] || 0;
    },
    checkBeansAmount: function (findDrinkAmount) {
        return coffeeShop.beans > findDrinkAmount
    },
    makeDrink: function (drinkType) {
        let findDrinkAmount = this.findDrink(drinkType);
        let checkBeansAmount = this.checkBeansAmount(findDrinkAmount);
        switch (true) {
            case (findDrinkAmount > 0 && checkBeansAmount):
                alert("your drink is " + drinkType);
                coffeeShop.beans = coffeeShop.beans - coffeeShop.drinkRequirements[drinkType];
                break;
            case (findDrinkAmount == 0):
                alert("Sorry, we don't make ");
                break;
            case (!checkBeansAmount):
                alert("Sorry, we're all out of beans!");
                break;
        }
        
    }

}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"