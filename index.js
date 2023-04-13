                                        // EXCERCISE 1
let car = {
    type: 'electric',
    wheels: 4,
};
let sportCar = {
    doors: 2,
};
let passengerCar = {
    doors: 4,
}
let toyCar = {
    type: 'toy',
}
Object.setPrototypeOf(sportCar, car);
Object.setPrototypeOf(passengerCar, car);
Object.setPrototypeOf(toyCar, sportCar);
console.log('CHECKS FOR SPORT CAR');
console.log(sportCar);
console.log(sportCar.wheels);
console.log(sportCar.type);
console.log('CHECKS FOR PASSENGER CAR');
console.log(passengerCar);
console.log(passengerCar.wheels);
console.log(passengerCar.type);
console.log('CHECKS FOR TOY CAR');
console.log(toyCar);
console.log(toyCar.wheels);
console.log(toyCar.type);
console.log(toyCar.doors);


                                        // EXCERCISE 2
// let employees = {
//     wallet: {},
//     pay(month, sum){
//         this.wallet[month] = sum;
//     }
// };

// let frontendDeveloper = {
//     name: 'Mike',
//     wallet: {},
// };

// Object.setPrototypeOf(frontendDeveloper, employees);

// let backendDeveloper = {
//     name: 'Bob',
//     wallet: {},
// };
// Object.setPrototypeOf(backendDeveloper, employees);
// backendDeveloper.pay('june', 1500);

// console.log(backendDeveloper.wallet.june);
// console.log(frontendDeveloper.wallet.june);


                                        // EXCERCISE 3
// function User(name, age){
//     this.name = name;
//     this.age = age;
// }
// let user_1 = new User('Mike', 18);
// let user_2 = new user_1.constructor('Bob', 25);

// console.log(user_1);
// console.log(user_2);


                                        // EXCERCISE 3
// function UserType(name){
//     this.join = Array.prototype.join;
//     for(let i = 0; i < name.length; ++i){
//         this[i] = name[i];
//         if(i + 1 == name.length){
//             Object.defineProperty(this, 'length', {
//                 enumerable: true,
//                 writable: false,
//                 configurable: true,
//                 value: i + 1,
//             });
//         }
//     }
// }

// let admins = new UserType(['Mike', 'Bob', 'Nikola']);
// console.log(admins.join('; '));