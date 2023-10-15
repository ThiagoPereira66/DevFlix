import { getImages } from "../../utils/get-images"
import { Container } from "./style"

function Cards ({item}){
    return (
        <Container>

            <img src={getImages(item.poster_path || item.profile_path)}/>
            <h3>{item.title || item.name}</h3>
            
        </Container>
    )
}

export default Cards