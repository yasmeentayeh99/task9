import './List.css';
import {  AiOutlineUser } from "react-icons/ai";
import {  HiShoppingCart } from "react-icons/hi";
import {  RiFileList2Line } from "react-icons/ri";


function List(){
    return(
        <ul>
            <li><a href='#'> <AiOutlineUser/> </a></li>
            <li><a href='#'> <RiFileList2Line/> </a></li>
            <li><a href='#'> <HiShoppingCart/> </a></li>
        </ul>
    )
}
export default List ;