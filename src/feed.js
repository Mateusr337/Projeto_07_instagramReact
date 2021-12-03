import Stories from "./stories";
import Posts from "./posts";


export default function Feed(){
    return(
        <div class="esquerda">
          <Stories />
          <Posts />
        </div>
    )
}