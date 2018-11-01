let el = document.querySelector('#countries');
let qala = document.querySelector('#cities')

let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};
 
 for (let i = 0;i<countries.length;i++){
    el.innerHTML+=("<option>"+countries[i]+"</option>")
}
function Ozgertu() {
    var kerek = el.options[el.selectedIndex].text;
    while (qala.options.length) {
        qala.remove(0);
    }
    var city = cities_by_country[kerek];
    
    for (var j = 0; j < city.length; j++) {
        qala.innerHTML+=("<option>"+cities_by_country[kerek][j]+"</option>")
        
    }
}