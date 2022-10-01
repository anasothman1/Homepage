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
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

var name2;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


name2 = ['🍎 Red Apple', '🍍 Pineapple', '🍌 Banana', '🍐 Pear', '🍒 Cherries', '🍉 Watermelon'];


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text').value);

  element_list.appendChild(new_li);

});

document.getElementById('select').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  let new_li2 = document.createElement('li');
  new_li2.innerText = randomMember(name2);

  element_list2.appendChild(new_li2);

});

var links;

// Describe this function...
function set_links() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  links = ['https://upload.wikimedia.org/wikipedia/commons/1/11/Queen_Elizabeth_II_official_portrait_for_1959_tour_%28retouched%29_%28cropped%29_%283-to-4_aspect_ratio%29.jpg', 'https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MzI2MDQ1OTYxODIzNTA5/queen-elizabeth-ii-gettyimages-904669426.jpg', 'https://britishheritage.com/uploads/article/2019/3/1781/article_Queen_Elizabeth_II_of_New_Zealand_Julian_Calder_for_Governor-General_of_New_Zealand.jpg?t=1656073940', 'https://static.foxnews.com/foxnews.com/content/uploads/2022/09/queen-elizabeth-young-coronation-prince-philip.jpg', 'https://cdn.vox-cdn.com/thumbor/pDQLNuvoE4vbVynapa0k6t3N2DU=/0x0:3997x2664/1200x800/filters:focal(1651x1092:2289x1730)/cdn.vox-cdn.com/uploads/chorus_image/image/71370333/GettyImages_1423635283d.0.jpg', 'https://images.mktw.net/im-621813?width=700&height=466'];
}


set_links();
links.push(links[0]);
let element_image = document.getElementById('image');
element_image.setAttribute("src", links.shift());
element_image.innerText = 'Hoo';


document.getElementById('next').addEventListener('click', (event) => {
  links.push(links[0]);
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", links.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  links.unshift(links.slice(-1)[0]);
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", links.pop());

});

