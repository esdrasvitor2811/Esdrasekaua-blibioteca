class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }
}

class Biblioteca {
    constructor() {
        this.biblioteca = JSON.parse(localStorage.getItem('biblioteca')) || []; // Carrega livros do localStorage
    }

    adicionarLivro(event) {
        event.preventDefault(); // Previne o envio do formulário

        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const anoPublicacao = document.getElementById('ano').value;
        const genero = document.getElementById('genero').value;

        const livro = new Livro(titulo, autor, anoPublicacao, genero); // Cria um novo livro
        this.biblioteca.push(livro); // Adiciona o livro ao array

        localStorage.setItem('biblioteca', JSON.stringify(this.biblioteca)); // Salva no localStorage

        alert(`O livro "${titulo}" foi adicionado ao acervo.`);
        document.getElementById('formulario').reset();
    }

    listarLivros() {
        const acervoDiv = document.getElementById('acervo');
        acervoDiv.innerHTML = ''; // Limpa a área antes de exibir

        if (this.biblioteca.length === 0) {
            acervoDiv.innerHTML = '<p class="acervo-vazio">O nosso acervo está vazio.</p>';
        } else {
            this.biblioteca.forEach(livro => {
                const livroDiv = document.createElement('div');
                livroDiv.className = 'livro';
                livroDiv.innerHTML = `
                    <strong>Título:</strong> ${livro.titulo} <br>
                    <strong>Autor:</strong> ${livro.autor} <br>
                    <strong>Ano:</strong> ${livro.anoPublicacao} <br>
                    <strong>Gênero:</strong> ${livro.genero}
                    <hr>
                `;
                acervoDiv.appendChild(livroDiv);
            });
        }
    }
}

// Instancia a classe Biblioteca
const biblioteca = new Biblioteca();

// Funções que podem ser chamadas a partir do HTML
function adicionarLivro(event) {
    biblioteca.adicionarLivro(event);
}

function listarLivros() {
    biblioteca.listarLivros();
}
