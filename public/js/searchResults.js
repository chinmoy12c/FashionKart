window.onload = (e) => {
    const searchField = document.getElementById("searchField").innerHTML;
    const myData = document.getElementById("tempStore").innerHTML;
    let parsedData = JSON.parse(myData);
    parsedData = Array(parsedData);
    parsedData = parsedData[0];
    let container = document.createElement("div");

    container.innerHTML += getSite(parsedData, searchField);

    document.getElementById("contentHolder").appendChild(container);
};

const getSite = (parsedData, searchField) => {
    
    let contentHolder = "";

    contentHolder += '<div>';
    contentHolder += '<h2 class="siteheader"><img src="/icons/leaves.jpg">' + searchField + '<img src="/icons/leaves1.jpg"></h2>';
    contentHolder += '<div class="gridView">';

    for (let x=0; x < parsedData.length; x++) {
        contentHolder += `
        <div class="card">
            <img class="thumbnail-img" src="http://c56c60ea9433.ngrok.io/` + searchField + "/" + parsedData[x] + `">
        </div>
        `;
    }

    return contentHolder;
};