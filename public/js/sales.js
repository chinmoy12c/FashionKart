/* App frontend script */
dynamicallyLoadScript('https://canvasjs.com/assets/script/canvasjs.min.js');

window.onload = (e) => {
    const myData = document.getElementById("tempStore").innerHTML;
    const parsedData = JSON.parse(myData);

    let container = document.createElement("div");

    container.innerHTML += getSales(parsedData);

    document.getElementById("contentHolder").appendChild(container);

    setTimeout(setCharts, 1000);
    // setCharts();
};

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.src = url;

    document.head.appendChild(script);
}

const getSales = (parsedData) => {
    
    let contentHolder = "";

    contentHolder += '<div id="sectionHolder">';
    contentHolder += '<h2 class="siteheader"><img src="/icons/leaves.jpg">Sales Recommendation<img src="/icons/leaves1.jpg"></h2>';
    contentHolder += '<div class="statsHolder">';

    let ind = 0;
    for (let section in parsedData) {
        contentHolder += `
        <div class="row">
            <div class="cardGrid col-md-5 col-sm-5">
                <img class="thumbnail-img-grid" src="`+ section +`">
            </div>
            <div id="chartContainer` + ind + `" class="statsGraph col-md-5 col-sm-5"></div>
        </div>
        `;
        ind++;
    }

    contentHolder += '</div></div><br><br><br>';
    
    return contentHolder;
};

const setCharts = () => {
    let ind = 0;
    while (document.getElementById("chartContainer" + ind)) {
        let chart = new CanvasJS.Chart("chartContainer" + ind, {
            animationEnabled: true,
            theme: "light2",
            title:{
                text: "Insight Stats"
            },
            data: [{        
                type: "line",
                  indexLabelFontSize: 16,
                dataPoints: getStats()
            }]
        });
        chart.render();
        ind++;
    }    
};

getStats = () => {
    let stats = [];

    for (let x = 0, clicks=0; x < 15; x++) {
        stats[x] = {y : clicks};
        clicks += Math.random() * 20;
    }

    return stats;
};