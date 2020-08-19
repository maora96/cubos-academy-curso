const fs = require("fs");
const csvParser = require('csv-parser');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const chalk = require("chalk");

const stream = fs.createReadStream("houses.csv");
console.log(chalk.blue(`Arquivo começou a ser processado.`))
let conteudo = [];
stream.pipe(csvParser()).on("data", (data) => {
    conteudo.push({
        id: conteudo.length + 1, 
        city: data['city'].trim(),
        area: Number(data['area']),
        rooms: Number(data['rooms']),
        parkingSpaces: Number(data['parking spaces']),
        floor: Number(data['floor'].replace("-", 0)), 
        animal: Boolean(data['animal']),
        furniture: Boolean(data['furniture']),
        hoa: Number(data['hoa'].replace('Sem info', 0).replace('Incluso', 0) * 100), 
        rentAmount: Number(data['rent amount'] * 100), 
        propertyTax: Number(data['property tax'] * 100),
        fireInsurance: Number(data['fire insurance'] * 100),
        total: Number(data['total'] * 100)
    });
})


stream.on("end", (data) => {
    const csvWriter = createCsvWriter({
        path: 'houses_out.csv',
        header: [
            {id: 'id', title: 'id'},
            {id: 'city', title: 'city'},
            {id: 'area', title: 'area' },
            {id: 'rooms', title: 'rooms'},
            {id: 'parkingSpaces', title: 'parking spaces'},
            {id: 'floor', title: 'floor' },
            {id: 'animal', title: 'animals' },
            {id: 'furniture', title: 'furniture' },
            {id: 'hoa', title: 'hoa' },
            {id: 'rentAmount', title: 'rent amount'},
            {id: 'propertyTax', title: 'property tax'},
            {id: 'fireInsurance', title: 'fire insurance'},
            {id: 'total', title: 'total' }
        ]
    });
    console.log(chalk.red(`O arquivo terminou de ser processado e o arquivo houses_out.csv foi criado`))
    csvWriter.writeRecords(conteudo);
})
