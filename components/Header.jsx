import Link from "next/link";
import style from './Header.module.css'

const pages = [
    {href: '/', title: "Index"},
    {href: '/calendar', title: 'Calendar'}
    
]

export default function Header(){
    return <header className={style.header}>
            <ul>
                {pages.map(({href,title})=>
                <li key={href}>
                <Link href={href}>{title}</Link>
                </li>)}
            </ul>
    </header>
}