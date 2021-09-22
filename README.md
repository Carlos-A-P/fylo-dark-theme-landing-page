# fylo dark theme landing page

- Live website -(https://cpwd-fylo-dark-theme-landing-page.netlify.app/#)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## My process

### Screenshot

### End Result

![result1](https://user-images.githubusercontent.com/85038929/129490290-d247dba0-489e-481d-8f39-debec0c27d29.JPG)
![result2](https://user-images.githubusercontent.com/85038929/129490294-90cc9bc9-9f3d-4a7c-ae7d-76fe95ba259a.JPG)
![result3](https://user-images.githubusercontent.com/85038929/129490297-9d6bf0dd-c8be-40ec-b4fc-4877412e2980.JPG)
![result4](https://user-images.githubusercontent.com/85038929/129490299-497cd938-0d01-4433-b1a6-7fd9c467720c.JPG)

### Active image

![active](https://user-images.githubusercontent.com/85038929/129490301-d17b0df6-46bb-4172-8037-7e90ee672e85.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS FlexBox
- JavaScript
- Media Queries

### What I learned

This challenge tested my position skills. It helped me improve my flex-box, grid and absolute positioning skills for my elements and background element. It was one of the biggest projects I've made so I had to make sure I maintained clean and organized code.

- In the following javascript sytanx, I passed the input from the form through a function to check if email is valid or not.

```Javascript
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInput()
})

function checkInput() {
     //get the value from the inputs
    //trim function removes all of the white space
    const emailValue = email.value.trim();
    if(emailValue === ''){
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank')
    }else if (!isEmail(emailValue)){
        setErrorFor(email, 'Please provide a valid email');
    }else{
        clearErrors(email);
        //added this alert so that it can first clear off any errors left
        setTimeout(alertSuccess, 0);
    }
}
```

### Questions

- I wasn't able to use Font Awesome icons since they always appeared as blank squares so I resulted to downloading png icons. However I found it difficult to change the colors when I hover over the social icons. The default colors for two of them where black and I tried to use filter but was only able to turn them white.

### Useful resources

- [Responsive Navbar Tutorial](https://www.youtube.com/watch?v=At4B7A4GOPg&ab_channel=WebDevSimplified) - this is a tutorial that helped me understand how to create a dropdown menu for mobile screens

- [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) - I used this element to style my svg icons

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://github.com/Carlos-A-P/fylo-dark-theme-landing-page)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
