/* const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
remove the above code after first example */

// image switch code is below

const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/mountaintop-flowers.jpg') {
    myImage.setAttribute('src','images/image2.jpg');
  } else {
    myImage.setAttribute('src','images/mountaintop-flowers.jpg');
  }
}

// code below here is for the name selector feature at the end of the javascript basics
let myButton = document.querySelector('button');
// changed h1 to h2 inside the querySelector parentheses for myHeading
let myHeading = document.querySelector('#welcome');

//  function setUserName() {
//     const myName = prompt('Please enter your name.');
//      localStorage.setItem('name', myName);
//      myHeading.textContent = `DH is cool, ${myName}`;
//    } 
// previous setUserName function from tutorial. Replaced by new one below

  function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
      } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome, ${myName}`;
  }
  }
  

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Welcome, ${storedName}`;
  }
  
  myButton.onclick = () => {
    setUserName();
  }
   