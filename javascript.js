
let object = {
    countries:{}
}

for (let key in data){
    let countryData = {
        countryName: data[key].name.ru, code: data[key].prefix
    }
    object.countries[key]= countryData;
}
console.log(object)

