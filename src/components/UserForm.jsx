import './UserForm.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
const UserForm = () => {

  //criteriaMode: all validation errors for single field will display at once
  const { register, handleSubmit, errors } = useForm({criteriaMode: "all"});
  const onSubmit = data => console.log(data);

  //name is the unique identifier for react hook form 
  return (
    <div>
      <h2>Find User by CPF</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="cpf" ref={register({ required: true, minLength: 11, pattern: /^[0-9]*$/})} />
        {errors?.cpf?.types?.required && (<p> This field is required </p>)}
        {errors?.cpf?.types?.minLength && (<p> This field requires a minimal length of 11 digits </p>)}
        {errors?.cpf?.types?.pattern && (<p> This field accepts only digits </p>)}
        <button className={'submitButton'} type="submit">Submit</button>
    </form>
    </div>


  )
}
export default UserForm;
//accepts any number of digits, including none -> *
//all digits -> $ (avoids partial match '1A')
//or <input  className={'submitButton'} type="submit" /> instead of button type submit 