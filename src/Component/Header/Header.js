import List from "../List/List";
import Search from "../Search/Search";
import "./Header.css"

function Header(){
    return(
        <div>
            <h1 className="logo"><a href="#"> ProShop</a></h1>
        <Search/>
        <List/>
        </div>
    )

}
export default Header ;
