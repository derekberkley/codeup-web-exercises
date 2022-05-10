
// TODO: Create a file named promises.js inside of your js directory
// and link it to an HTML file of your choice.

// TODO: Generate a Personal Access Token for the GitHub API.
//  We will use this so that we don't get rate limited when talking to
//  the GitHub API. You can add the token to your requests like this:
//  fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

// TODO: Create a function that accepts a GitHub username, and returns a promise
//  that resolves returning just the date of the last commit that user made.
//  Reference the github api documentation to achieve this.





    const user = prompt("What is your github username?");

    fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': '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'}})
        .then(response => response.json())
        .then(jsonData => console.log("response(jsonData): ", jsonData))
        // .then(jsonData)
        .catch(error => console.error("error: ", error));


