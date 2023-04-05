import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LoginButton from '../../components/UI/LoginButton/LoginButton'
import logo from '../../img/LogoBlack.png'
import page from './Login.module.scss'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleEmailChange = ({ target }) => {
    setEmail(target.value)
  }

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value)
  }

  const handleSignup = () => {
    navigate('/signup')
  }

  return (
    <div className={page.section}>
      <div className={page.wrap}>
        <form className={page.form}>
          <img className={page.logo} src={logo} alt="logo" />
          <input
            className={page.input}
            placeholder="Логин"
            type="text"
            onChange={handleEmailChange}
          />
          <input
            className={page.input}
            placeholder="Пароль"
            type="password"
            onChange={handlePasswordChange}
          />
          <LoginButton email={email} password={password} />
          <div
            className={page.signUpButton}
            type="button"
            onClick={handleSignup}
          >
            Зарегистрироваться
          </div>
        </form>
      </div>
    </div>
  )
}
