(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// const appID = "1276632006018631";
// const clientToken = "530134b34e11b6c4a44edb69fb93381d {delete}";
// const url = "https://www.instagram.com/p/CGDdgrxsy--/";
// const getURL = `https://graph.facebook.com/v8.0/instagram_oembed?url=${url}&access_token=${appID}|${clientToken}`;

// const axios = require('axios');

// async function getImage() {
//   try {
//     const response = await axios({
//       method: 'get',
//       url: getURL,
//       fields: 'thumbnail_url',
//       access_token: `${appID}|${clientToken}`,
//     });
//     const picture = response.data.thumbnail_url;
//     console.log(picture);
//     document.querySelector('.instagram__container').innerHTML = `
//       <img src="${picture}" alt="Insta Photo 1" class="instagram__img">
//       <img src="${picture}" alt="Insta Photo 2" class="instagram__img">
//       <img src="${picture}" alt="Insta Photo 3" class="instagram__img">
//       <img src="${picture}" alt="Insta Photo 4" class="instagram__img">
//       <img src="${picture}" alt="Insta Photo 5" class="instagram__img">
//     `;
//   } catch (error) {
//     console.error(error);
//     document.querySelector('.instagram__container').innerHTML = `
//       <img src="../img/insta-1.jpg" alt="Insta Photo 1" class="instagram__img">
//       <img src="../img/insta-2.jpg" alt="Insta Photo 2" class="instagram__img">
//       <img src="../img/insta-3.jpg" alt="Insta Photo 3" class="instagram__img">
//       <img src="../img/insta-4.jpg" alt="Insta Photo 4" class="instagram__img">
//       <img src="../img/insta-5.jpg" alt="Insta Photo 5" class="instagram__img">
//     `
//   }
// }

// getImage();

// Tracks amount of each item selected
var amount = {
    'jamaica': {
        'oneCT': 0,
        'fourCT': 0,
        'eightCT': 0,
        'total': function total() {
            return this.oneCT + this.fourCT * 4 + this.eightCT * 8;
        }
    },
    'chai': {
        'oneCT': 0,
        'fourCT': 0,
        'eightCT': 0,
        'total': function total() {
            return this.oneCT + this.fourCT * 4 + this.eightCT * 8;
        }
    },
    'jengLemon': {
        'oneCT': 0,
        'fourCT': 0,
        'eightCT': 0,
        'total': function total() {
            return this.oneCT + this.fourCT * 4 + this.eightCT * 8;
        }
    },
    'grandTotal': function grandTotal() {
        return amount.jamaica.total() + amount.chai.total() + amount.jengLemon.total();
    }

    // Jamaica Selector Control
};document.querySelector('.shop-box__flavors-box--1').addEventListener('click', function (event) {

    // Add selected background & svg color 
    document.querySelector('.shop-box__flavors-box--1').classList.add("selected");
    document.querySelector('.shop-box__flavors-icons--1').src = "../img/jamaica-color.svg";

    // Add ingredients
    document.querySelector('.shop-box__ingredients-text').innerHTML = "Té negro, azúcar de caña, agua, flor de Jamaica, canela, jengibre y cascara de piña";

    // Remove selected color
    document.querySelector('.shop-box__flavors-box--2').classList.remove("selected");
    document.querySelector('.shop-box__flavors-box--3').classList.remove("selected");

    // Remove svg color
    document.querySelector('.shop-box__flavors-icons--2').src = "../img/chai.svg";
    document.querySelector('.shop-box__flavors-icons--3').src = "../img/ginger.svg";
    document.querySelector('.shop-box__flavors-icons--4').src = "../img/lemongrass.svg";

    // Update values
    document.querySelector('.shop-box__amount-decrease--1').nextElementSibling.value = amount.jamaica.oneCT;
    document.querySelector('.shop-box__amount-decrease--2').nextElementSibling.value = amount.jamaica.fourCT;
    document.querySelector('.shop-box__amount-decrease--3').nextElementSibling.value = amount.jamaica.eightCT;
});

// Chai Selector Control
document.querySelector('.shop-box__flavors-box--2').addEventListener('click', function (event) {

    // Add selected background & svg color 
    document.querySelector('.shop-box__flavors-box--2').classList.add("selected");
    document.querySelector('.shop-box__flavors-icons--2').src = "../img/chai-color.svg";

    // Add ingredients
    document.querySelector('.shop-box__ingredients-text').innerHTML = "Té negro, azúcar de caña, agua, jengibre, cardamomo, anís estrella, canela, pimienta, clavo de olor";

    // Remove selected background
    document.querySelector('.shop-box__flavors-box--1').classList.remove("selected");
    document.querySelector('.shop-box__flavors-box--3').classList.remove("selected");

    // Remove svg color
    document.querySelector('.shop-box__flavors-icons--1').src = "../img/jamaica.svg";
    document.querySelector('.shop-box__flavors-icons--3').src = "../img/ginger.svg";
    document.querySelector('.shop-box__flavors-icons--4').src = "../img/lemongrass.svg";

    // Update values
    document.querySelector('.shop-box__amount-decrease--1').nextElementSibling.value = amount.chai.oneCT;
    document.querySelector('.shop-box__amount-decrease--2').nextElementSibling.value = amount.chai.fourCT;
    document.querySelector('.shop-box__amount-decrease--3').nextElementSibling.value = amount.chai.eightCT;
});

// Ginger & Lemongrass Selector Control
document.querySelector('.shop-box__flavors-box--3').addEventListener('click', function (event) {

    // Add selected background & svg color 
    document.querySelector('.shop-box__flavors-box--3').classList.add("selected");
    document.querySelector('.shop-box__flavors-icons--3').src = "../img/ginger-color.svg";
    document.querySelector('.shop-box__flavors-icons--4').src = "../img/lemongrass-color.svg";

    // Add ingredients
    document.querySelector('.shop-box__ingredients-text').innerHTML = "Té verde, azúcar de caña, agua, jengibre, anís estrella, lemongrass, té María Luisa y azúcar de caña";

    // Remove selected color
    document.querySelector('.shop-box__flavors-box--1').classList.remove("selected");
    document.querySelector('.shop-box__flavors-box--2').classList.remove("selected");

    // Remove svg color
    document.querySelector('.shop-box__flavors-icons--1').src = "../img/jamaica.svg";
    document.querySelector('.shop-box__flavors-icons--2').src = "../img/chai.svg";

    // Update values
    document.querySelector('.shop-box__amount-decrease--1').nextElementSibling.value = amount.jengLemon.oneCT;
    document.querySelector('.shop-box__amount-decrease--2').nextElementSibling.value = amount.jengLemon.fourCT;
    document.querySelector('.shop-box__amount-decrease--3').nextElementSibling.value = amount.jengLemon.eightCT;
});

// Catch blank space - 1ct
document.querySelector('.shop-box__amount-decrease--1').nextElementSibling.addEventListener('input', function (event) {
    if (!event.target.value) {
        event.target.value = 0;
    } else {
        event.target.value = parseInt(event.target.value);
    }
});

// Catch blank space - 4ct
document.querySelector('.shop-box__amount-decrease--2').nextElementSibling.addEventListener('input', function (event) {
    if (!event.target.value) {
        event.target.value = 0;
    } else {
        event.target.value = parseInt(event.target.value);
    }
});

// Catch blank space - 8ct
document.querySelector('.shop-box__amount-decrease--3').nextElementSibling.addEventListener('input', function (event) {
    if (!event.target.value) {
        event.target.value = 0;
    } else {
        event.target.value = parseInt(event.target.value);
    }
});

// Decrease Input Amount - 1ct
document.querySelector('.shop-box__amount-decrease--1').addEventListener('click', function (event) {
    var input = event.target.nextElementSibling;

    // Subtract value from input
    if (parseInt(input.value) !== 0) {
        input.value = parseInt(input.value) - 1;
    }

    // Update amount value depending on selected flavor
    if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--1')) {
        // Update amount
        amount.jamaica.oneCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--1').innerHTML = amount.jamaica.total() + " ct";
    } else if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--2')) {
        // Update amount
        amount.chai.oneCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--2').innerHTML = amount.chai.total() + " ct";
    } else {
        // Update amount
        amount.jengLemon.oneCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--3').innerHTML = amount.jengLemon.total() + " ct";
    }
});

// Decrease Input Amount - 4ct
document.querySelector('.shop-box__amount-decrease--2').addEventListener('click', function (event) {
    var input = event.target.nextElementSibling;

    if (parseInt(input.value) !== 0) {
        input.value = parseInt(input.value) - 1;
    }

    // Update amount value depending on selected flavor
    if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--1')) {
        // Update amount
        amount.jamaica.fourCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--1').innerHTML = amount.jamaica.total() + " ct";
    } else if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--2')) {
        // Update amount
        amount.chai.fourCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--2').innerHTML = amount.chai.total() + " ct";
    } else {
        // Update amount
        amount.jengLemon.fourCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--3').innerHTML = amount.jengLemon.total() + " ct";
    }
});

// Decrease Input Amount - 8ct
document.querySelector('.shop-box__amount-decrease--3').addEventListener('click', function (event) {
    var input = event.target.nextElementSibling;

    if (parseInt(input.value) !== 0) {
        input.value = parseInt(input.value) - 1;
    }

    // Update amount value depending on selected flavor
    if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--1')) {
        // Update amount
        amount.jamaica.eightCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--1').innerHTML = amount.jamaica.total() + " ct";
    } else if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--2')) {
        // Update amount
        amount.chai.eightCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--2').innerHTML = amount.chai.total() + " ct";
    } else {
        // Update amount
        amount.jengLemon.eightCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--3').innerHTML = amount.jengLemon.total() + " ct";
    }
});

// Increase Input Amount - 1ct
document.querySelector('.shop-box__amount-increase--1').addEventListener('click', function (event) {
    var input = event.target.previousElementSibling;

    input.value = parseInt(input.value) + 1;

    // Update amount value depending on selected flavor
    if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--1')) {
        // Update amount
        amount.jamaica.oneCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--1').innerHTML = amount.jamaica.total() + " ct";
    } else if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--2')) {
        // Update amount
        amount.chai.oneCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--2').innerHTML = amount.chai.total() + " ct";
    } else {
        // Update amount
        amount.jengLemon.oneCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--3').innerHTML = amount.jengLemon.total() + " ct";
    }
});

// Increase Input Amount - 4ct
document.querySelector('.shop-box__amount-increase--2').addEventListener('click', function (event) {
    var input = event.target.previousElementSibling;

    input.value = parseInt(input.value) + 1;

    // Update amount value depending on selected flavor
    if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--1')) {
        // Update amount
        amount.jamaica.fourCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--1').innerHTML = amount.jamaica.total() + " ct";
    } else if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--2')) {
        // Update amount
        amount.chai.fourCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--2').innerHTML = amount.chai.total() + " ct";
    } else {
        // Update amount
        amount.jengLemon.fourCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--3').innerHTML = amount.jengLemon.total() + " ct";
    }
});

// Increase Input Amount - 8ct
document.querySelector('.shop-box__amount-increase--3').addEventListener('click', function (event) {
    var input = event.target.previousElementSibling;

    input.value = parseInt(input.value) + 1;

    // Update amount value depending on selected flavor
    if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--1')) {
        // Update amount
        amount.jamaica.eightCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--1').innerHTML = amount.jamaica.total() + " ct";
    } else if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--2')) {
        // Update amount
        amount.chai.eightCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--2').innerHTML = amount.chai.total() + " ct";
    } else {
        // Update amount
        amount.jengLemon.eightCT = parseInt(input.value);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--3').innerHTML = amount.jengLemon.total() + " ct";
    }
});

// Input change - 1ct
document.querySelector('.shop-box__amount-decrease--1').nextElementSibling.addEventListener('input', function (event) {
    var input = event.target.value;
    console.log(input);

    // Update amount value depending on selected flavor
    if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--1')) {
        // Update amount
        amount.jamaica.oneCT = parseInt(input);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--1').innerHTML = amount.jamaica.total() + " ct";
    } else if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--2')) {
        // Update amount
        amount.chai.oneCT = parseInt(input);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--2').innerHTML = amount.chai.total() + " ct";
    } else {
        // Update amount
        amount.jengLemon.oneCT = parseInt(input);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--3').innerHTML = amount.jengLemon.total() + " ct";
    }
});

// Input change - 4ct
document.querySelector('.shop-box__amount-decrease--2').nextElementSibling.addEventListener('input', function (event) {
    var input = event.target.value;
    console.log(input);

    // Update amount value depending on selected flavor
    if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--1')) {
        // Update amount
        amount.jamaica.fourCT = parseInt(input);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--1').innerHTML = amount.jamaica.total() + " ct";
    } else if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--2')) {
        // Update amount
        amount.chai.fourCT = parseInt(input);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--2').innerHTML = amount.chai.total() + " ct";
    } else {
        // Update amount
        amount.jengLemon.fourCT = parseInt(input);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--3').innerHTML = amount.jengLemon.total() + " ct";
    }
});

// Input change - 8ct
document.querySelector('.shop-box__amount-decrease--3').nextElementSibling.addEventListener('input', function (event) {
    var input = event.target.value;
    console.log(input);

    // Update amount value depending on selected flavor
    if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--1')) {
        // Update amount
        amount.jamaica.eightCT = parseInt(input);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--1').innerHTML = amount.jamaica.total() + " ct";
    } else if (document.querySelector('.selected').classList.contains('shop-box__flavors-box--2')) {
        // Update amount
        amount.chai.eightCT = parseInt(input);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--2').innerHTML = amount.chai.total() + " ct";
    } else {
        // Update amount
        amount.jengLemon.eightCT = parseInt(input);

        // Display amount
        document.querySelector('.shop-box__flavors-amount--3').innerHTML = amount.jengLemon.total() + " ct";
    }
});

},{}]},{},[1]);
