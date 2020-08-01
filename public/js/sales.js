/* App frontend script */
window.onload = (e) => {
    const myData = document.getElementById("tempStore").innerHTML;
    const parsedData = JSON.parse(myData);

    let container = document.createElement("div");

    container.innerHTML += getSales(parsedData);

    document.getElementById("contentHolder").appendChild(container);
};

const getSales = (parsedData) => {
    
    let contentHolder = "";

    contentHolder += '<div id="sectionHolder">';
    contentHolder += '<h2 class="siteheader"><img src="/icons/leaves.jpg">Sales Recommendation<img src="/icons/leaves1.jpg"></h2>';
    contentHolder += '<div class="scrollmenu">';

    for (let section in parsedData) {
        console.log("src:"+section);

        contentHolder += `
        <div class="card">
            <img class="thumbnail-img" src="`+ section +`">
            <p class="post-head">
            `+ parsedData[section] + `
            </p>
        </div>
        `;
    }

    contentHolder += '</div></div><br><br><br>';
    
    return contentHolder;
};