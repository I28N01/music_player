import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserSignupMutation } from '../../api/api'
import SignUpCSS from './Signup.module.scss'
import image from '../../img/LogoBlack.png'

export default function Signup() {
  const [signup, { isSuccess, error }] = useUserSignupMutation()

  const [userValues, setUserValues] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [validatePassword, setValidatePassword] = useState('')

  const onSignup = (e) => {
    e.preventDefault()
    if (userValues.password === validatePassword) {
      signup(userValues)
    } else {
      alert('Пароли не совпадают')
    }
  }

  const handleLoginChange = (e) => {
    setUserValues({
      ...userValues,
      username: e.target.value,
    })
  }

  const handleEmailChange = (e) => {
    setUserValues({
      ...userValues,
      email: e.target.value,
    })
  }

  const handlePasswordChange = (e) => {
    setUserValues({
      ...userValues,
      password: e.target.value,
    })
  }

  const handleValidatePasswordChange = (e) => {
    setValidatePassword(e.target.value)
  }

  return (
    <section className={SignUpCSS.login}>
      <div className={SignUpCSS.loginBox}>
        <img className={SignUpCSS.loginImage} src={image} alt="Logo" />
        <form className={SignUpCSS.loginArea}>
          <input
            onChange={handleLoginChange}
            className={SignUpCSS.loginItem}
            type="text"
            placeholder="Логин"
          />
          {error && error.data.username && (
            <div className={SignUpCSS.error}>{error.data.username[0]}</div>
          )}
          <input
            onChange={handleEmailChange}
            className={SignUpCSS.loginItem}
            type="email"
            placeholder="email"
          />
          {error && error.data.email && (
            <div className={SignUpCSS.error}>{error.data.email[0]}</div>
          )}
          <input
            onChange={handlePasswordChange}
            className={SignUpCSS.loginItem}
            type="text"
            placeholder="Пароль"
          />
          {error && error.data.password && (
            <div className={SignUpCSS.error}>{error.data.password[0]}</div>
          )}
          <input
            onChange={handleValidatePasswordChange}
            className={SignUpCSS.loginItem}
            type="text"
            placeholder="Повторите пароль"
          />
          {error && error.data.username && (
            <div className={SignUpCSS.error}>{error.data.username[0]}</div>
          )}
          <button
            onClick={(e) => onSignup(e)}
            className={`${SignUpCSS.regButton} ${SignUpCSS.Button}`}
          >
            Зарегистрироваться
          </button>
          {isSuccess && <Navigate to="/" replace />}
        </form>
      </div>
    </section>
  )
}
