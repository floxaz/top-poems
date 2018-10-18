const copy = textToCopy => {
    // creating an element in order to copy attached text from there
    const textArea = document.createElement('textarea');
    const content = document.createTextNode(textToCopy);

    textArea.appendChild(content);
    document.body.appendChild(textArea);
    textArea.style.opacity = '0';
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

const notify = text => {
    const notification = document.querySelector('.notification');
    if (typeof text === 'string') {
        notification.textContent = text;
        notification.classList.add('notification--coming');

        window.setTimeout(() => {
            notification.classList.remove('notification--coming');
            notification.classList.add('notification--desappearing');
        }, 10000);

        notification.classList.remove('notification--desappearing');
    } else {
        console.log('Your message has to be a string');
    }
}

const copyMail = document.querySelector('.copy-mail');

/* On email icon click copy email to the user's clipboard and notify the action */
copyMail.addEventListener('click', () => {
    const mail = 'rossty4422@gmail.com';
    copy(mail);
    notify('Email è stato copiato');
});

const navHeader = document.querySelector('.navigation-header');
const mobileLinks = document.querySelectorAll('.navigation-mobile__link');

/* Show and remove sticky or mobile navigation */
const section0 = new Waypoint({
    element: document.getElementById('giacomo-leopardi'),
    handler: direction => {
        if(direction === 'down') {
            navHeader.classList.add('sticky');
            navBtn.classList.remove('navigation-mobile__button--transparent');
        } else {
            navHeader.classList.remove('sticky');
            // if mobile nav is not opened 
            if(radioBtn.checked === false) {
                navBtn.classList.add('navigation-mobile__button--transparent');
            }
        }
    },
    offset: 60
});

/* Shift current link on navigation during surfing the page */
let currentLink = document.querySelector('.sticky__link-current');

const shiftCurrentLink = (direction, current, previous) => {
    if(direction === 'down') {
        currentLink.style.left = `${current}`;
    } else {
        currentLink.style.left = `${previous}`;
    }
};

const section1 = new Waypoint({
    element: document.getElementById('dante-alighieri'),
    handler: direction => {
        shiftCurrentLink(direction, '20%', '0');
    },
    offset: 60
});
console.log(section1.element);

const section2 = new Waypoint({
    element: document.getElementById('primo-levi'),
    handler: direction => {
        shiftCurrentLink(direction, '40%', '20%');
    },
    offset: 60
});

const section3 = new Waypoint({
    element: document.getElementById('ugo-foscolo'),
    handler: direction => {
        shiftCurrentLink(direction, '60%', '40%');
    },
    offset: 60
});

const section4 = new Waypoint({
    element: document.getElementById('eugenio-montale'),
    handler: direction => {
        shiftCurrentLink(direction, '80%', '60%');
    },
    offset: 60
});

// convert node list to an array
const linkList = Array.from(document.querySelectorAll('.sticky__link'));
console.log(linkList);
const targetLinks = linkList.map(cur => {
    return cur.hash;
});
console.log(targetLinks);

document.addEventListener('keydown', e => {
    let url = window.location.href.split('#');
    //console.log(e.keyCode);
    if(navHeader.classList.contains('sticky') && e.keyCode === 39) {
       let url = window.location.href.split('#');
       switch(currentLink.style.left) {
           // The .style property is for getting styles that were placed directly on the element. i.e by js
           // It doesn't compute styles from your stylesheets. That's why 1st case is empty.
           case '':
                window.location.href = url[0] + targetLinks[1];
                break;
           case '0px':
                window.location.href = url[0] + targetLinks[1];
                break;
           case '20%':
                window.location.href = url[0] + targetLinks[2];
                break;
           case '40%':
                window.location.href = url[0] + targetLinks[3];
                break;
           case '60%':
                window.location.href = url[0] + targetLinks[4];
                break;
       }

    }

    if(navHeader.classList.contains('sticky') && e.keyCode === 37) {
        let url = window.location.href.split('#');
        switch(currentLink.style.left) {
            case '20%':
                 window.location.href = url[0] + targetLinks[0];
                 break;
            case '40%':
                 window.location.href = url[0] + targetLinks[1];
                 break;
            case '60%':
                 window.location.href = url[0] + targetLinks[2];
                 break;
            case '80%':
                 window.location.href = url[0] + targetLinks[3];
                 break;
        }
 
     }
})

$(function(){
    $.scrollIt();
});

const header = document.querySelector('.header');
console.log(header);

/* MOBILE NAVIGATION */
const radioBtn = document.getElementById('navi-toggle');
const navBtn = document.querySelector('.navigation-mobile__button');
let bounding;


// on click remove transparent button style or add on close of navigation
navBtn.addEventListener('click', () => {
    bounding = header.getBoundingClientRect();
    console.log(bounding.y);
    console.log(window.innerHeight);
    if(radioBtn.checked === false) {
        navBtn.classList.remove('navigation-mobile__button--transparent');
    // on nav click if header is belove the mobile nav, change the navigation to transparent
    } else if((bounding.y + window.innerHeight) >= 61) {
        window.setTimeout(() => {
            navBtn.classList.add('navigation-mobile__button--transparent');
        }, 800);
    }

})

const navMobileList = document.querySelector('.navigation-mobile__list');
navMobileList.addEventListener('click', e => {
    if(e.target.nodeName == 'A') {
        // uncheck the radio button in order to close navigation
        radioBtn.checked = false;
    }
})
/*
window.setTimeout(() => {
    if(window.onload) { 
        console.log('YEs');
    } else {
        console.log('NOPE');
    }
}, 800);
*/
const preloader = document.querySelector('.preloader');
console.log(preloader);
window.addEventListener('load', () => {
    console.log('Loaded');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
})