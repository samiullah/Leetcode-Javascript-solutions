/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
  let without = s.replace(/[^0-9A-Za-z]+/gmi,"")

let main = without.toLowerCase()

let rev = main.split("").reverse().join("")

if(main==rev){
    return true
}
else{
    return false
}
    
    
};