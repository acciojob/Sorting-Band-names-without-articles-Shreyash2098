//your code here
// An array of band names
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'The Who'];

// Remove articles from the band names and store them in a new array
let modifiedBandNames = bandNames.map(name => {
  // Split the name into words
  let words = name.split(' ');

  // Remove articles ('a', 'an', 'the') if they are at the beginning of the name
  while (words.length > 1 && ['a', 'an', 'the'].includes(words[0].toLowerCase())) {
    words.shift();
  }

  // Join the words back to form the modified name
  return words.join(' ');
});

// Sort the modified band names lexicographically
modifiedBandNames.sort();

// Create an HTML list
let ul = document.createElement('ul');
ul.id = 'band';

// Add list items to the ul
modifiedBandNames.forEach(name => {
  let li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

// Append the ul to the body or any other element where you want to display it
document.body.appendChild(ul);

