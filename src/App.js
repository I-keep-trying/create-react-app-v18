import logo from './logo.svg'
import './App.css'
import OAuth2Login from 'react-simple-oauth2-login'

function App() {
  const onSuccess = (response) => console.log(response)
  const onFailure = (response) => console.error(response)
  return (
    <div className="App">
      <OAuth2Login
        authorizationUrl={process.env.REACT_APP_GOOGLE_AUTH_URI}
        responseType="token"
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        redirectUri="https://cra-social-login.herokuapp.com/api/auth/callback/google"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  )
}

export default App
