
async function quantidadeUsuariosPorRede() {
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
const res = await fetch (url)
const dados = await res.json()
const nomeDasRedes = Object.keys(dados);

const data = [
    {
        x: nomeDasRedes,
        y: quantidadeDeUsuarios,
        type: 'bar'
        marker: {
            color: getCSS('--primary-color')
        }
    }
]

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Ploty.newPlot(grafico,data)

}

quantidadeUsuariosPorRede();
