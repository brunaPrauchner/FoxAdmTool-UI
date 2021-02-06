import UserInfo from "../components/UserInfo";
import ShoppingItem from "../components/ShoppingItem";
import { Link } from "react-router-dom";
import './User.css';
const User = ({ userInfo }) => {

  const USER = { name: 'Bruna Goods', email: 'b@yopmail.com', cpf: '12345678911' }
  
  return (
    <>
      <Link to="/">home</Link>
      <div className='flex-container column'>
        <div>Name</div>
        <div>Email</div>
        <div>CPF</div>
      </div>
      <UserInfo name={USER.name} email={USER.email} cpf={USER.cpf} />
      <div id='shopping-label'>Shopping List</div>
      <ShoppingItem />
    </>
  )
}
export default User;