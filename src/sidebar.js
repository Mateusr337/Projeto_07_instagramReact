let usuarios =[
  {nome: 'bad.vibes.memes'},
  {nome: 'chibirdart'},
  {nome: 'razoesparaacreditar'},
  {nome: 'adorable_animals'},
  {nome: 'smallcutecats'}
];

export default function Sidebar(){
    return(
        <div class="sidebar">
          <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt="Não foi possivel carregar"/>
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

          {usuarios.map(dados => <Sugestão nome={dados.nome} />)}
              
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}

function Sugestão(props){
  return(
    <div class="sugestao">
      <div class="usuario">
        <img src={`assets/img/${props.nome}.svg`} alt="Não foi possivel carregar"/>
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}