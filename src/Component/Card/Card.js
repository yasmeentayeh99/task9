import './Card.css';

function Card(props){
    const imgs = props.img ;
    const names = props.name ;
    return(
        <Card>
            <img src={imgs}/>
            <h6>{names}</h6>
        </Card>
        
    )
}

export default Card;