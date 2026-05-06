const exepress = require ('express');
const msrl2 = require ('mysql2');
const cors = require ('cors')

const app = exepress ();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "",
    database: "loja_carro"
})

db.connect (err => {
    if(err) {
        console.log("Erro ao conecetar", err)
    } else 
    { console.log("Conectado ao Msql")}
});

app.post("/carros", (req, res,) => {
    const carro = req.body;
});

const sql = `
insert into carros  (titulo, preco, 
    descricao, marca, Modelo, kilometragem,
    data_compra, cambio) values (?,?,?,?,?,?,?,?)
`;

const valores = [
    carro.titulo,
    carro.preco,
    carro.drescricao,
    carro.marca,
    carro.Modelo,
    carro.data_compra,
    carro.cambio,
];

db.query(sql, valores, (err, result) =>{
if(err) {
    return res.status(500).json(err);}
    res.json({mensagem: "Carro Salvo"});
} );

app.get("/carros", (req, res) => {
    db.query("select * from carros", (err, result) => {
        if(err) { 
            return res.status(500).json(err);
   }
   res.json(result)
});

});

app.delete('/carros/:id', (req, res) => {

    const id = req.params.id;

    db.query('DELETE FROM carros WHERE id = ?', [id], (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send('Deletado');
        }
    });

});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
