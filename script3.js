let cars = [{brand:'Toyota',model:'Camry','year':1999,'price':20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];

let sum = document.querySelector("sum");
let items = document.querySelector("items");
let carsElement = document.querySelector("cars");
for(let i=0;i<cars.length;i++){
    carsElement.innerHTML += '  <div class="card">\
    <div class="basket">\
    <img width=5px height=5px src="http://simpleicon.com/wp-content/uploads/basket.png" >\
    </div>\
    < img width=100px height=100px src="cars[i]["image_url"]">\
    <h4>'cars[i]["brand"]+ ' ' + cars[i]["model"]'</h4>\
    </div>'
}

let baskets = document.querySelectorAlls("basket");
for(let j=0;j<baskets.length;j++){
    baskets[j].addEventListener("click",function(){
        if(this.classList.contains("insideBasket")){
            items.innerHTML = parseInt(items.innerHTML) - 1;
            this.className= "basket";
            this.children[0].setAttribute("src","http://simpleicon.com/wp-content/uploads/basket.png"); 
            sum.innerHTML = parseInt(sum.innerHTML) - parseInt(cars[j]["price"]);    
        }

        else{
            items.innerHTML = parseInt(items.innerHTML) + 1;
            this.className= "basket insideBasket";
            this.children[0].setAttribute("src","http://simpleicon.com/wp-content/uploads/money-4.png"); 
            sum.innerHTML = parseInt(sum.innerHTML) + parseInt(cars[j]["price"]);    
        }    
    });
}
