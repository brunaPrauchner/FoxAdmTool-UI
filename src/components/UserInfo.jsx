import './UserInfo.css';

const UserInfo = ({ name, email, cpf }) => {

  return (
    <div className='flex-container user-column'>
      <div>{name}</div>
      <div>{email}</div>
      <div>{cpf}</div>
    </div>
  )
}
export default UserInfo;