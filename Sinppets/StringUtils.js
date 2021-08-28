/**
 * Truncate function checks the size of string length if it's greater than given maxlength then append ... after give maxlength of string
 * @param {*} str 
 * @param {*} maxlength 
 * @returns  EX : console.log(Truncate("What I'd like to tell on this topic is:", 20) )
 */
function Truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}

