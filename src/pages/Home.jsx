import UIButton from '../components/UIButton';
import UserForm from '../components/UserForm';
import { apiProvider } from '../services/apiProvider';
import { useNavigate } from "react-router-dom"
import './Home.css';

const Home = () => {
  let navigate = useNavigate();

  const onShowAllUsers = async () => {
    const result = await apiProvider.getAllUsers()
    navigate('/users', { state: { users: result.data } });
  }

  return (
    <div className={'home'}>
      <UserForm />
      <div className='margin-top'>
        <UIButton text='Show All Users' handleOnClick={onShowAllUsers} />
      </div>
    </div>
  )
}

export default Home;