let number = "ccbabaccffpgkkklll"
number = Array.from(
new Set(number.split(''))).toString();

console.log(number);
