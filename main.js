// Selected items
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");



getButton.onclick = function(){
    getRepos();
}

// Get Repos Function

function getRepos(){

    if (theInput.value === "") {
        reposData.innerHTML = "<span>No Information to display!</span>"
    }else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((res) => {
            return res.json();
        })
        .then((repos) => {
            // make results place empty
            reposData.innerHTML = " ";

            // loop on repos
            repos.forEach(repo => {
        
                // Create Main Div
                let mainDiv = document.createElement("div");
                // Create Repo Name Text 
                let repoName = document.createTextNode(repo.name);
                // Append the text to the main Div
                mainDiv.appendChild(repoName);
                // Apend the main div to the Body File
                
                // Add a Url distination to Open it
                let theUrl = document.createElement("a");
                
                urlText = document.createTextNode(`  Visit`);
                
                theUrl.appendChild(urlText);
                
                // theUrl.href = `https://github.com/${theInput.value}/${repoName}` this is wrong!!; // theUrl.href = `https://github.com/${theInput.value}/${repoName.textContent}`;
                theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
                
                theUrl.setAttribute("target", "_blank")
                
                mainDiv.appendChild(theUrl);
                
                // Create Span which contain the Spans
                let spanOfStars = document.createElement("span");
                
                mainDiv.className = "main-div";
                let starsText = document.createTextNode(`${repo.stargazers_count} Star`);
                
                // 
                spanOfStars.appendChild(starsText);
                //
                mainDiv.appendChild(spanOfStars);
                // Append the mainDiv
                reposData.appendChild(mainDiv);
            })

        })
    }
}

