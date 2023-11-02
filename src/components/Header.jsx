import '../style/header.css'

import { Link } from 'react-router-dom';

import { useState } from 'react';

import { IoLocationOutline } from 'react-icons/io5';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa'
import { BsMinecartLoaded } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'

export default function Header({ contextCarrinho }) {
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
                        <p className='atualizar p-bold link'>
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
                        <p className='login p-bold link'>Contas e Listas <AiFillCaretDown /></p>
                    </div>

                    <div className="devolucao">
                        <p>Devoluções</p>
                        <p className='p-bold link'>e Pedidos</p>
                    </div>

                </div>
                <div className="carrinho" id='carrinho'>
                    <h2><BsMinecartLoaded /> <span>{contextCarrinho}</span></h2>
                    <p className='p-bold link'>Carrinho</p>
                </div>
            </nav>

            <nav className="nav-down">
                <li id='menu-responsivo'><Link to={"/"}><BiMenu className='menu-mobile'/> Mais</Link></li>
                <ul className='nav-down-list'>
                    <li><Link to={"/"}><BiMenu className='menu-mobile'/> Todos</Link></li>
                    <li><Link to={"/"}>Venda na Amazon</Link></li>
                    <li><Link to={"/"}>Mais Vendidos</Link></li>
                    <li><Link to={"/"}>Ofertas do Dia</Link></li>
                    <li><Link to={"/"}>Prime <AiFillCaretDown className='icon-down-gray'/></Link></li>
                    <li><Link to={"/"}>Novidades da Amazon</Link></li>
                    <li><Link to={"/"}>Livros</Link></li>
                    <li><Link to={"/"}>Música</Link></li>
                    <li><Link to={"/"}>Ideias de Presente</Link></li>
                </ul>

                <h2 className='warn-amazon-nav'>Chegou o Amazon Quase Novo</h2>
            </nav>
        </header>
    );
}