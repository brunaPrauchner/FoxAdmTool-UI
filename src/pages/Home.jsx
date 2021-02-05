import UIButton from '../components/UIButton';
import UserForm from '../components/UserForm';
import {Link, Outlet, useLocation} from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className={'home'}>
      <Link to="/">home</Link>
      <Link to="user"><UserForm/></Link>
      <Link to="users"><UIButton text='Show All Users'/></Link>
      
    </div>
  )
}
export default Home;
//<Link to="users"><UIButton text='Show All Users'/></Link>