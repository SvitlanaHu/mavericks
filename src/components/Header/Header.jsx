import style from './Header.module.css'
import { Logo } from '../Logo/Logo'
import { NavBar } from '../NavBar/NavBar.'

export const Header =()=>{
    return <div className={style.wrapper}>
        <Logo/>
        <NavBar/>
    </div>
}