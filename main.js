


//  ANALALYZING AND REPAIRING MEMORY ISSUES:
 
 
//   analyze and fix memory issues for the following code.
 
//  * HTML: 
//  * <button id="one">Button 1</button> 
//  * <button id="two">Button 2</button>
 

// JavaScript:
  
function contain() {
  var one = document.querySelector("#one");
  var two = document.querySelector("#two");

  function callBackExampleOne() {
    two.removeEventListener('click', buttonTwo);
  }

  function callBackExampleTwo() {
    one.removeEventListener('click', buttonOne);
  }

  function buttonOne() {
    two.remove();
    console.log(two); // will print the html even after deletion
    callBackExampleTwo();
  }

  function buttonTwo() {
    one.remove();
    console.log(one); // will print the html even after deletion
    callBackExampleOne();
  }

  one.addEventListener('click', buttonOne);
  two.addEventListener('click', buttonTwo);
}

contain();



 
//   Problem: this is the “leaking DoM” issue discussed earlier. 
//  When elements are removed, they are still referenced by the callback function. 
//  to address this, put the one and two variables into a callback’s scope and remove the event listener after.



// Solution
// To fix this issue is to put the elements and event listeners within contain
//  functions and remove the event listeners once they are triggered