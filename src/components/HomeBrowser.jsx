import { Link } from 'react-router-dom';

import { RiErrorWarningLine } from 'react-icons/ri'

import '../style/home.css';

export default function HomeBrowser() {
    return (
        <section className="home">
            <div className="heroSection"></div>

            <div className="container-items-first">
                <div className="card-amazon card">
                    <h2>Pontos que nunca expiram</h2>
                    <img src="https://github.com/Luan16p/amazon-clone/blob/main/public/products/cartao.jpg?raw=true" alt="amazoncard" />
                    <Link to={"/"}>Peça seu cartão de crédito Amazon</Link>
                </div>

                <div className="echo card">
                    <h2>Echo e Fire TV com Alexa</h2>

                    <div className="images-echo">
                        <div className="img-card">
                            <img src="https://github.com/Luan16p/amazon-clone/blob/main/public/products/echo/echo-1.jpg?raw=true" alt="ECHO" />
                            <span>Novo Echo Pop</span>
                        </div>
                        <div className="img-card">
                            <img src="https://github.com/Luan16p/amazon-clone/blob/main/public/products/echo/echo-2.jpg?raw=true" alt="ECHO" />
                            <span>Novo Echo Dot</span>
                        </div>

                    </div>

                    <div className="images-echo">
                        <div className="img-card">
                            <img src="https://github.com/Luan16p/amazon-clone/blob/main/public/products/echo/echo-3.jpg?raw=true" alt="ECHO" />
                            <span>Fire TV Stick Lite</span>
                        </div>
                        <div className="img-card">
                            <img src="https://github.com/Luan16p/amazon-clone/blob/main/public/products/echo/echo-4.jpg?raw=true" alt="ECHO" />
                            <span>Echo Show 8</span>
                        </div>
                    </div>

                    <Link to={"/"}>Confira todos os Dispositivos Amazon</Link>
                </div>

                <div className="ofertas card">
                    <h2>Ofertas do Dia, de A a Z</h2>
                    <img src="https://github.com/Luan16p/amazon-clone/blob/main/public/products/ofertas.jpg?raw=true" alt="ofertas" />
                    <Link to={"/"}>Veja todas as ofertas</Link>
                </div>
            </div>

            <span className="label-patrocinio" style={{color: "rgb(85, 85, 85)", fontSize: '10px'}}>Patrocinado <RiErrorWarningLine/></span>

        </section>
    );
}