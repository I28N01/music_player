import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setLogin, setToken } from '../../../store/slices/authSlice'
import { useGetTokenMutation, useUserLoginMutation } from '../../../api/api'
import component from './LoginButton.module.scss'
import PropTypes from 'prop-types'

function LoginButton({ password, email }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { data, isSuccess, isLoading }] = useUserLoginMutation()
  const [getToken, { data: token, error: tokenError }] = useGetTokenMutation()

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert('Введите свои учетные данные или зарегистрируйтесь')
    } else {
      login({
        email,
        password,
      })
      getToken({
        email,
        password,
      })
    }
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/tracks')
      document.cookie = `username=${data?.username}`
      dispatch(setToken(token?.access))
      document.cookie = `token=${token?.refresh}`
      dispatch(setLogin())
      console.log(data)
    }
  }, [token])

  return (
    <>
      {tokenError && <div>{tokenError.data.detail}</div>}
      {!isLoading && (
        <div
          className={`${component.signUpButton} ${component.Button}`}
          type="button"
          onClick={(e) => onSubmitForm(e)}
        >
          Войти
        </div>
      )}
      {isLoading && (
        <div
          className={`${component.signUpButton} ${component.Button}`}
          type="button"
          onClick={(e) => onSubmitForm(e)}
        >
          Ожидайте ...
        </div>
      )}
    </>
  )
}

export default LoginButton

LoginButton.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
}
