export function numberToStringWithCommas(input) {
    if (typeof input === "number") {
      return input.toLocaleString();
    } else if (typeof input === "string") {
      return input; 
    } else {
      console.error('Input must be a number or a string representing a number.');
      return null; 
    }
  }
  
  export function stringWithCommasToNumber(input) {
    if (typeof input === "string") {
      const number = parseFloat(input.replace(/,/g, ""));
      return isNaN(number) ? null : number;
    } else if (typeof input === "number") {
      return input; 
    } else {
      console.error('Input must be a string or a number.');
      return null; 
    }
  }
  