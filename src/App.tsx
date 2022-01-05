import {Layout} from 'antd';
import {FC, useEffect } from 'react'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import './App.css'
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';
export const App: FC = () => {
  const {setUser, setIsAuth} = useActions()

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setUser({username:localStorage.getItem('username' || '')} as IUser)
      setIsAuth(true)
    } else {

    }
  }, [])
  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}
export default App;