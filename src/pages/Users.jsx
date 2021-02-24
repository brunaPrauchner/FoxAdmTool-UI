import { useLocation, useNavigate, Link } from "react-router-dom"
import { apiProvider } from '../services/apiProvider';
import './Home';
import './Users.css';

const Users = () => {
  let { state } = useLocation();
  let navigate = useNavigate();

  const handleClick = async (cpf) => {
    const result = await apiProvider.postAllInfo({ cpf })
    navigate('/user', { state: { user: result.data } });
  }
  const listUsers = state.users.map((user, i) =>
    <li key={i} onClick={() => handleClick(user.cpf)}>
      {user.name} {user.email} {user.cpf}
    </li>);

  return (
    <div>
      <Link to="/">home</Link>
      <h2>Click name to go to User Details</h2>
      <ul>{listUsers}
      </ul>
    </div>
  )
}

export default Users;