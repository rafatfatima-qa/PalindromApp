/*

This is a function to check the string if its a palindrome or not.
Plaindrome means the word remains same if it is reads backward or forward.

*/

//initially Check button will be deactivated
document.querySelector("#checkBtn").disabled = true;

inputField.addEventListener('input', function stateHandle() {
   
   if (document.querySelector("#inputField").value === "") {
    document.querySelector("#checkBtn").disabled = true; //button remains disabled
   } 
   
   else {
    document.querySelector("#checkBtn").disabled = false; //button is enabled
   }
 });


function checkPalindrome(str) {


   let inputStr = document.querySelector("#inputField").value;
   //console.log(inputStr);

   // convert my input string to an array
   const strArray = inputStr.split('');
   console.log(strArray);

   // reverse the input string's array values
   const reverseStrArray = strArray.reverse();
   console.log(reverseStrArray);

   // convert array to string again
   const reverseString = reverseStrArray.join('');

   if (inputStr == reverseString) {
      //  console.log('It is a palindrome');
      document.querySelector("#results").innerHTML = "It is a palindrome";
      document.querySelector("#checkBtn").disabled = false;
   }
   else {
      //  console.log('It is not a palindrome');
      document.querySelector("#results").innerHTML = "It is not a palindrome";
      document.querySelector("#checkBtn").disabled = false;
   }
}
