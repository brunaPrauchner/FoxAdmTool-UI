import UserInfo from "../components/UserInfo";
import ShoppingItem from "../components/ShoppingItem";
import {Link, Outlet, useLocation} from "react-router-dom";
const User = ({userInfo}) => {

    const USER = {name: 'Bruna Goods', email: 'b@yopmail.com', cpf: '12345678911'}
    return(
        <>
        <Link to="/">home</Link>
        <UserInfo name={USER.name} email={USER.email} cpf={USER.cpf} />
        <div>Shopping List</div>
        <ShoppingItem/>
        </>
    )
}
export default User;