import Post from './post';

const dados = [
  {nome: 'meowed', img: 'assets/img/gato-telefone.svg', curtido: 'respondeai', curtidas: '101.523'},
  {nome: 'barked', img: 'assets/img/dog.svg', curtido: 'adorable_animals', curtidas: '99.159'}
];

export default function Posts(){
    return(
        <div class="posts">
          {dados.map(dados => <Post nome={dados.nome} img={dados.img} curtido={dados.curtido} cartidas={dados.curtidas}/>)}
        </div>
    )
}