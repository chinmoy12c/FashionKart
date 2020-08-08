searchCategory = () => {
    let searchCategory = document.getElementById("searchInput").value;
    if (searchCategory.length != 0)
        window.location.href = "/search?search=" + searchCategory;
};

setTimeout(() => {
    let searchBar = document.getElementById("searchInput");
    let searchSuggest = document.getElementById("searchSuggest");
    let searchSuggestContainer = document.createElement("div");

    let searchKeys = ["Tshirts", "Pants", "Jeans", "Blazzers"];

    searchBar.addEventListener("keyup", (event) => {
        searchSuggest.innerHTML = "";
        searchSuggestContainer.innerHTML = "";
        if (searchSuggestContainer.innerHTML == "")
            searchSuggest.style.visibility = "hidden";
        let textValue = searchBar.value;
        if (textValue.length == 0)
            return;

        for (let keyword in searchKeys) {
            if (searchKeys[keyword].toLowerCase().indexOf(textValue.toLowerCase()) >= 0) {
                searchSuggestContainer.innerHTML += `<div class="searchItem">` + searchKeys[keyword] + `</div>`;
            }
        }

        if (searchSuggestContainer.innerHTML != "")
            searchSuggest.style.visibility = "visible";

        searchSuggest.appendChild(searchSuggestContainer);
    });
}, 1000);
