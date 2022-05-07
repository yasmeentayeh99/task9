import "./style.css";
import ShopingCard from "../Shoping-Card";
import Items_Box from "../Items-Box";


function ShopingBox() {
    return (
        <>
            <ShopingCard title="Apple iPhone 11 Pro 256GB Memory"
                         salary="$499.99"
            />
            <ShopingCard title="Apple Airpods Wireless Bluetooth Headset"
                         salary="$89.99"
            />
            <ShopingCard title="Sony PlayStation 4 Pro White Version"
                         salary="$399.99"
            />
            <Items_Box/>

        </>
    )
}

export default ShopingBox