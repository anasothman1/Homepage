/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);

document.getElementById('day').addEventListener('click', (event) => {
  let element_daylist = document.getElementById('daylist');
  element_daylist.setAttribute("src", '#ffff99');
  element_daylist.setAttribute("src", '#000000');

});
let element_Night = document.getElementById('Night');
element_Night.style.color = '#ffff99';
element_Night.style.backgroundColor = '#000000';


document.getElementById('day').addEventListener('click', (event) => {
  let element_daylist2 = document.getElementById('daylist');
  element_daylist2.innerText = 'Day mode';
  element_daylist2.style.color = '#330000';
  element_daylist2.style.backgroundColor = '#ffcccc';

});
let element_day = document.getElementById('day');
element_day.style.color = '#330000';
element_day.style.backgroundColor = '#ffcccc';

let element_list = document.getElementById('list');
let new_li = document.createElement('li');
let new_a = document.createElement('a');
new_a.setAttribute("href", 'http://www.codeyourfuture.io ');
new_a.innerText = 'Code Your Future';

new_li.appendChild(new_a);
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.setAttribute("href", 'https://www.google.com/');
new_a2.innerText = 'Google';

new_li2.appendChild(new_a2);
let new_li3 = document.createElement('li');
let new_a3 = document.createElement('a');
new_a3.setAttribute("href", 'https://www.bbc.co.uk/news');
new_a3.innerText = 'Bbc News';

new_li3.appendChild(new_a3);

new_li2.appendChild(new_li3);

new_li.appendChild(new_li2);

element_list.appendChild(new_li);
function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_input = document.createElement('input');
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(getNumberOrString(document.getElementById('text').value)));

  element_list.appendChild(new_input);

});
function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}
var fruits, emoijs;


fruits = ['Kiwi', 'Grapes', 'Banana'];
emoijs = ['🥝', '🍇', '🍌'];

let element_list = document.getElementById('list');
while (!!fruits.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let new_li = document.createElement('li');
  let new_span = document.createElement('span');
  new_span.innerText = fruits.shift();

  new_li.appendChild(new_span);
  let new_span2 = document.createElement('span');
  new_span2.innerText = emoijs.shift();

  new_li.appendChild(new_span2);

  element_list.appendChild(new_li);
}


