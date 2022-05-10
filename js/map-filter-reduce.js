//TODO: Create a file named map-filter-reduce.js in your
// js directory and copy the users data below into it.
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//TODO: Use .filter to create an array of user objects where each
// user object has at least 3 languages in the languages array.
const threeLangs = users.filter(user => (user.languages.length >= 3));
console.log(threeLangs);


//TODO: Use .map to create an array of strings where each element is a
// user's email address
const emailStrings = users.map(user => (user.email));
console.log(emailStrings);


//TODO: Use .reduce to get the total years of experience from the list of
// users. Once you get the total of years you can use the result to calculate the average.
const totalExp = users.reduce((total, user) => {
                    return total += user.yearsOfExperience;
}, 0);
console.log('totalExp: ', totalExp);
let avgExp = totalExp / users.length;
console.log('avgExp: ', avgExp);


//TODO: Use .reduce to get the longest email from the list of users.
const longEmail = users.reduce((a, b) =>
    (b.email.length > a.email.length) ? b : a,
);
console.log(longEmail.email);


//TODO: Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

const nameStr = users.reduce((a, b) => {
    return a += b.name;
}, "");
console.log(nameStr);

//TODO: Use .reduce to get the unique list of languages from the list of users.
const allLangs = users.reduce((a, b) => {
    for (let eachLang of b.languages) {
        a.push(eachLang);
    }
        return a.filter((each, index) => (a.indexOf(each) === index));
}, []);

console.log(allLangs);