/* App frontend script */
window.onload = (e) => {
    const myData = document.getElementById("tempStore").innerHTML;
    const parsedData = JSON.parse(myData);

    let container = document.createElement("div");

    for (let site in parsedData) {
        container.innerHTML += getSite(parsedData, site);
    }

    document.getElementById("contentHolder").appendChild(container);
};

const getSite = (parsedData, site) => {
    const currentSite = parsedData[site];
    
    let contentHolder = "";

    contentHolder += '<div id="sectionHolder'+ currentSite.siteId +'">';
    contentHolder += '<h2 class="siteheader"><img src="/icons/leaves.jpg">'+ currentSite.siteId +'<img src="/icons/leaves1.jpg"></h2>';
    contentHolder += '<div class="scrollmenu">';

    for (let section in currentSite.sections) {

        let subsectionData = JSON.stringify(currentSite.sections[section]);
        contentHolder += `
        <div class="card" onclick='showSubsection("subsectionHolder`+ currentSite.siteId +`", `+ subsectionData +`, "`+ section +`")'>
            <img class="thumbnail-img" src="`+ currentSite.sections[section].sectionImageLink +`">
            <img class="img-tag" id="star`+ section +`" onclick="flipIcon('`+ section +`')" src="icons/favourite.png">
            <a href="`+ currentSite.sections[section].sectionRedirect +`" target="_blank" ><img class="img-red" src="icons/redirect.png"></a>
        </div>
        `;
    }

    contentHolder += '</div><div id="subsectionHolder'+ currentSite.siteId +'"></div></div><br><br><br>';
    
    return contentHolder;
};

const showSubsection = (subsectionId, subsectionData, section) => {

    document.getElementById(subsectionId).innerHTML = "";
    let container = document.createElement("div");
    let contentHolder = "";

    contentHolder += '<div class="subsectionContainer" id="subSectionHolder">';
    contentHolder += '<h2 class="siteheader">'+ section +'</h2>';
    contentHolder += '<div class="scrollmenu">';

    for (let subsection in subsectionData.subsections) {

        contentHolder += `
        <div class="card">
            <img class="thumbnail-img" src="`+ subsectionData.subsections[subsection] +`">
            <p class="post-head">
            </p>
        </div>
        `;
    }

    contentHolder += '</div></div>';
    container.innerHTML = contentHolder;

    document.getElementById(subsectionId).appendChild(container);
};

const flipIcon = (icId) => {
    let icon = document.getElementById('star' + icId);
    let link = icon.src;
    if (link.includes("star"))
        icon.src = 'icons/favourite.png';
    else
        icon.src = 'icons/star.png';
}