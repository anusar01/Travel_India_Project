let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};






// -------------------------------------------to top scroller------------------------------------

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})






// --------------------------------------------product main page js----------------------------------

let tabs = document.querySelectorAll('.tabs__toggle'),
    contents = document.querySelectorAll('.tabs__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const searchQuery = document.getElementById("search-box").value;
        
        // Simulate server-side search with a delay
        setTimeout(function() {
            // Simulated search results
            const searchResults = [
                { title: "Result 1", url: "https://example.com/result1" },
                { title: "Result 2", url: "https://example.com/result2" },
                { title: "Result 3", url: "https://example.com/result3" }
            ];
            
            displaySearchResults(searchResults);
        }, 1000); // Simulated delay of 1 second (1000 milliseconds)
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const searchQuery = document.getElementById("search-box").value;
        
        // Simulate server-side search with a delay
        setTimeout(function() {
            // Simulated search results
            const searchResults = [
                { title: "Result 1", url: "https://example.com/result1" },
                { title: "Result 2", url: "https://example.com/result2" },
                { title: "Result 3", url: "https://example.com/result3" }
            ];
            
            displaySearchResults(searchResults);
        }, 1000); // Simulated delay of 1 second (1000 milliseconds)
    });
});


//Search Function
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = ""; // Clear previous results
    
    if (results.length === 0) {
        searchResultsContainer.innerHTML = "<p>No results found</p>";
        return;
    }
    
    const resultList = document.createElement("ul");
    results.forEach(function(result) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = result.url;
        link.textContent = result.title;
        listItem.appendChild(link);
        resultList.appendChild(listItem);
    });
    
    searchResultsContainer.appendChild(resultList);
}

