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

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

/* takes in an array of numbers 
(credit card number seperated by number) */
/* returns true if card is good and false if bad*/
const validateCred = (array) => {
  let newArray = [];
  newArray.push(array[array.length - 1]);
  for (let i = array.length -2; i>=0; i-=2) {
    newArray.push(array[i] * 2)
  };
  for (let i = array.length -3; i>=0; i-=2) {
    newArray.push(array[i])
  };
  for (let n = 0; n < newArray.length; n++ ) {
    if (newArray[n] > 9) {
      newArray[n] = newArray[n] - 9;
    }
  };
  let sum = newArray.reduce((a, b) => a + b);
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

/* takes in a nested array of credit card numbers */
/* returns a nested array of invalid card numbers*/
const findInvalidCards = (nestedArray) => {
  let invalidCards = [];
  for (i = 0; i < nestedArray.length; i++) {
    if (validateCred(nestedArray[i]) === false) {
      invalidCards.push(nestedArray[i]);
    }
  }
  return invalidCards
};



/* takes in a nested array  of bad credit card numbers*/
/* returns an array of companys that have mailed out bad cards*/
const idInvalidCardCompanies = (cardArray) => {
  let badDigits = [];
  let badCompanys = [];
  cardArray.forEach(card => badDigits.push(card[0]));
  if (badDigits.includes(3)) {
    badCompanys.push('Amex (American Express)')
  };
  if (badDigits.includes(4)) {
    badCompanys.push('Visa')
  };
  if (badDigits.includes(5)) {
    badCompanys.push('Mastercard')
  };
   if (badDigits.includes(6)) {
    badCompanys.push('Discover')
  } ;
  if (badDigits.includes(0) || badDigits.includes(1) ||
      badDigits.includes(2) || badDigits.includes(7) ||
      badDigits.includes(8) || badDigits.includes(9)) {
    badCompanys.push('Company not found')
  } ;
  return badCompanys;
};

console.log(idInvalidCardCompanies(findInvalidCards(batch)))




















