//Criando um web api com Express JS
const express = require('express') //busca pela dependencia do pacote 
const app = express() //usando a função que é exportada pelo modulo e guardo a execução na variavel
const port = 3000

//aqui eu crio uma funcao middleware mas ela ainda n esta inserida no pipeline de execução
const logMiddleware = function(req, res, next){
    console.log("API recebeu alguma informação");
    next(); //preciso executar isso senao a requisição n avança no pipeline de execução
}

//aqui eu insiro minha função middleware no pipeline de execução
//cada função de middleware será inserida assim no pipeline .. um 'use' por função
app.use(logMiddleware);

//usando um middleware que ja existe e que existe no modulo express
//esse míddleware em questão se aplica à requisições no "/" e assim sobrescrevem 
//o retorno dele retornando o que está e seu parâmetro, no caso "./static". 
//E como nesse diretório existe um arquivo "index.html", o browser já o 
//interpreta como arquivo de entrada.
app.use(express.static("./site"));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/pt', (req, res) => {
    res.send('Olá Mundo!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
