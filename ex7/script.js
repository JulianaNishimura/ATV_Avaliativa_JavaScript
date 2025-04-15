const filmes = [];

function exibir(lista) {
  let saida = document.getElementById('resultado');
  if (saida) {
    saida.innerHTML = '';

    lista.forEach((filme) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <strong>${filme.titulo}</strong><br>
        Classificação: ${filme.classificacao}<br>
        Gênero: ${filme.genero}<br>
        Ano: ${filme.ano}<br>
      `;
      saida.appendChild(div);
    });

  }
}

function filtrarFilmes() {
  let textoTitulo = document.getElementById('filtroTitulo').value;
  let textoAno = parseInt(document.getElementById('filtroAno').value);
  let textoGenero = document.getElementById('filtroGenero').value;

  const filmesFiltrados = filmes.filter((filme) => {
    const tituloCombina = textoTitulo === '' || filme.titulo.includes(textoTitulo);
    const anoCombina = isNaN(textoAno) || filme.ano === textoAno;
    const generoCombina = textoGenero === '' || filme.genero.includes(textoGenero);
    return tituloCombina && anoCombina && generoCombina;
  });

  exibir(filmesFiltrados);
}

function excluirFiltrados(){
    let textoTitulo = document.getElementById('filtroTitulo').value;
    let textoAno = parseInt(document.getElementById('filtroAno').value);
    let textoGenero = document.getElementById('filtroGenero').value;

    const filmesFiltrados = filmes.filter((filme) => {
        const tituloCombina = textoTitulo === '' || filme.titulo.includes(textoTitulo);
        const anoCombina = isNaN(textoAno) || filme.ano === textoAno;
        const generoCombina = textoGenero === '' || filme.genero.includes(textoGenero);
        return tituloCombina && anoCombina && generoCombina;
    });
    
    filmes.forEach((filme) => {
        filmesFiltrados.forEach((filmefiltrado) => {
            if()
            let indice = filmes.indexOf(filmefiltrado);
            filmes.splice(1,indice)
        })
    })

    exibir(filmes)
}

function cadastrarFilmes() {
  let titulo = document.getElementById('titulo').value.toLowerCase();
  let ano = parseInt(document.getElementById('ano').value);
  let genero = document.getElementById('genero').value;
  let classificacao = parseInt(document.getElementById('classificacao').value);
  let existe = false

  if (titulo === '' || isNaN(ano) || isNaN(classificacao)) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  const filme = { titulo, ano, genero, classificacao };
  filmes.forEach((filmeExistente) => {
    if(filme.titulo === filmeExistente.titulo && filme.genero === filmeExistente.genero && filme.classificacao === filmeExistente.classificacao && filme.ano === filmeExistente.ano){
        alert("O filme já existe.")
        existe = true;
    }
  })

  if(!existe){
    filmes.push(filme);
  }

  document.getElementById('titulo').value = '';
  document.getElementById('ano').value = '';
  document.getElementById('classificacao').value = '';
}

function configurarEventos() {
  document.getElementById('cadastrar').addEventListener('click', cadastrarFilmes);
  document.getElementById('filtrar').addEventListener('click', filtrarFilmes);
  document.getElementById('todosFilmes').addEventListener('click', () => exibir(filmes));
  document.getElementById('excluirFiltrado').addEventListener('click', excluirFiltrados);
}

document.addEventListener('DOMContentLoaded', configurarEventos);