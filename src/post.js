
export default function Post(props){
    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={`assets/img/${props.nome}.svg`} alt="Não foi possivel carregar"/>
                  {props.nome}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={props.img} alt="Não foi possivel carregar"/>
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={`assets/img/${props.curtido}.svg`} alt="Não foi possivel carregar"/>
                  <div class="texto">
                    Curtido por <strong>{props.curtido}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}