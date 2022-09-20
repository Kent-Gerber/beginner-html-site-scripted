// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/mountaintop-flowers.jpg') {
    myImage.setAttribute('src','images/image2.jpg');
  } else {
    myImage.setAttribute('src','images/mountaintop-flowers.jpg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
      } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `DH is cool, ${myName}`;
  }
  }

if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `DH is cool, ${storedName}`;
  }

myButton.onclick = () => {
    setUserName();
  }
