
const express = require('express');

const app = express();

app.use(express.json());

app.get("/courses",(resquest ,response) => {
    const query = resquest.query
    console.log(query)
    return response.json(["Curso 1", "Curso 2","Curso 3"]);

});

app.post("/courses",(resquest,response) => {
    const body = resquest.body;
    console.log(body);
    return response.json(["Curso 1", "Curso 2","Curso 3", "Curso 4"]);

});

app.put("/courses/:id",(resquest,response) => {
    const  { id } = resquest.params;
    console.log(id)
    return response.json(["Curso 6", "Curso 2","Curso 3", "Curso 4"]);

});

app.patch("/courses/:id",(resquest,response) => {
    return response.json(["Curso 6", "Curso 7","Curso 3", "Curso 4"]);
});

app.delete("/courses/:id",(resquest,response) =>{
    return response.json(["Curso 6", "Curso 7", "Curso 4"]);


});



app.listen(3333);
