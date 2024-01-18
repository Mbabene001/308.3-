// // // Let any = 3;
// // // if (num %2==0) {
// // //     console.log ( `${num} is even.`);
// // // } else {
// // //     console.log (`{num} is odd.`)
// // // }

// // // let any=-5

// // // if (typeof any === 'number') {
// // //     if (any >= 0) {
// // //         console.log ( `${any} is a postive number.`) ;
// // //     } else { 
// // //         console.log (`${any} is a negative number.`);
    
// // // } else {
// // //     console.log (`the data type of "any" is $ {typeof any}.`);
// // // }




// // for (let i = 0; i < 10; i++) {
// // 	console.log(i);
// // }  
// // //output odd number 0 to 10 
// // for (let i = 1; i <= 10; i += 2) {
// //     console.log(i);
// // }
// // // output even number 0 to 10 
// // for (let i = 2; i <= 10; i += 2) {
// //     console.log(i);
// // }

// //Output multiples of 3, starting at 6 and ending at 60.

// // for (let i = 6; i <= 60; i += 3) {
// //     console.log(i);
// // }

// // Output an increasing number of # symbols, from 1 to 7:

// // for  (let i= 0; i<=7; i++) {
// //     console.log(sym)
// //     sym += "#"
// // }

// // for (let i = 1; i <= 20; i++) {
// //     if (i === 2 || i === 3 || (i > 3 && is Prime(i))) {
// //         console.log("prime");
// //     } else if (i % 2 === 0) {
// //         console.log("even");
// //     } else {
// //         console.log("odd");
// //     }


// // const str = "Hello World";
// // console.log(str.length)

// // for (let i = 0; i < str.length; i++) {
// // 	console.log(str[i]);
// // }

// // For in Loops gives index number 

// // const str = "dog";

// // for (const dog in str) {
// // 	console.log(str[dog]);
// // }

// // For of Loops gives index value

// // const str = "Cat";

// // for (const cat of str) {
// // 	console.log(cat);
// // }

// // Continue Statment

// // const str = "Hello World";

// // for (let i = 0; i < str.length; i++) {
// // 	if (str[i] == "o") {
// // 		continue;
// // 	}

// // 	console.log(str[i]);
// // }

// // for in for of continue statement

// // const str = "Hello World";

// // for (const i in str) {
// // 	if (str[i] == "l") {
// // 		continue;
// // 	}

// // 	console.log(str[i]);
// // }

// // for (const c of str) {
// // 	if (c == "l") {
// // 		continue;
// // 	}

// // 	console.log(c);
// // }

// // While Loop Structure 

// // let x = 30;

// // while (x>0) {
// //     x/=2;
// //     x--;
// //     if (x % 1!=0) {
// //         break;
// //     }
// //     console.log(x);
// // }

// // with a for loop instead

// // let x = 30;

// // for (x = x/2 - 1; x >= 0; x = x/2 - 1) {
// // 	if (x % 1 != 0) {
// // 		break;
// // 	}

// // 	console.log(x);
// // }


// // a = 1 

// // while a < 10:
// // print (a) 
// // a += 2


// // While Loops exercises  

// // Countdown 0 from a given number 

// // let a = 5;

// // while (a >=0) {
// //     console.log (a)
// //     a--;
// // }

// // Log integers in multiples of 3 as long as they are less than 35:


// // let a= 3;

// // while ( a<35) {
// //     console.log (a);
// //     a+=3;
// // }

// // Print integers in multiples of 5 as long as they are less than 100:

// // let a =5; 
// // while ( a<100) {
// //     console.log (a)
// //     a+=5
// // }

// // Print integers between 0 and 20 with the following conditions: All Number / by 2 

// // let a = 0;
// // while (a <= 20) {
// //     if (a % 2==0) {
// //         console.log (a * 3);
// //     }
// //     a++;
// // }


// // // Print all prime numbers between 0 and 20: unsolved 
 
// // let a =0;

// // while ( a<20) {
// //     if (a ==1  a==2  a==3 )

// // }

// // Bonas question about Romeo 

// // Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.



// // Write a loop that outputs how many quarters Romeo received.

// // What we know 
// // money=10 
// // CookieCost=4 
// // change= 0 

// // let money=10;
// // let Cookiecost=4;
// // let change=0;
// // let remainderquarters= money - Cookiecost;
// // while (remainderquarters>0) {
// //     change +=4;
// //     remainderquarters--;
// // }
// // console.log (change)






// // Do while Loops








// // let x = 10;

// // do {
// // 	x--;
// // 	console.log(x);
// // } while (x > 50);
 
// // Break and continue labeled statments 

// // let x = 1;
// // let y = 1;

// // myLoop: while (true) {
// // 	console.log(`Outer loop ${x}.`);
// // 	x++;

// // 	while (true) {
// // 		console.log(`Inner loop ${y}.`);
// // 		y++;

// // 		if (x == 5 && y % 5 == 0) {
// // 			break myLoop;
// // 		} else if (y % 5 == 0) {
// // 			continue myLoop;
// // 		}
// // 	}
// // }


// // console.log ('the loops ends')


// // Practice Quiz 308.3 

// // let sum = 0;
// // for (let i = 0; i < 5; i++) {
// //   if (i % 2 === 0) continue;
// //    sum += i;
// // }
// // console.log(sum);

// let i = 0;
// while (i < 3) {
//    console.log(i);
//    i++;}



// // for (let a = 1; a <= 100; a++) {
// //     // Check if the number is divisible by both 3 and 5
// //     if (a % 3 === 0 && a % 5 === 0) {
// //         console.log("Fizz Buzz");
// //     }
// //     // Check if the number is divisible by 3
// //     else if (a % 3 === 0) {
// //         console.log("Fizz");
// //     }
// //     // Check if the number is divisible by 5
// //     else if (a % 5 === 0) {
// //         console.log("Buzz");
// //     }
// //     // If none of the above conditions are met, log the number
// //     else {
// //         console.log(a);
// //     }
// // }

// // Declare an arbitrary number, n.
// // Create a loop that searches for the next prime number, starting at n and incrementing from there.
// // As soon as you find the prime number, log that number and exit the loop.


// // Step 1: Declare an arbitrary number, n.

// let n = 00; 






let prime = "n";

for (let i = 6; i <= 11; i++) {
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
  if(i == 6) i++;
    if ( i == 2 || i == 3 || i % 3 !== 0 && i % 2 !== 0) {
        console.log(i);
        prime += i;
        break;
    } 
  }  
// As soon as you find the prime number, log that number and exit the loop.
console.log(`${prime} is the prime number`);