// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    var words = str.split(' ');
    var capitalizedStr = '';

    for (var i = 0; i < words.length; i++) {
        capitalizedStr += words[i][0].toUpperCase() + words[i].slice(1) + ' ';
    }
    return capitalizedStr.trim();
}
module.exports = capitalize;
