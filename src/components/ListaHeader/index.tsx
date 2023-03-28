import { textoOpcoes, menu } from '../../utils/arrays';
import { List, Image } from './style';

export default function ListaHeader() {
    return (
        <>
            <div>
                <List>
                    {textoOpcoes.map((opcoes) => (
                        <li key={opcoes}><p>{opcoes}</p></li>
                    ))}
                </List>
            </div>
            <Image>
                <List>
                    {menu.map((opcoes) => (
                        <li key={opcoes}><img src={opcoes} /></li>
                    ))}
                </List>
            </Image>
        </>

    )
}