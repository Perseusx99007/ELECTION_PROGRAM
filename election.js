//ELECTION VERIFICATION 2022 PROGRAM USING ONLY IF ELSE

var readlineSync = require('readline-sync');                                                          //package
var birthYear = readlineSync.question("Please Enter Your Birth Year :- ");                            //inputs
var age = readlineSync.question("\n\n\nPlease Enter Your Age according to year :- ");                 //inputs
var legalAge = readlineSync.question("\n\n\nAre you of a leagal age to vote :- ");                    //inputs

var ignoreCase = legalAge.toLowerCase();                                  //converting the string to lowercase
var ageCount = 0;                                                         //counter
var nextVotechance = 0;                                                   
var calculatedAge = 2022 - birthYear;                                     //to verify the birthyear
var ageDifference = 18 - calculatedAge;                                   //to calcualate the no. of years till 18
var yearsLeft = ageDifference / 4;                                        //getting the value in decimal
var wholeValue = Math.trunc(yearsLeft);                      //omitting the decimal value (NOTE:- not rounding the value)

//console.log("\n\n\n" + calculatedAge);                                   //print
//console.log("\n\n\n" + yearsLeft);                                       //print
//console.log("\n\n\n" + wholeValue);                                      //print

if (yearsLeft == wholeValue)                                   //processing the age when the user can vote next
{
  nextVotechance = calculatedAge + (yearsLeft*4);
  //console.log(nextVotechance);
}
else
{
  nextVotechance = calculatedAge + (wholeValue*4) + 4;
  //console.log(nextVotechance);
}

if (calculatedAge == age && calculatedAge < 121 && calculatedAge != 0)                    //processing
{
  if (calculatedAge >= 18 && ignoreCase === "yes")
  {
    console.log("\n\n\nYes!!! You can vote in the upcoming 2021 Elections.");
    console.log("\n\n\nYou can again vote when you're " + (calculatedAge + ageCount+4) + ".");        //age when the user can vote next
    ageCount++;
    console.log("\n\n\nYou recieve " + ageCount + " token of appreciation from the Election Comitee");
  }
  else if (calculatedAge < 18 && ignoreCase === "no")
  {
    console.log("\n\n\nSadly you cannot vote in the upcoming 2021 Elections because you're not 18.");
    console.log("\n\n\nYou can cast your first vote when you're " + nextVotechance + ".");           //age when the user can vote next
    ageCount++;
    console.log("\n\n\nYou recieve " + ageCount + " token of appreciation from the Election Comitee");
  }
  else
 {
  console.log("\n\n\nPlease check your entries");
  ageCount--;
  console.log("\n\n\nYou recieve " + ageCount + " token of appreciation from the Election Comitee");
 }
  
}
else
{
  console.log("\n\n\nPlease check your entries");
  ageCount--;
  console.log("\n\n\nYou recieve " + ageCount + " token of appreciation from the Election Comitee");
}


