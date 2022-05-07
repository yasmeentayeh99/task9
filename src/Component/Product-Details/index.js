import './style.css';
import Button from "../Button/Button";

function Product_Details(){
    return(
        <>
        <div className= "card-wrapper">
        <div className = "card">
            <div className = "product-imgs">
                        {/*<img src = "" alt = "shoe image">*/}
                    </div>

            <!-- card right -->
            <div className= "product-content">
                <h2 className = "product-title">Apple iPhone 11 Pro 256GB Memory</h2>
                <div className= "product-salary">
                    <span>$499.99</span>
                </div>

                <div className = "product-detail">
                    <ul>
                        <li>Color: <span>Black</span></li>
                        <li>Size: <span>256GB</span></li>
                    </ul>
                    <p>Et placeat odio voluptas saepe ullam enim sed.
                        Sint rem sint. Ex enim aperiam consequatur. Est temporibus ab. Pariatur
                        aut ut temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur non sunt et neque.
                        Aut dolorem repellat quo architecto sint minima doloremque. At quae laborum incidunt vel voluptas dolor
                        similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil
                        nemo animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus qui. Qui mollitia iusto.
                        Perspiciatis reiciendis laborum consequuntur sint porro omnis et facere. Voluptatem vitae quo. Similique
                        atque cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias quas non ab veritatis et.
                        Sed et qui consequatur aut. Eum consequuntur necessitatibus veritatis voluptatem qui velit repellat
                        numquam tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est expedita aspernatur
                        non repellendus nihil perferendis. Et deserunt doloremque esse. Iusto veniam odio consequatur sint illum.
                        Quis dolor doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae
                        magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati temporibus voluptatem quo eaque.
                        Voluptas impedit veritatis dolore assumenda. Aut doloribus unde repellat pariatur consequatur.
                        Blanditiis voluptas aut tempora facilis fugi. </p>
                </div>
                <Button/>
            </div>
        </div>
        </div>
        </>
    )
}
export default Product_Details ;