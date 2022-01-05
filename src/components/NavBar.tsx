import { Layout, Menu, Row } from 'antd';
import { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
const NavBar: FC = () => {
    const {logout} = useActions()

    const router = useNavigate();
    const {isAuth, user} = useTypedSelector(state => state.auth)

    return (
        <Layout.Header>
            
            {isAuth ? <> 
                <Row justify='end'>
                <div style={{ color: 'white'}}>{user.username}</div>
            <Menu theme='dark' mode='horizontal' selectable={false} >
                <Menu.Item onClick={() => logout()} key={1}>
                    Выйти
                </Menu.Item>
            </Menu>
            </Row>
            </>
                : <Menu style={{justifyContent:'end'}} theme='dark' mode='horizontal' selectable={false} >
                    <Menu.Item  onClick={() => router(RouteNames.LOGIN)} key={1}>
                        Логин
                    </Menu.Item>
                </Menu>}
                
        </Layout.Header>
    )
}

export default NavBar;
