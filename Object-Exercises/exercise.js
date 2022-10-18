//Assignment 1
const address = {
    street: "14 Salvation Street",
    city: "Ikeja-Lagos",
    zip: 100001,
};

function showAddress(address) {
    for (let key of object.keys(address)) {
        console.log(key+ ': ', address[key]);
    }
}
showAddress(address);

// A parameter (param) is a named variable passed into a function. 
// Param variables are used to import arguments into functions.

// Assignment 2
// Factory Function//
function createAddress() {
    return {
    street: "14 Salvation Street",
    city: "Ikeja-Lagos",
    zip: 100001,
    };
}
console.log(address);

// Constructor Function
function CreateAddress() {
    this.street = "14 Salvation Street";
    this.city = "Ikeja-Lagos";
    this.zip = 100001;
}
const addressHome = createAddress(address);
console.log(addressHome);

// Assignment 3
const address1 = new CreateAddress(address);
const address2 = new CreateAddress(address);

function areEqual(obj1, obj2) {
    if (obj1 === obj2) console.log(true); 
    else console.log(false);
}

function areSame(obj1, obj2) {
    if (obj1 === address && obj2 === address2)
    console.log(true); 
    else console.log(false);
}

// Assignment 4
let blogPost = {
    title: "Final Quest",
    body: "This book and movie is in five parts. various God's kingdom authors reviewed, summerized and commented briefly on all five sections. This book is a fulfillment of prophecy",
    author: "Rick Joyner",
    views: 300,

    comments: {
        comment1: {
            author: "Dr Noel Woodroffe",
            body: "Part One, The Horde of Hell are MarchinG. It takes grace to fight the bloodiest war in our history without demonizing the enemy with propaganda. Now that is a beautiful thing!"
        },
        comment2: {
            author: "Ron McGatlin",
            body: "Part Two, The Holy Mountain. The reason that we can see spiritually and others cannot, is not because we have entered His realm but because He has entered ours. 1cor. 12:7"
        },
        comment3: {
            author: "Marlon Jameson",
            body: "Part Three, The Return of the Eagles. The Eagles are the hidden prophets who have been kept for this hour. There is River of Revival spirit being awaken in the church."
        },
        comment4: {
            author: "Dr Lemmy Russel",
            body: "Part Four, The White Throne. Time of personal conversation with our Patriachs revealing the present state of events on earth and we as believers must not fail in finishing what the Patriachs started."
        },
        comment5: {
            author: "Anderson Williams",
            body: "Part Five, The Overcomers. Here, Jesus revealed that His church is clothed in shame because she does not have judges."
        },
    },
    isLive: false,
}

// Assignment 5
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");

// Change the difficulty to the value of 7
programming.difficulty = 7;

// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;

// Write the command to add a new key called isFun and a value of true to the programming object
Object.assign(programming, { isFun: true })

// Using a loop, iterate through the languages array and console.log all of the languages.
for (let language of programming.languages) {
    console.log(language);
}

// Using a loop, console.log all of the keys in the programming object.
for (let programme in programming) {
    console.log(programme);
}

// Using a loop, console.log all of the values in the programming object.
for (let val in programming) {
    console.log(programming[val]);
}