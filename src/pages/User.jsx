import UserInfo from "../components/UserInfo";
import ShoppingItem from "../components/ShoppingItem";
import { Link, useLocation } from "react-router-dom"
import './User.css';

const User = () => {
  let { state } = useLocation();

  return (
    <>
      <Link to="/">home</Link>
      <div className='flex-container column'>
        <div>Name</div>
        <div>Email</div>
        <div>CPF</div>
      </div>
      <UserInfo name={state.user.nameuser} email={state.user.emailuser} cpf={state.user.cpfuser} />
      <div id='shopping-label'>Shopping List</div>
      <ShoppingItem arrayItems={state.user.query} />
    </>
  )
}

export default User;