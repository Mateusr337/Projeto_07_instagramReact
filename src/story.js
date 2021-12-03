export default function Story(props){
    return(
            <div class="story">
              <div class="imagem">
                <img src={props.img} alt="Não foi possivel carregar"/>
              </div>
              <div class="usuario">
                {props.usuario}
              </div>
            </div>
    )
}