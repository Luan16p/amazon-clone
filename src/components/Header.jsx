import '../style/header.css'

import { useState } from 'react';

import { IoLocationOutline } from 'react-icons/io5';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa'
import { BsMinecartLoaded } from 'react-icons/bs'

export default function Header() {
    const [border, setBorder] = useState(false);


    return (
        <header className="header-amazon">
            <nav className='navbar-top'>
                <div className="logo">
                    <img src="https://raw.githubusercontent.com/Luan16p/amazon-clone/main/public/amazon.webp" alt="amazon-logo" />
                    <p>.com.br</p>
                </div>

                <div className="local">
                    <div className="icon-local">
                        <IoLocationOutline />
                    </div>
                    <div className="info">
                        <p className='info-entrega'>
                            A entrega será feita em Bela vista 01319
                        </p>
                        <p className='atualizar'>
                            Atualizar Local
                        </p>
                    </div>
                </div>

                <div className="input-search">
                    <button className='todos'>Todos <AiFillCaretDown /></button>
                    <input type="text" className='input' placeholder='Pesquisa Amazon.com.br' />
                    <button className='search'><FaSearch /></button>
                </div>

                <div className="navlinks-amazon">
                    <div className="account">
                        <p>Olá, faça seu login</p>
                        <p className='login p-bold'>Contas e Listas <AiFillCaretDown /></p>
                    </div>

                    <div className="devolucao">
                        <p>Devoluções</p>
                        <p className='p-bold'>e Pedidos</p>
                    </div>

                    <div className="carrinho">
                        <h2><BsMinecartLoaded /></h2>
                        <p className='p-bold'>Carrinho</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}