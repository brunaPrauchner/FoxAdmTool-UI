import './UserInfo.css';
const UserInfo = ({ name, email, cpf }) => {

  return (
    <>
      <div className='container'>
        <div class="column">Name</div>
        <div class="column">Email</div>
        <div class="column">CPF</div>
      </div>
      <div className='container'>
        <div class="item">{name}</div>
        <div class="item">{email}</div>
        <div class="item">{cpf}</div>
      </div>
    </>
  )
}
export default UserInfo;