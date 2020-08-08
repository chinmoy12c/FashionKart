searchCategory = () => {
    let searchCategory = document.getElementById("searchInput").value;
    if (searchCategory.length != 0)
        window.location.href = "/search?search=" + searchCategory;
};

window.onload = (e) => {
    let searchBar = document.getElementById("searchInput");
    console.log(searchBar);
    searchBar.addEventListener("keydown", function(event){
        alert("Asd");
        if (event.keyCode == 13) {
            searchCategory();
        }
    });
};