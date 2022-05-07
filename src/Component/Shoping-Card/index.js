import "./style.css"

function ShopingCard(props){
    const product_img = props.img ;
    const title = props.title ;
    const salary = props.salary ;

    return(
        <ShopingCard>
            <img src={product_img}/>
            <h3>{title}</h3>
            <span>{salary}</span>
        </ShopingCard>
    )
}
export default ShopingCard