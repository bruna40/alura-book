import logo from '../../assets/logo.svg';
import ListaHeader from '../ListaHeader';
import { HeaderContainer } from './style';


export default function Header() {
    return(
        <HeaderContainer>
            <div>
                <img src={logo} alt="logo" />
                <p>Alura Books</p>
            </div>

            <ListaHeader />


        </HeaderContainer>
    )

}