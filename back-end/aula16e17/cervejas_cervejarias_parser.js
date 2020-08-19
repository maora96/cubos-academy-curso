const fs = require("fs");
const csvParser = require('csv-parser');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const cervejarias = fs.createReadStream("breweries.csv");
/*
let cervejariasConteudo = [];
cervejarias.pipe(csvParser()).on("data", (data) => {
    cervejariasConteudo.push({
        id: Number(data['id'].trim()), 
        name: data['name'].trim().replace(/'/g, "").replace(/`/g, ""),
        city: data['city'].trim().replace(/'/g, "").replace(/`/g, ""),
        state: data['state'].trim()
    }); 
})


cervejarias.on("end", (data) => {
    const csvWriter = createCsvWriter({
        path: 'cervejas_saida.csv',
        header: [
            {id: 'id', title: 'id'},
            {id: 'name', title: 'name'},
            {id: 'city', title: 'city' },
            {id: 'state', title: 'state'}
        ]
    });
    csvWriter.writeRecords(cervejariasConteudo);
})*/


const cervejas = fs.createReadStream("beers.csv");

let cervejasConteudo = [];
cervejas.pipe(csvParser()).on("data", (data) => {
    cervejasConteudo.push({
        id: Number(data['id']),
        abv: Number(data['abv']),
        ibu: Number(data['ibu'].replace("", 0)),
        national_id: data['national_id'],
        name: data['name'].replace(/'/g, "").replace(/`/g, "").replace(/"/g, ""),
        style: data['style'].replace(/'/g, "").replace(/`/g, "").replace(/"/g, ""),
        brewery_id: Number(data['brewery_id']),
        ounces: Number(data['ounces'])
    }); 
})


cervejas.on("end", (data) => {
    const csvWriter = createCsvWriter({
        path: 'cervejas_saida.csv',
        header: [
            {id: 'id', title: 'id'},
            {id: 'abv', title: 'abv'},
            {id: 'ibu', title: 'ibu'},
            {id: 'national_id', title: 'national_id'},
            {id: 'name', title: 'name'},
            {id: 'style', title: 'style' },
            {id: 'brewery_id', title: 'brewery_id'},
            {id: 'ounces', title: 'ounces'},
        ]
    });
    csvWriter.writeRecords(cervejasConteudo);
})