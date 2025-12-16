// console.log("js funziona");

// Dichiaro la variabile con la prima pagina dinamica da caricare nel body.
var homePage        = "pages/sloves.html";
// var currentCoins    = 10;
// var coinsToBuy      = 0;

// Carico la prima pagina da visualizzare nel body
function onLoadIndex()
{
    document.getElementById("pages_body").innerHTML = '<object type="text/html" data="' +homePage+ '" width="100%" height="100%" </object>';
}

function onLoadWallet()
{
    var currentCoins    = 10;
    var coinsToBuy      = 0;
    var pricePerCoin    = 0.50;
    var coinsToBuyValue = 0;

    var currentCoinsElement             = document.getElementById("current_coins_id");
    currentCoinsElement.innerHTML       = currentCoins;

    var coinsToBuyElement               = document.getElementById("coins_to_buy_id");
    coinsToBuyElement.innerHTML         = coinsToBuy;

    var coinsToBuyValueElement          = document.getElementById("coins_to_buy_value_id");
    coinsToBuyValueElement.innerHTML    = coinsToBuyValue.toFixed(2) + " €";

    const addButton = document.getElementById("add_button_id");
    const subButton = document.getElementById("sub_button_id");
    const buyButton = document.getElementById("buy_coins_button_id");

    addButton.addEventListener('click', addCoins);
    subButton.addEventListener('click', subCoins);
    buyButton.addEventListener('click', buyCoins);

    function addCoins()
    {
        coinsToBuy      = coinsToBuy + 1;
        coinsToBuyValue = coinsToBuyValue + pricePerCoin;

        coinsToBuyElement.innerHTML         = coinsToBuy;
        coinsToBuyValueElement.innerHTML    = coinsToBuyValue.toFixed(2) + " €";
    }

    function subCoins()
    {
        if(coinsToBuy > 0)
        {
            coinsToBuy = coinsToBuy - 1;
        }

        if(coinsToBuyValue >= 0.50)
        {
            coinsToBuyValue = coinsToBuyValue - pricePerCoin;
        }   

        coinsToBuyElement.innerHTML         = coinsToBuy;
        coinsToBuyValueElement.innerHTML    = coinsToBuyValue.toFixed(2) + " €";
    }


    function buyCoins()
    {

        console.log("acquista", currentCoins, coinsToBuy)
        // All'acquisto dei gettoni:
        // - aggiorno il valore dei gettoni
        currentCoins = currentCoins + coinsToBuy;

        // stampo il risultato
        console.log("acquistati:", coinsToBuy, "gettoni totali:", currentCoins)

        currentCoinsElement.innerHTML       = currentCoins;

        // - resetto i valori dei gettoni da incrementare o diminuire per il prossimo acquisto
        coinsToBuy      = 0;
        coinsToBuyValue = 0;

        coinsToBuyElement.innerHTML         = coinsToBuy;
        coinsToBuyValueElement.innerHTML    = coinsToBuyValue.toFixed(2) + " €";
    }
}


// Funzione per la navigazione tra le pagine
function changePage(page)
{
    console.log(page);

    document.getElementById("pages_body").innerHTML = '<object type="text/html" data="' +page+ '" width="100%" height="100%"></object>';
}

function setSloveDetail(page, title)
{
    console.log(page);
    console.log(title)

    document.getElementById("slove_detail_id").innerHTML = '<object type="text/html" data="' +page+ '?title='+title+'" width="100%" height="100%"></object>';
}