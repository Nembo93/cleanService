// console.log("js funziona");

// Dichiaro la variabile con la prima pagina dinamica da caricare nel body.
var homePage = "pages/wallet.html";
var  currentCoins = 10;


function onLoadWallet()
{
    var currentCoinsElement = document.getElementById("current_coins_id");
    currentCoinsElement.innerHTML = currentCoins;
}

// Carico la prima pagina da visualizzare nel body
function onLoadIndex()
{
    document.getElementById("pages_body").innerHTML = '<object type="text/html" data="' +homePage+ '" width="60%" height="98%" </object>';
}



// Funzione per la navigazione tra le pagine
function changePage(page)
{
    console.log(page);

    document.getElementById("pages_body").innerHTML = '<object type="text/html" data="' +page+ '" width="60%" height="98%" </object>';
}

// LOGICA DI AQUISTO GETTONI
// var  currentCoins = 10;
// variabili per funzione addCoins
// var coinsToBuy = 0;
// var pricePerCoin = 0.50;
// var coinsToBuyValue = 0;








// var currentCoinsElement = document.getElementById("coins_to_buy_id");
// currentCoinsElement.innerHTML = coinsToBuy;

// const addButton = document.getElementById("add_button_id");
// const subButton = document.getElementById("sub_button_id");


// function addCoins()
// {
//     console.log('Funzione +')

//     coinsToBuy = coinsToBuy + 1;
//     coinsToBuyValue = coinsToBuyValue + pricePerCoin;

//     console.log("gettoni da comprare", coinsToBuy);
//     console.log("valore dei gettoni", coinsToBuyValue);

//     currentCoinsElement.innerHTML = coinsToBuy;
// }

// function subCoins()
// {
//     console.log('Funzione -')

//     if(coinsToBuy > 0)
//     {
//         coinsToBuy = coinsToBuy - 1;
//     }

//     if(coinsToBuyValue >= 0.50)
//     {
//         coinsToBuyValue = coinsToBuyValue - pricePerCoin;
//     }   

//     console.log("gettoni da comprare", coinsToBuy);
//     console.log("valore dei gettoni", coinsToBuyValue);

//     currentCoinsElement.innerHTML = coinsToBuy;
// }