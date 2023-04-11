

//Write a function that takes in a string and returns it when reversed
//let food = “eating”

let food=["eating"];

food.reverse();
console.log(food);

//2. Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23
function divideArray(num){
     if (num.length <=1){
  return num;
    }
    let middle = Math.floor(num.length/2);
    let left =num.slice(0,middle);
    let right=num.slice(middle);
    return sortedNum(divideArray(left),divideArray(right));
}

function sortedNum(left,right){
    let emptyArray=[];
    while(left.length&&right.length){
    if(left[0]<right[0]) {
        emptyArray.push(left.shift());
    } 
    else{
        emptyArray.push((right.shift()));

    }
    
    }
    return[...emptyArray,...left,...right] ;
}
let num =[2,8,0,23,5,45,76];
console.log(divideArray(num));

function binarysearch(num,target){

    let left=0;
    let right=num.length-1

    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(num[middle]===target){
        return middle;
        }
        else if (num[middle]>target){
            right=middle-1;
    

        }
        else{
    left=middle+1;
        }
    }``
    return null;
    
    
    }
    let numm = [2,8,0,23,5,45,76];
    target =23;
    console.log(binarysearch(numm,target));

    //Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
let k=["2000","2002","2004","2006","2008","2010","2012","2014","2016","2018","2022"]
console.log(k);
let m=["2001","2003","2005","2007","2009","2011","2013","2015","2017","2019","2021","2023"]
console.log(m)



//4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
let nam="numbers";
if (0<=100){
let nam1="3"
console.log(fizz)
let num3="5"
console.log(Buzz)
//if divisible by 3 and 5
let result="results"
console.log(results)
}





//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]


let numArray=[12,87,45,75,23,64,73];
 let x=num.map(function(item){
   return item *4
})
console.log(x);
let x1=[];
 num.forEach(function(item){


x1.push(item * 4)
 })
 console.log(x1);

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]

let nums = ["10","24","45","56","67"];
let numsArray = nums.split('')
console.log(numsArray)






