import './UIButton.css';
const UIButton = ({text, handleOnClick}) => {
  return (
    <button className={'myButton'} onClick={handleOnClick}>{text}</button>
  )
}
export default UIButton;