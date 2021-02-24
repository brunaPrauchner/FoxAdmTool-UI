import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { apiProvider } from '../services/apiProvider';
import './UserForm.css';

const UserForm = () => {
  let navigate = useNavigate();
  //criteriaMode: all validation errors for single field will display at once
  const { register, handleSubmit, errors } = useForm({ criteriaMode: "all" });

  const onSubmit = async ({ cpf }) => {
    try {
      const result = await apiProvider.postAllInfo({ cpf })
      navigate('/user', { state: { user: result.data } });
    } catch (error) {
      alert("user doesn't exists try another cpf")
      console.log('ERRROR: ', error);
    }
  }

  return (
    <div>
      <h2>Find User by CPF</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='CPF' name="cpf" ref={register({ required: true, minLength: 11, pattern: /^[0-9]*$/ })} />
        <button className={'submitButton'} type="submit">Submit</button>
      </form>
      <div className='error-msgs'>
        {errors?.cpf?.types?.required && (<p> This field is required </p>)}
        {errors?.cpf?.types?.pattern && (<p> This field accepts only digits </p>)}
        {errors?.cpf?.types?.minLength && (<p> This field requires a minimal length of 11 digits </p>)}
      </div>
    </div>
  )
}
export default UserForm;
//accepts any number of digits, including none -> *
//all digits -> $ (avoids partial match '1A')