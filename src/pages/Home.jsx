import UIButton from '../components/UIButton';
import UserForm from '../components/UserForm';
import { Link, Outlet, useLocation } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className={'home'}>
      <Link to="/">home</Link>
      <UserForm />
      <div className='margin-top'>
        <Link id='users-page-link' to="users">
          <UIButton text='Show All Users'/>
        </Link>
      </div>
    </div>
  )
}

export default Home;