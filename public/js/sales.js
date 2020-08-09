/* App frontend script */
dynamicallyLoadScript('https://canvasjs.com/assets/script/canvasjs.min.js');

window.onload = (e) => {
    const myData = document.getElementById("tempStore").innerHTML;
    const parsedData = JSON.parse(myData);

    let container = document.createElement("div");

    container.innerHTML += getSales(parsedData);

    document.getElementById("contentHolder").appendChild(container);

    setTimeout(setCharts, 700);
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
    contentHolder += '<h2 class="siteheader"><img src="/icons/leaves.jpg">TrendStats (Under Construction)<img src="/icons/leaves1.jpg"></h2>';
    contentHolder += '<div class="statsHolder">';

    let ind = 0;
    for (let section in parsedData) {
        contentHolder += `
        <div class="row">
            <div class="cardGrid col-md-5 col-sm-5">
                <img class="thumbnail-img-grid" src="`+ section +`">
            </div>
            <div class="col-md-5 col-sm-5">
                <div class=row>
                    <div id="chartContainer` + ind + `" class="statsGraph col-md-12 col-sm-12"></div>
                    <div id="starRatingHolder` + ind + `" class="col-sm-12 col-md-12">
                    </div>
                </div>
            </div>
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
                text: "Review Stats"
            },
            axisX:{
                title: "Number of days",
            },
            axisY:{
                title: "User Interaction",
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

    ind = 0;
    while (document.getElementById("starRatingHolder" + ind)) {
        let starHolder = document.getElementById("starRatingHolder" + ind);
        for (let x = 1; x <= Math.round(Math.random() * 2 + 3); x++) {
            let star = document.createElement("img");
            star.src = "/icons/star.png";
            star.className = "statStar";
            starHolder.appendChild(star);
        }

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