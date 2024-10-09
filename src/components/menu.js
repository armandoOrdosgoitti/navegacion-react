import UserSolid from '../icons/user-solid.svg'
import Bars from '../icons/bars-solid.svg'
import BriefCase from '../icons/briefcase-solid.svg'
import Envelope from '../icons/envelope-solid.svg'
import '../css/ContenedorSecundario.css'
import '../css/menu.css'
import { BorderSombra } from './Border-sombra'

export function Menu() {
    return (
        <div className='contenedor-secundario'>
           
            <nav className='menu'>
                <ul>
                    <li className='list-menu'>
                        <img src={Bars} />
                    </li>
                    <li className='list-menu'>
                        <img src={UserSolid} />
                    </li>
                    <li className='list-menu'>
                        <img src={BriefCase} />
                    </li>
                    <li className='list-menu' >
                        <img src={Envelope} />
                    </li>
                </ul>

            </nav>
            <BorderSombra/>
        </div>

    )
}