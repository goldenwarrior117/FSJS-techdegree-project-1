var red;
var blue;
var green;

// FSJS - Random Quote Generator

/* I created an array[] of quote objects{} and I named it (quotes)

*/

var quotes = [
  { quote: "The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    source: 'Mark Zuckerberg',
    citation: "Facebook's Mark Zuckerberg -- Insights For Entrepreneurs",
    year: '2011' ,
    occupation: '--Former Programmer/Businessman',
    Image: 'images/MarkZ2.jpg',
  },

  {
    quote: 'Not everything that can be counted counts, and not everything that counts can be counted.',
    source: 'William Bruce Cameron ',
    citation: 'Informal Sociology: A Casual Introduction to Sociological Thinking',
    year: '1963' ,
    occupation:'--Book Author',
    Image: 'images/author-w-bruce-cameron-dogs.png',
  },

  {
    quote: 'Life is 10% what happens to you and 90% how you react to it.',
    source: 'Charles R. Swindoll',
    citation: 'https://www.brainyquote.com/quotes/charles_r_swindoll_388332',
    year: '2011' ,
    occupation: '--Pastor/Author',
    Image: 'images/chuck-swindoll.jpg',
  },

  {
    quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time',
    source: 'Thomas A. Edison',
    citation: 'https://www.brainyquote.com/quotes/thomas_a_edison_149049',
    year: '1931' ,
    occupation: '--Inventor/Businessman',
    Image: 'images/ThomasH.jpg',
  },

  {
    quote: "I'd rather attempt to do something great and fail than to attempt to do nothing and succeed.",
    source: 'Robert H. Schuller',
    citation: 'https://www.brainyquote.com/quotes/robert_h_schuller_155998',
    year: '2015' ,
    occupation: '--Pastor/Motivational Speaker',
    Image: 'images/RobertH2.jpg',
  }
];



/*
choose and then return a random quote
object from the array
*/
function getRandomQuote(array) {
   return array[Math.floor(Math.random() * array.length)];
}


//Function to generate a random background color
function randomBackgroundColor() {
  var anyColor;
  red = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  anyColor = 'rgb(' + red + ',' + blue + ',' + green + ')';
  return anyColor;
}


// I created a second function and  gave it (printQuote) as its name.
function printQuote() {
  var message = "";   // This is the message variable with empty strings
  var result = getRandomQuote(quotes);

  message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;
  message += "<span class='citation'>" + result.citation + "</span>";
  message += "<span class='year'>" + result.year + "</span>";
  message += "<span class='occupation'>" + result.occupation + "</span>";
  message += "<img src=" + result.Image +">";
  message += "</p>";
    document.getElementById('bgcolor').style.backgroundColor = randomBackgroundColor();
    document.getElementById('quote-box').innerHTML = message;
    randomBackgroundColor();
}

printQuote();





// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
