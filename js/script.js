const url = "https://jonathanminds.com/flower-power/wp-json/wc/store/products";

const resultsContainer = document.querySelector(".results");

async function resultFlowers() {

    try {
        const response = await fetch(url);
        const getFlower = await response.json();
        resultsContainer.innerHTML = "";
        createHTML(getFlower);

        document.querySelector(".sorting").addEventListener("click", function (event) {
            if (event.target.value.includes("name")) {
                getFlower.sort(
                    function (a, b) {
                        if (a.name > b.name ) {
                            return 1;
                        }
                        else if (b.name < a.name) {
                            return -1;
                        }
                        else {
                            return 0;
                        }
                    }
                );
            }
            if (event.target.value.includes("price")) {
                getFlower.sort(
                    function (a, b) {
                        if (a.prices.price> b.prices.price ) {
                            return 1;
                        }
                        else if (b.prices.price < a.prices.price) {
                            return -1;
                        }
                        else {
                            return 0;
                        }
                    }
                );
        }
            if ((event.target.value.includes("descending")))
                getFlower.reverse();
                createHTML(getFlower);
            })
        } 
        catch(error) {
            console.log(error);
            resultsContainer.innerHTML = message("error", error);
        }
    }    
    

resultFlowers();

function createHTML(bouquet) {

    resultsContainer.innerHTML = "";
    for (let i = 0; i < bouquet.length; i++) {
            
        resultsContainer.innerHTML += `<a href="details.html?id=${bouquet[i].id}" class="card">
                                        <div class="details">
                                            <div class="flowerimage" style="background-image: url('${bouquet[i].images[0].src}')" atl="Flowers image"></div>      
                                            <h2>${bouquet[i].name}</h2>
                                            <h4 class="name" > ${bouquet[i].prices.currency_symbol}${bouquet[i].prices.price.substring(0, 2)}${bouquet[i].prices.currency_decimal_separator}${bouquet[i].prices.price.substring(2)}</h4>
                                            <h4 class="name" > ${bouquet[i].short_description} </h4>
                                            <h5 class="name"> Description :${bouquet[i].description}</h5>                                                                                                                                                        
                                        </div>
                                        </a>`;
   

    }
}

