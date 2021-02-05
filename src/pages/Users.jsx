import './Users.css';
import './Home';
import {Link, Outlet, useLocation} from "react-router-dom";
import UserInfo from '../components/UserInfo';

const Users = () => {
  const USERS = [{name: 'Bruna Goods', email: 'b@yopmail.com', cpf: '12345678911'},
                 {name: 'Lizza Miller', email: 'l@yopmail.com', cpf: '14975678943'},
                 {name: 'Kelsey Gordon', email: 'k@yopmail.com', cpf: '26497563187'}]
  
  const listUsers = USERS.map((user, i) => <li key={i}>{user.name} {user.email} {user.cpf}</li>);

  return (
    <>
    <div>
    <Link to="/">home</Link>
      <h2>Click name to go to User Details</h2>
      <ul class='list tab'>{listUsers}
      </ul>     
    </div>
    </>
  )
}
export default Users;