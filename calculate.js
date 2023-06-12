function calculateProfit() {
    var sell_tax_free = parseFloat(document.getElementById('sell_tax_free').value);
    var buy = parseFloat(document.getElementById('buy').value);
    var tax = parseFloat(document.getElementById('tax').value);
    var result = (1 + 0.01*tax)*sell_tax_free - buy;
    document.getElementById('result').textContent = 'Profit: ' + result.toFixed(2);
}

function plotProfits() {
    var buy = parseFloat(document.getElementById('buy').value);
    var tax = parseFloat(document.getElementById('tax').value);
    var sell_tax_free_values = Array.from({length: buy}, (_, i) => buy + i);
    var profit_values = sell_tax_free_values.map(sell_tax_free => (1 + 0.01*tax)*sell_tax_free - buy);


    var trace1 = {
        x: sell_tax_free_values,
        y: profit_values,
        mode: 'lines',
        name: 'Profit',
        line: {
            color: 'rgb(55, 128, 191)',
            width: 2
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Profit vs Sell Tax Free',
        xaxis: {
            title: 'Sell Tax Free'
        },
        yaxis: {
            title: 'Profit'
        }
    };

    Plotly.newPlot('plot', data, layout);
}

