const { request } = require('express');

const express = require('express');

const { v4: uuidv4 } =  require("uuid")

const app = express();

app.use(express.json());

const customers = [];


app.post("/account",(resquest, response) => {
    const {cpf, name} = resquest.body;
    
    const customerAlreadExists = customers.some( 
    (customer) => customer.cpf === cpf

);

if (customerAlreadExists) {
    return response.status(400).json({error: "Custumer alread exists!"});

}
  
    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: [],

    });

    return response.status(201).send();

});


app.listen(3333);


app.get("/statement",(request,response) => {
    const { cpf } = request.headers;

    const customer = customers.find((customer) => customer.cpf === cpf);
    
    if (!customer) {
        return response.status(400).json({error: "Customer not found"});


    }
    
    return response.json(customer.statement);

});
