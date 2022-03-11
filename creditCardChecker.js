// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const mystery6 = [0, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6];

// first function to find valid credit cards
function validateCred(arr) {
    
  let minusNine;
  let timesTwo;
  let sumOne = 0;
  let sumTwo = 0;

  console.log(`Given array: [${arr}]`);
  console.log(`-------- Calculating sumOne --------`);
  for(let i = arr.length - 2; i >= 0; i--) {
    console.log(`\nNumber in array = ${arr[i]}`);
    timesTwo = arr[i] * 2;
    console.log(`${arr[i]} x 2 = ${timesTwo}`);

    if(timesTwo > 9) {
      console.log(`${timesTwo} > 9 so we subtract 9`);
      minusNine = timesTwo - 9;
      console.log(`${timesTwo} - 9 = ${minusNine}`);
    console.log(`${sumOne} from last step + ${minusNine} from this step`);
      sumOne += minusNine;
    }

    else {
      console.log(`${sumOne} from last step + ${timesTwo} from this step`);
      sumOne += timesTwo;
    }

    console.log(`Total sumOne = ${sumOne}`);
    i--;
  }

  console.log(`\n-------- Calculating sumTwo --------`);
  for(let i = arr.length - 1; i >= 0; i--) {
    console.log(`\nNumber in array = ${arr[i]}`);
    console.log(`${sumTwo} from last step + ${arr[i]} from this step`);
    sumTwo += arr[i];
    console.log(`Total sumTwo = ${sumTwo}`);
    i--;
  }

  console.log(`\nFinal sumOne = ${sumOne}`);
  console.log(`Final sumTwo = ${sumTwo}`);
  console.log(`Final TOTAL sum = ${sumOne} + ${sumTwo} = ${sumOne + sumTwo}`);

  if((sumOne + sumTwo) % 10 == 0) {
    console.log(`${sumOne + sumTwo} % 10 = 0`);
    return true;
  }
  else {
    console.log(`${sumOne + sumTwo} % 10 != 0`);
    return false;
  }
}

// second function to find all invalid credit cards and return an array that holds all invalid credit card numbers
let invalidCards = [];
function findInvalidCards(arr) {
  for(let i = 0; i < arr.length; i++) {
    
    if(!validateCred(arr[i])) {
      console.log('Array above is NOT valid\n');
      invalidCards.push(arr[i]);
    }
    else {
      console.log('Array above is valid\n');
    }
  }
  
  console.log('An array of ALL invalid arrays:')
  console.log(invalidCards);
  return;
}

// third function to identify the credit card companies that have possibly issued the faulty numbers
function idInvalidCardCompanies(arr) {

  console.log('Credit card companies that have possibly issued these faulty numbers:')
  
  let amexCounter = 0;
  let visaCounter = 0;
  let masterCardCounter = 0;
  let discoverCounter = 0;
  let companiesArr = [];

  for(let i = 0; i < arr.length; i++) {
    
    if(arr[i][0] == 3) {
      while(amexCounter < 1) {
        companiesArr.push('Amex');
        amexCounter++;
      }
    }

    else if(arr[i][0] == 4) {
      while(visaCounter < 1) {
        companiesArr.push('Visa');
        visaCounter++;
      }
    }

    else if(arr[i][0] == 5) {
      while(masterCardCounter < 1) {
        companiesArr.push('Mastercard');
        masterCardCounter++;
      }
    }

    else if(arr[i][0] == 6) {
      while(discoverCounter < 1) {
        companiesArr.push('Discover');
        discoverCounter++;
      }
    }

    else {
      companiesArr.push('Company not found');
    }
  }
  console.log(companiesArr);
  return;
}

// Testing all functions below
console.log('********* Testing first function *********\n');
console.log(validateCred(valid1));
//console.log(validateCred(invalid2));
//console.log(validateCred(valid5));
//console.log(validateCred(mystery1));

console.log('\n********* Testing second function *********');
findInvalidCards(batch);

console.log('\n********* Testing third function *********\n');
idInvalidCardCompanies(invalidCards);




/* *************************** FINAL OUTPUT ****************************

** Note: the output is this long because I added of console.log statements 
for each step and function so I could understand where I was in a program 
and how I can debug it (if needed). Feel free to remove these statements 
for a shorter output. **

********* Testing first function *********

Given array: [4,5,3,9,6,7,7,9,0,8,0,1,6,8,0,8]
-------- Calculating sumOne --------

Number in array = 0
0 x 2 = 0
0 from last step + 0 from this step
Total sumOne = 0

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
0 from last step + 3 from this step
Total sumOne = 3

Number in array = 0
0 x 2 = 0
3 from last step + 0 from this step
Total sumOne = 3

Number in array = 0
0 x 2 = 0
3 from last step + 0 from this step
Total sumOne = 3

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
3 from last step + 5 from this step
Total sumOne = 8

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
8 from last step + 3 from this step
Total sumOne = 11

Number in array = 3
3 x 2 = 6
11 from last step + 6 from this step
Total sumOne = 17

Number in array = 4
4 x 2 = 8
17 from last step + 8 from this step
Total sumOne = 25

-------- Calculating sumTwo --------

Number in array = 8
0 from last step + 8 from this step
Total sumTwo = 8

Number in array = 8
8 from last step + 8 from this step
Total sumTwo = 16

Number in array = 1
16 from last step + 1 from this step
Total sumTwo = 17

Number in array = 8
17 from last step + 8 from this step
Total sumTwo = 25

Number in array = 9
25 from last step + 9 from this step
Total sumTwo = 34

Number in array = 7
34 from last step + 7 from this step
Total sumTwo = 41

Number in array = 9
41 from last step + 9 from this step
Total sumTwo = 50

Number in array = 5
50 from last step + 5 from this step
Total sumTwo = 55

Final sumOne = 25
Final sumTwo = 55
Final TOTAL sum = 25 + 55 = 80
80 % 10 = 0
true

********* Testing second function *********
Given array: [4,5,3,9,6,7,7,9,0,8,0,1,6,8,0,8]
-------- Calculating sumOne --------

Number in array = 0
0 x 2 = 0
0 from last step + 0 from this step
Total sumOne = 0

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
0 from last step + 3 from this step
Total sumOne = 3

Number in array = 0
0 x 2 = 0
3 from last step + 0 from this step
Total sumOne = 3

Number in array = 0
0 x 2 = 0
3 from last step + 0 from this step
Total sumOne = 3

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
3 from last step + 5 from this step
Total sumOne = 8

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
8 from last step + 3 from this step
Total sumOne = 11

Number in array = 3
3 x 2 = 6
11 from last step + 6 from this step
Total sumOne = 17

Number in array = 4
4 x 2 = 8
17 from last step + 8 from this step
Total sumOne = 25

-------- Calculating sumTwo --------

Number in array = 8
0 from last step + 8 from this step
Total sumTwo = 8

Number in array = 8
8 from last step + 8 from this step
Total sumTwo = 16

Number in array = 1
16 from last step + 1 from this step
Total sumTwo = 17

Number in array = 8
17 from last step + 8 from this step
Total sumTwo = 25

Number in array = 9
25 from last step + 9 from this step
Total sumTwo = 34

Number in array = 7
34 from last step + 7 from this step
Total sumTwo = 41

Number in array = 9
41 from last step + 9 from this step
Total sumTwo = 50

Number in array = 5
50 from last step + 5 from this step
Total sumTwo = 55

Final sumOne = 25
Final sumTwo = 55
Final TOTAL sum = 25 + 55 = 80
80 % 10 = 0
Array above is valid

Given array: [5,5,3,5,7,6,6,7,6,8,7,5,1,4,3,9]
-------- Calculating sumOne --------

Number in array = 3
3 x 2 = 6
0 from last step + 6 from this step
Total sumOne = 6

Number in array = 1
1 x 2 = 2
6 from last step + 2 from this step
Total sumOne = 8

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
8 from last step + 5 from this step
Total sumOne = 13

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
13 from last step + 3 from this step
Total sumOne = 16

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
16 from last step + 3 from this step
Total sumOne = 19

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
19 from last step + 5 from this step
Total sumOne = 24

Number in array = 3
3 x 2 = 6
24 from last step + 6 from this step
Total sumOne = 30

Number in array = 5
5 x 2 = 10
10 > 9 so we subtract 9
10 - 9 = 1
30 from last step + 1 from this step
Total sumOne = 31

-------- Calculating sumTwo --------

Number in array = 9
0 from last step + 9 from this step
Total sumTwo = 9

Number in array = 4
9 from last step + 4 from this step
Total sumTwo = 13

Number in array = 5
13 from last step + 5 from this step
Total sumTwo = 18

Number in array = 8
18 from last step + 8 from this step
Total sumTwo = 26

Number in array = 7
26 from last step + 7 from this step
Total sumTwo = 33

Number in array = 6
33 from last step + 6 from this step
Total sumTwo = 39

Number in array = 5
39 from last step + 5 from this step
Total sumTwo = 44

Number in array = 5
44 from last step + 5 from this step
Total sumTwo = 49

Final sumOne = 31
Final sumTwo = 49
Final TOTAL sum = 31 + 49 = 80
80 % 10 = 0
Array above is valid

Given array: [3,7,1,6,1,2,0,1,9,9,8,5,2,3,6]
-------- Calculating sumOne --------

Number in array = 3
3 x 2 = 6
0 from last step + 6 from this step
Total sumOne = 6

Number in array = 5
5 x 2 = 10
10 > 9 so we subtract 9
10 - 9 = 1
6 from last step + 1 from this step
Total sumOne = 7

Number in array = 9
9 x 2 = 18
18 > 9 so we subtract 9
18 - 9 = 9
7 from last step + 9 from this step
Total sumOne = 16

Number in array = 1
1 x 2 = 2
16 from last step + 2 from this step
Total sumOne = 18

Number in array = 2
2 x 2 = 4
18 from last step + 4 from this step
Total sumOne = 22

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
22 from last step + 3 from this step
Total sumOne = 25

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
25 from last step + 5 from this step
Total sumOne = 30

-------- Calculating sumTwo --------

Number in array = 6
0 from last step + 6 from this step
Total sumTwo = 6

Number in array = 2
6 from last step + 2 from this step
Total sumTwo = 8

Number in array = 8
8 from last step + 8 from this step
Total sumTwo = 16

Number in array = 9
16 from last step + 9 from this step
Total sumTwo = 25

Number in array = 0
25 from last step + 0 from this step
Total sumTwo = 25

Number in array = 1
25 from last step + 1 from this step
Total sumTwo = 26

Number in array = 1
26 from last step + 1 from this step
Total sumTwo = 27

Number in array = 3
27 from last step + 3 from this step
Total sumTwo = 30

Final sumOne = 30
Final sumTwo = 30
Final TOTAL sum = 30 + 30 = 60
60 % 10 = 0
Array above is valid

Given array: [6,0,1,1,1,4,4,3,4,0,6,8,2,9,0,5]
-------- Calculating sumOne --------

Number in array = 0
0 x 2 = 0
0 from last step + 0 from this step
Total sumOne = 0

Number in array = 2
2 x 2 = 4
0 from last step + 4 from this step
Total sumOne = 4

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
4 from last step + 3 from this step
Total sumOne = 7

Number in array = 4
4 x 2 = 8
7 from last step + 8 from this step
Total sumOne = 15

Number in array = 4
4 x 2 = 8
15 from last step + 8 from this step
Total sumOne = 23

Number in array = 1
1 x 2 = 2
23 from last step + 2 from this step
Total sumOne = 25

Number in array = 1
1 x 2 = 2
25 from last step + 2 from this step
Total sumOne = 27

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
27 from last step + 3 from this step
Total sumOne = 30

-------- Calculating sumTwo --------

Number in array = 5
0 from last step + 5 from this step
Total sumTwo = 5

Number in array = 9
5 from last step + 9 from this step
Total sumTwo = 14

Number in array = 8
14 from last step + 8 from this step
Total sumTwo = 22

Number in array = 0
22 from last step + 0 from this step
Total sumTwo = 22

Number in array = 3
22 from last step + 3 from this step
Total sumTwo = 25

Number in array = 4
25 from last step + 4 from this step
Total sumTwo = 29

Number in array = 1
29 from last step + 1 from this step
Total sumTwo = 30

Number in array = 0
30 from last step + 0 from this step
Total sumTwo = 30

Final sumOne = 30
Final sumTwo = 30
Final TOTAL sum = 30 + 30 = 60
60 % 10 = 0
Array above is valid

Given array: [4,5,3,9,4,0,4,9,6,7,8,6,9,6,6,6]
-------- Calculating sumOne --------

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
0 from last step + 3 from this step
Total sumOne = 3

Number in array = 9
9 x 2 = 18
18 > 9 so we subtract 9
18 - 9 = 9
3 from last step + 9 from this step
Total sumOne = 12

Number in array = 8
8 x 2 = 16
16 > 9 so we subtract 9
16 - 9 = 7
12 from last step + 7 from this step
Total sumOne = 19

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
19 from last step + 3 from this step
Total sumOne = 22

Number in array = 4
4 x 2 = 8
22 from last step + 8 from this step
Total sumOne = 30

Number in array = 4
4 x 2 = 8
30 from last step + 8 from this step
Total sumOne = 38

Number in array = 3
3 x 2 = 6
38 from last step + 6 from this step
Total sumOne = 44

Number in array = 4
4 x 2 = 8
44 from last step + 8 from this step
Total sumOne = 52

-------- Calculating sumTwo --------

Number in array = 6
0 from last step + 6 from this step
Total sumTwo = 6

Number in array = 6
6 from last step + 6 from this step
Total sumTwo = 12

Number in array = 6
12 from last step + 6 from this step
Total sumTwo = 18

Number in array = 7
18 from last step + 7 from this step
Total sumTwo = 25

Number in array = 9
25 from last step + 9 from this step
Total sumTwo = 34

Number in array = 0
34 from last step + 0 from this step
Total sumTwo = 34

Number in array = 9
34 from last step + 9 from this step
Total sumTwo = 43

Number in array = 5
43 from last step + 5 from this step
Total sumTwo = 48

Final sumOne = 52
Final sumTwo = 48
Final TOTAL sum = 52 + 48 = 100
100 % 10 = 0
Array above is valid

Given array: [4,5,3,2,7,7,8,7,7,1,0,9,1,7,9,5]
-------- Calculating sumOne --------

Number in array = 9
9 x 2 = 18
18 > 9 so we subtract 9
18 - 9 = 9
0 from last step + 9 from this step
Total sumOne = 9

Number in array = 1
1 x 2 = 2
9 from last step + 2 from this step
Total sumOne = 11

Number in array = 0
0 x 2 = 0
11 from last step + 0 from this step
Total sumOne = 11

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
11 from last step + 5 from this step
Total sumOne = 16

Number in array = 8
8 x 2 = 16
16 > 9 so we subtract 9
16 - 9 = 7
16 from last step + 7 from this step
Total sumOne = 23

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
23 from last step + 5 from this step
Total sumOne = 28

Number in array = 3
3 x 2 = 6
28 from last step + 6 from this step
Total sumOne = 34

Number in array = 4
4 x 2 = 8
34 from last step + 8 from this step
Total sumOne = 42

-------- Calculating sumTwo --------

Number in array = 5
0 from last step + 5 from this step
Total sumTwo = 5

Number in array = 7
5 from last step + 7 from this step
Total sumTwo = 12

Number in array = 9
12 from last step + 9 from this step
Total sumTwo = 21

Number in array = 1
21 from last step + 1 from this step
Total sumTwo = 22

Number in array = 7
22 from last step + 7 from this step
Total sumTwo = 29

Number in array = 7
29 from last step + 7 from this step
Total sumTwo = 36

Number in array = 2
36 from last step + 2 from this step
Total sumTwo = 38

Number in array = 5
38 from last step + 5 from this step
Total sumTwo = 43

Final sumOne = 42
Final sumTwo = 43
Final TOTAL sum = 42 + 43 = 85
85 % 10 != 0
Array above is NOT valid

Given array: [5,7,9,5,5,9,3,3,9,2,1,3,4,6,4,3]
-------- Calculating sumOne --------

Number in array = 4
4 x 2 = 8
0 from last step + 8 from this step
Total sumOne = 8

Number in array = 4
4 x 2 = 8
8 from last step + 8 from this step
Total sumOne = 16

Number in array = 1
1 x 2 = 2
16 from last step + 2 from this step
Total sumOne = 18

Number in array = 9
9 x 2 = 18
18 > 9 so we subtract 9
18 - 9 = 9
18 from last step + 9 from this step
Total sumOne = 27

Number in array = 3
3 x 2 = 6
27 from last step + 6 from this step
Total sumOne = 33

Number in array = 5
5 x 2 = 10
10 > 9 so we subtract 9
10 - 9 = 1
33 from last step + 1 from this step
Total sumOne = 34

Number in array = 9
9 x 2 = 18
18 > 9 so we subtract 9
18 - 9 = 9
34 from last step + 9 from this step
Total sumOne = 43

Number in array = 5
5 x 2 = 10
10 > 9 so we subtract 9
10 - 9 = 1
43 from last step + 1 from this step
Total sumOne = 44

-------- Calculating sumTwo --------

Number in array = 3
0 from last step + 3 from this step
Total sumTwo = 3

Number in array = 6
3 from last step + 6 from this step
Total sumTwo = 9

Number in array = 3
9 from last step + 3 from this step
Total sumTwo = 12

Number in array = 2
12 from last step + 2 from this step
Total sumTwo = 14

Number in array = 3
14 from last step + 3 from this step
Total sumTwo = 17

Number in array = 9
17 from last step + 9 from this step
Total sumTwo = 26

Number in array = 5
26 from last step + 5 from this step
Total sumTwo = 31

Number in array = 7
31 from last step + 7 from this step
Total sumTwo = 38

Final sumOne = 44
Final sumTwo = 38
Final TOTAL sum = 44 + 38 = 82
82 % 10 != 0
Array above is NOT valid

Given array: [3,7,5,7,9,6,0,8,4,4,5,9,9,1,4]
-------- Calculating sumOne --------

Number in array = 1
1 x 2 = 2
0 from last step + 2 from this step
Total sumOne = 2

Number in array = 9
9 x 2 = 18
18 > 9 so we subtract 9
18 - 9 = 9
2 from last step + 9 from this step
Total sumOne = 11

Number in array = 4
4 x 2 = 8
11 from last step + 8 from this step
Total sumOne = 19

Number in array = 8
8 x 2 = 16
16 > 9 so we subtract 9
16 - 9 = 7
19 from last step + 7 from this step
Total sumOne = 26

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
26 from last step + 3 from this step
Total sumOne = 29

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
29 from last step + 5 from this step
Total sumOne = 34

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
34 from last step + 5 from this step
Total sumOne = 39

-------- Calculating sumTwo --------

Number in array = 4
0 from last step + 4 from this step
Total sumTwo = 4

Number in array = 9
4 from last step + 9 from this step
Total sumTwo = 13

Number in array = 5
13 from last step + 5 from this step
Total sumTwo = 18

Number in array = 4
18 from last step + 4 from this step
Total sumTwo = 22

Number in array = 0
22 from last step + 0 from this step
Total sumTwo = 22

Number in array = 9
22 from last step + 9 from this step
Total sumTwo = 31

Number in array = 5
31 from last step + 5 from this step
Total sumTwo = 36

Number in array = 3
36 from last step + 3 from this step
Total sumTwo = 39

Final sumOne = 39
Final sumTwo = 39
Final TOTAL sum = 39 + 39 = 78
78 % 10 != 0
Array above is NOT valid

Given array: [6,0,1,1,1,2,7,9,6,1,7,7,7,9,3,5]
-------- Calculating sumOne --------

Number in array = 3
3 x 2 = 6
0 from last step + 6 from this step
Total sumOne = 6

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
6 from last step + 5 from this step
Total sumOne = 11

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
11 from last step + 5 from this step
Total sumOne = 16

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
16 from last step + 3 from this step
Total sumOne = 19

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
19 from last step + 5 from this step
Total sumOne = 24

Number in array = 1
1 x 2 = 2
24 from last step + 2 from this step
Total sumOne = 26

Number in array = 1
1 x 2 = 2
26 from last step + 2 from this step
Total sumOne = 28

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
28 from last step + 3 from this step
Total sumOne = 31

-------- Calculating sumTwo --------

Number in array = 5
0 from last step + 5 from this step
Total sumTwo = 5

Number in array = 9
5 from last step + 9 from this step
Total sumTwo = 14

Number in array = 7
14 from last step + 7 from this step
Total sumTwo = 21

Number in array = 1
21 from last step + 1 from this step
Total sumTwo = 22

Number in array = 9
22 from last step + 9 from this step
Total sumTwo = 31

Number in array = 2
31 from last step + 2 from this step
Total sumTwo = 33

Number in array = 1
33 from last step + 1 from this step
Total sumTwo = 34

Number in array = 0
34 from last step + 0 from this step
Total sumTwo = 34

Final sumOne = 31
Final sumTwo = 34
Final TOTAL sum = 31 + 34 = 65
65 % 10 != 0
Array above is NOT valid

Given array: [5,3,8,2,0,1,9,7,7,2,8,8,3,8,5,4]
-------- Calculating sumOne --------

Number in array = 5
5 x 2 = 10
10 > 9 so we subtract 9
10 - 9 = 1
0 from last step + 1 from this step
Total sumOne = 1

Number in array = 3
3 x 2 = 6
1 from last step + 6 from this step
Total sumOne = 7

Number in array = 8
8 x 2 = 16
16 > 9 so we subtract 9
16 - 9 = 7
7 from last step + 7 from this step
Total sumOne = 14

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
14 from last step + 5 from this step
Total sumOne = 19

Number in array = 9
9 x 2 = 18
18 > 9 so we subtract 9
18 - 9 = 9
19 from last step + 9 from this step
Total sumOne = 28

Number in array = 0
0 x 2 = 0
28 from last step + 0 from this step
Total sumOne = 28

Number in array = 8
8 x 2 = 16
16 > 9 so we subtract 9
16 - 9 = 7
28 from last step + 7 from this step
Total sumOne = 35

Number in array = 5
5 x 2 = 10
10 > 9 so we subtract 9
10 - 9 = 1
35 from last step + 1 from this step
Total sumOne = 36

-------- Calculating sumTwo --------

Number in array = 4
0 from last step + 4 from this step
Total sumTwo = 4

Number in array = 8
4 from last step + 8 from this step
Total sumTwo = 12

Number in array = 8
12 from last step + 8 from this step
Total sumTwo = 20

Number in array = 2
20 from last step + 2 from this step
Total sumTwo = 22

Number in array = 7
22 from last step + 7 from this step
Total sumTwo = 29

Number in array = 1
29 from last step + 1 from this step
Total sumTwo = 30

Number in array = 2
30 from last step + 2 from this step
Total sumTwo = 32

Number in array = 3
32 from last step + 3 from this step
Total sumTwo = 35

Final sumOne = 36
Final sumTwo = 35
Final TOTAL sum = 36 + 35 = 71
71 % 10 != 0
Array above is NOT valid

Given array: [3,4,4,8,0,1,9,6,8,3,0,5,4,1,4]
-------- Calculating sumOne --------

Number in array = 1
1 x 2 = 2
0 from last step + 2 from this step
Total sumOne = 2

Number in array = 5
5 x 2 = 10
10 > 9 so we subtract 9
10 - 9 = 1
2 from last step + 1 from this step
Total sumOne = 3

Number in array = 3
3 x 2 = 6
3 from last step + 6 from this step
Total sumOne = 9

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
9 from last step + 3 from this step
Total sumOne = 12

Number in array = 1
1 x 2 = 2
12 from last step + 2 from this step
Total sumOne = 14

Number in array = 8
8 x 2 = 16
16 > 9 so we subtract 9
16 - 9 = 7
14 from last step + 7 from this step
Total sumOne = 21

Number in array = 4
4 x 2 = 8
21 from last step + 8 from this step
Total sumOne = 29

-------- Calculating sumTwo --------

Number in array = 4
0 from last step + 4 from this step
Total sumTwo = 4

Number in array = 4
4 from last step + 4 from this step
Total sumTwo = 8

Number in array = 0
8 from last step + 0 from this step
Total sumTwo = 8

Number in array = 8
8 from last step + 8 from this step
Total sumTwo = 16

Number in array = 9
16 from last step + 9 from this step
Total sumTwo = 25

Number in array = 0
25 from last step + 0 from this step
Total sumTwo = 25

Number in array = 4
25 from last step + 4 from this step
Total sumTwo = 29

Number in array = 3
29 from last step + 3 from this step
Total sumTwo = 32

Final sumOne = 29
Final sumTwo = 32
Final TOTAL sum = 29 + 32 = 61
61 % 10 != 0
Array above is NOT valid

Given array: [5,4,6,6,1,0,0,8,6,1,6,2,0,2,3,9]
-------- Calculating sumOne --------

Number in array = 3
3 x 2 = 6
0 from last step + 6 from this step
Total sumOne = 6

Number in array = 0
0 x 2 = 0
6 from last step + 0 from this step
Total sumOne = 6

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
6 from last step + 3 from this step
Total sumOne = 9

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
9 from last step + 3 from this step
Total sumOne = 12

Number in array = 0
0 x 2 = 0
12 from last step + 0 from this step
Total sumOne = 12

Number in array = 1
1 x 2 = 2
12 from last step + 2 from this step
Total sumOne = 14

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
14 from last step + 3 from this step
Total sumOne = 17

Number in array = 5
5 x 2 = 10
10 > 9 so we subtract 9
10 - 9 = 1
17 from last step + 1 from this step
Total sumOne = 18

-------- Calculating sumTwo --------

Number in array = 9
0 from last step + 9 from this step
Total sumTwo = 9

Number in array = 2
9 from last step + 2 from this step
Total sumTwo = 11

Number in array = 2
11 from last step + 2 from this step
Total sumTwo = 13

Number in array = 1
13 from last step + 1 from this step
Total sumTwo = 14

Number in array = 8
14 from last step + 8 from this step
Total sumTwo = 22

Number in array = 0
22 from last step + 0 from this step
Total sumTwo = 22

Number in array = 6
22 from last step + 6 from this step
Total sumTwo = 28

Number in array = 4
28 from last step + 4 from this step
Total sumTwo = 32

Final sumOne = 18
Final sumTwo = 32
Final TOTAL sum = 18 + 32 = 50
50 % 10 = 0
Array above is valid

Given array: [6,0,1,1,3,7,7,0,2,0,9,6,2,6,5,6,2,0,3]
-------- Calculating sumOne --------

Number in array = 0
0 x 2 = 0
0 from last step + 0 from this step
Total sumOne = 0

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
0 from last step + 3 from this step
Total sumOne = 3

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
3 from last step + 3 from this step
Total sumOne = 6

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
6 from last step + 3 from this step
Total sumOne = 9

Number in array = 0
0 x 2 = 0
9 from last step + 0 from this step
Total sumOne = 9

Number in array = 0
0 x 2 = 0
9 from last step + 0 from this step
Total sumOne = 9

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
9 from last step + 5 from this step
Total sumOne = 14

Number in array = 1
1 x 2 = 2
14 from last step + 2 from this step
Total sumOne = 16

Number in array = 0
0 x 2 = 0
16 from last step + 0 from this step
Total sumOne = 16

-------- Calculating sumTwo --------

Number in array = 3
0 from last step + 3 from this step
Total sumTwo = 3

Number in array = 2
3 from last step + 2 from this step
Total sumTwo = 5

Number in array = 5
5 from last step + 5 from this step
Total sumTwo = 10

Number in array = 2
10 from last step + 2 from this step
Total sumTwo = 12

Number in array = 9
12 from last step + 9 from this step
Total sumTwo = 21

Number in array = 2
21 from last step + 2 from this step
Total sumTwo = 23

Number in array = 7
23 from last step + 7 from this step
Total sumTwo = 30

Number in array = 3
30 from last step + 3 from this step
Total sumTwo = 33

Number in array = 1
33 from last step + 1 from this step
Total sumTwo = 34

Number in array = 6
34 from last step + 6 from this step
Total sumTwo = 40

Final sumOne = 16
Final sumTwo = 40
Final TOTAL sum = 16 + 40 = 56
56 % 10 != 0
Array above is NOT valid

Given array: [4,9,2,9,8,7,7,1,6,9,2,1,7,0,9,3]
-------- Calculating sumOne --------

Number in array = 9
9 x 2 = 18
18 > 9 so we subtract 9
18 - 9 = 9
0 from last step + 9 from this step
Total sumOne = 9

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
9 from last step + 5 from this step
Total sumOne = 14

Number in array = 2
2 x 2 = 4
14 from last step + 4 from this step
Total sumOne = 18

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
18 from last step + 3 from this step
Total sumOne = 21

Number in array = 7
7 x 2 = 14
14 > 9 so we subtract 9
14 - 9 = 5
21 from last step + 5 from this step
Total sumOne = 26

Number in array = 8
8 x 2 = 16
16 > 9 so we subtract 9
16 - 9 = 7
26 from last step + 7 from this step
Total sumOne = 33

Number in array = 2
2 x 2 = 4
33 from last step + 4 from this step
Total sumOne = 37

Number in array = 4
4 x 2 = 8
37 from last step + 8 from this step
Total sumOne = 45

-------- Calculating sumTwo --------

Number in array = 3
0 from last step + 3 from this step
Total sumTwo = 3

Number in array = 0
3 from last step + 0 from this step
Total sumTwo = 3

Number in array = 1
3 from last step + 1 from this step
Total sumTwo = 4

Number in array = 9
4 from last step + 9 from this step
Total sumTwo = 13

Number in array = 1
13 from last step + 1 from this step
Total sumTwo = 14

Number in array = 7
14 from last step + 7 from this step
Total sumTwo = 21

Number in array = 9
21 from last step + 9 from this step
Total sumTwo = 30

Number in array = 9
30 from last step + 9 from this step
Total sumTwo = 39

Final sumOne = 45
Final sumTwo = 39
Final TOTAL sum = 45 + 39 = 84
84 % 10 != 0
Array above is NOT valid

Given array: [4,9,1,3,5,4,0,4,6,3,0,7,2,5,2,3]
-------- Calculating sumOne --------

Number in array = 2
2 x 2 = 4
0 from last step + 4 from this step
Total sumOne = 4

Number in array = 2
2 x 2 = 4
4 from last step + 4 from this step
Total sumOne = 8

Number in array = 0
0 x 2 = 0
8 from last step + 0 from this step
Total sumOne = 8

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
8 from last step + 3 from this step
Total sumOne = 11

Number in array = 0
0 x 2 = 0
11 from last step + 0 from this step
Total sumOne = 11

Number in array = 5
5 x 2 = 10
10 > 9 so we subtract 9
10 - 9 = 1
11 from last step + 1 from this step
Total sumOne = 12

Number in array = 1
1 x 2 = 2
12 from last step + 2 from this step
Total sumOne = 14

Number in array = 4
4 x 2 = 8
14 from last step + 8 from this step
Total sumOne = 22

-------- Calculating sumTwo --------

Number in array = 3
0 from last step + 3 from this step
Total sumTwo = 3

Number in array = 5
3 from last step + 5 from this step
Total sumTwo = 8

Number in array = 7
8 from last step + 7 from this step
Total sumTwo = 15

Number in array = 3
15 from last step + 3 from this step
Total sumTwo = 18

Number in array = 4
18 from last step + 4 from this step
Total sumTwo = 22

Number in array = 4
22 from last step + 4 from this step
Total sumTwo = 26

Number in array = 3
26 from last step + 3 from this step
Total sumTwo = 29

Number in array = 9
29 from last step + 9 from this step
Total sumTwo = 38

Final sumOne = 22
Final sumTwo = 38
Final TOTAL sum = 22 + 38 = 60
60 % 10 = 0
Array above is valid

Given array: [0,9,1,3,5,4,0,4,6,3,0,7,2,5,2,3]
-------- Calculating sumOne --------

Number in array = 2
2 x 2 = 4
0 from last step + 4 from this step
Total sumOne = 4

Number in array = 2
2 x 2 = 4
4 from last step + 4 from this step
Total sumOne = 8

Number in array = 0
0 x 2 = 0
8 from last step + 0 from this step
Total sumOne = 8

Number in array = 6
6 x 2 = 12
12 > 9 so we subtract 9
12 - 9 = 3
8 from last step + 3 from this step
Total sumOne = 11

Number in array = 0
0 x 2 = 0
11 from last step + 0 from this step
Total sumOne = 11

Number in array = 5
5 x 2 = 10
10 > 9 so we subtract 9
10 - 9 = 1
11 from last step + 1 from this step
Total sumOne = 12

Number in array = 1
1 x 2 = 2
12 from last step + 2 from this step
Total sumOne = 14

Number in array = 0
0 x 2 = 0
14 from last step + 0 from this step
Total sumOne = 14

-------- Calculating sumTwo --------

Number in array = 3
0 from last step + 3 from this step
Total sumTwo = 3

Number in array = 5
3 from last step + 5 from this step
Total sumTwo = 8

Number in array = 7
8 from last step + 7 from this step
Total sumTwo = 15

Number in array = 3
15 from last step + 3 from this step
Total sumTwo = 18

Number in array = 4
18 from last step + 4 from this step
Total sumTwo = 22

Number in array = 4
22 from last step + 4 from this step
Total sumTwo = 26

Number in array = 3
26 from last step + 3 from this step
Total sumTwo = 29

Number in array = 9
29 from last step + 9 from this step
Total sumTwo = 38

Final sumOne = 14
Final sumTwo = 38
Final TOTAL sum = 14 + 38 = 52
52 % 10 != 0
Array above is NOT valid

An array of ALL invalid arrays:
[ [ 4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5 ],
  [ 5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3 ],
  [ 3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4 ],
  [ 6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5 ],
  [ 5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4 ],
  [ 3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4 ],
  [ 6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3 ],
  [ 4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3 ],
  [ 0, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3 ] ]

********* Testing third function *********            

// this function goes through the array of invalid arrays/credit cards printed above 
and based on the number in the 0th index, prints out the name of the company. Since, first
array has 4 in 0th index, it prints Visa, second array has 5 in 0th index, it prints Mastercard, 
third array has 3 in 0th index, it prints Amex (and so on). Since last array has 0 in 0th index, 
it prints 'Company not found'. Note that there is more than one array that hold the numbers 3, 4, 
5, and 6 but we only print these company names once. 

Credit card companies that have possibly issued these faulty numbers:
[ 'Visa', 'Mastercard', 'Amex', 'Discover', 'Company not found' ]

*/
