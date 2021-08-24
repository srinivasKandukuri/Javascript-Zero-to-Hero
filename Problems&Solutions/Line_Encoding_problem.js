/*Given a string, return its encoding defined as follows:
First, the string is divided into the least possible number of disjoint substrings consisting of identical characters, for example, "aabbbc" is divided into ["aa", "bbb", "c"].
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character, for example, substring "bbb" is replaced by "3b".
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example
For s = "aabbbc", the output should be lineEncoding(s) = "2a3bc".
*/


function lineEncoding(s) {
    var x = 1;    
    var result = '';
    for(var i=0; i < s.length; i++){
        if(s[i] === s[i+1]){
            x += 1;
        } else {
            result += x+s[i];
            x = 1;
        }
    }
    return result.replace(/1/g, '');
}

lineEncoding('aaabbbc');
