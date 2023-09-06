import { useNavigate } from 'react-router-dom';
import './styles.css';

export function Logo() {
  const navigate = useNavigate()
  
  function handleBackHome() {
    navigate('/')
  }

  return (
    <div onClick={handleBackHome} className='logo'>
      <img src="logo.png" alt="Logo" />
    </div>
  )
}