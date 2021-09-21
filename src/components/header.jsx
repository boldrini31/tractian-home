import React from "react";
import Button from "../utils/button/button";

function Header() {
    return (

        <header className="p-3 text-white" style={{
            backgroundImage: "linear-gradient(to right, #1e3a8a, #2563eb)"
        }}>
            <div className="container" >
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src="https://imgix.tractian.com/images/Logo-Tractian.svg" width="170" height="60" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={{ marginLeft: "auto" }} >
                        <li><div className="dropdown">
                            <button style={{ boxShadow: "none", fontWeight: "600", }} className="btn btn-black text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Conheça o Produto
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ margin: "-12px", padding: "12px" }}>
                                <li style={{ width: "450px" }}>
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <div className="container dropdown-item">
                                            <div className="row">
                                                <div className="col-1">
                                                    <svg style={{ width: '1.5rem', color: 'rgba(37,99,235)', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                                </div>
                                                <div className="col-11" >
                                                    <div className="row" style={{ marginLeft: "12px" }}>
                                                        <div className="col-12">
                                                            <p style={{
                                                                fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", margin: "0"
                                                            }}>Sensor Tractian</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p style={{
                                                                whiteSpace: "normal", color: "#71717A", fontSize: ".875rem", lineHeight: "1.25rem", marginTop: ".25rem"
                                                            }}>Analise de vibração e temperatura em tempo real.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li style={{ width: "450px" }}>
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <div className="container dropdown-item">
                                            <div className="row">
                                                <div className="col-1">
                                                    <svg style={{ width: '1.5rem', color: 'rgba(37,99,235)', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                                                </div>
                                                <div className="col-11" >
                                                    <div className="row" style={{ marginLeft: "12px" }}>
                                                        <div className="col-12">
                                                            <p style={{
                                                                fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", margin: "0"
                                                            }}>Plataforma</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p style={{
                                                                whiteSpace: "normal", color: "#71717A", fontSize: ".875rem", lineHeight: "1.25rem", marginTop: ".25rem"
                                                            }}>Monitore a condição das suas máquinas de qualuqer lugar.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li style={{ width: "450px" }}>
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <div className="container dropdown-item">
                                            <div className="row">
                                                <div className="col-1">
                                                    <svg style={{ width: '1.5rem', color: 'rgba(37,99,235)', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                                </div>
                                                <div className="col-11" >
                                                    <div className="row" style={{ marginLeft: "12px" }}>
                                                        <div className="col-12">
                                                            <p style={{
                                                                fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", margin: "0"
                                                            }}>Funcionalidades</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p style={{
                                                                whiteSpace: "normal", color: "#71717A", fontSize: ".875rem", lineHeight: "1.25rem", marginTop: ".25rem"
                                                            }}>Saúde do Ativo, Ordens de Serviço, Insights Automaticos e muito mais.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li style={{ width: "450px" }}>
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <div className="container dropdown-item">
                                            <div className="row">
                                                <div className="col-1">
                                                    <svg style={{ width: '1.5rem', color: 'rgba(37,99,235)', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                                </div>
                                                <div className="col-11" >
                                                    <div className="row" style={{ marginLeft: "12px" }}>
                                                        <div className="col-12">
                                                            <p style={{
                                                                fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", margin: "0"
                                                            }}>Planos</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p style={{
                                                                whiteSpace: "normal", color: "#71717A", fontSize: ".875rem", lineHeight: "1.25rem", marginTop: ".25rem"
                                                            }}>Saiba como obter nossa solução.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li style={{ width: "450px" }}>
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <div className="container dropdown-item">
                                            <div className="row">
                                                <div className="col-1">
                                                    <svg style={{ width: '1.5rem', color: 'rgba(37,99,235)', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                </div>
                                                <div className="col-11" >
                                                    <div className="row" style={{ marginLeft: "12px" }}>
                                                        <p style={{
                                                            fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", margin: "0"
                                                        }}>Agende uma demonstração</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div></li>
                        <li><div className="dropdown">
                            <button style={{ boxShadow: "none", fontWeight: "600", }} className="btn btn-black text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Sobre Nós
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ margin: "-12px", padding: "12px" }}>
                                <li style={{ width: "450px" }}>
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <div className="container dropdown-item">
                                            <div className="row">
                                                <div className="col-1">
                                                    <svg style={{ width: '1.5rem', color: 'rgba(37,99,235)', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                                </div>
                                                <div className="col-11" >
                                                    <div className="row" style={{ marginLeft: "12px" }}>
                                                        <div className="col-12">
                                                            <p style={{
                                                                fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", margin: "0"
                                                            }}>Conheça a Tractian</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p style={{
                                                                whiteSpace: "normal", color: "#71717A", fontSize: ".875rem", lineHeight: "1.25rem", marginTop: ".25rem"
                                                            }}>Conheça mais sobre a equipe que faz acontecer o produto, nossa história e vagas abertas.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li style={{ width: "450px" }}>
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <div className="container dropdown-item">
                                            <div className="row">
                                                <div className="col-1">
                                                    <svg style={{ width: '1.5rem', color: 'rgba(37,99,235)', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path></svg>
                                                </div>
                                                <div className="col-11" >
                                                    <div className="row" style={{ marginLeft: "12px" }}>
                                                        <div className="col-12">
                                                            <p style={{
                                                                fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", margin: "0"
                                                            }}>Contato</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p style={{
                                                                whiteSpace: "normal", color: "#71717A", fontSize: ".875rem", lineHeight: "1.25rem", marginTop: ".25rem"
                                                            }}>Entre em contato para tirar dúvidas, conhecer de perto nosa solução e enviar sugestões.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li style={{ width: "450px" }}>
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <div className="container dropdown-item">
                                            <div className="row">
                                                <div className="col-1">
                                                    <svg style={{ width: '1.5rem', color: 'rgba(37,99,235)', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                                </div>
                                                <div className="col-11" >
                                                    <div className="row" style={{ marginLeft: "12px" }}>
                                                        <div className="col-12">
                                                            <p style={{
                                                                fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", margin: "0"
                                                            }}>Trabalhe Conosco</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p style={{
                                                                whiteSpace: "normal", color: "#71717A", fontSize: ".875rem", lineHeight: "1.25rem", marginTop: ".25rem"
                                                            }}>Venha participar da Statup para indústria mais promissora do Brasil.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li style={{ width: "450px" }}>
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <div className="container dropdown-item">
                                            <div className="row">
                                                <div className="col-1">
                                                    <svg style={{ width: '1.5rem', color: 'rgba(37,99,235)', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                                </div>
                                                <div className="col-11" >
                                                    <div className="row" style={{ marginLeft: "12px" }}>
                                                        <div className="col-12">
                                                            <p style={{
                                                                fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", margin: "0"
                                                            }}>Imprensa</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p style={{
                                                                whiteSpace: "normal", color: "#71717A", fontSize: ".875rem", lineHeight: "1.25rem", marginTop: ".25rem"
                                                            }}>Veja o que os principais veículos de informação falam sobre a Tractian.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div></li>
                        <li><div className="dropdown">
                            <button style={{ boxShadow: "none", fontWeight: "600", }} className="btn btn-black text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Materiais Gratuitos
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ margin: "-12px", padding: "12px" }}>
                                <li style={{ width: "450px" }}>
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <div className="container dropdown-item" style={{ margin: "12px", width: "426px" }}>
                                            <div className="row">
                                                <div className="col-1">
                                                    <svg style={{ width: '1.5rem', color: 'rgba(37,99,235)', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                </div>
                                                <div className="col-11" >
                                                    <div className="row" style={{ marginLeft: "12px" }}>
                                                        <div className="col-12">
                                                            <p style={{
                                                                fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", margin: "0"
                                                            }}>Guias</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p style={{
                                                                whiteSpace: "normal", color: "#71717A", fontSize: ".875rem", lineHeight: "1.25rem", marginTop: ".25rem"
                                                            }}>Obtenha os melhores guias para manutenção gratuitamente.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li style={{ width: "450px" }}>
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        <div className="container dropdown-item" style={{ margin: "12px", width: "426px" }}>
                                            <div className="row">
                                                <div className="col-1">
                                                    <svg style={{ width: '1.5rem', color: 'rgba(37,99,235)', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                </div>
                                                <div className="col-11" >
                                                    <div className="row" style={{ marginLeft: "12px" }}>
                                                        <div className="col-12">
                                                            <p style={{
                                                                fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", margin: "0"
                                                            }}>Calculadora ROI</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p style={{
                                                                whiteSpace: "normal", color: "#71717A", fontSize: ".875rem", lineHeight: "1.25rem", marginTop: ".25rem"
                                                            }}>Qual o peso da sua máquina no seu bolso? Veja se vale a pena trocar para a solução da Traction.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <ul style={{ marginLeft: "-12px", marginRight: "-12px", marginBottom: "-12px", backgroundColor: "rgba(250,250,250)", listStyle: "none", paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1rem', paddingBot: '2rem' }}>
                                    <li style={{ width: "450px" }}>
                                        <div className="container" >
                                            <div className="row">
                                                <p style={{ fontWeight: "600", textDecoration: "none", width: "500px", color: "#71717A", fontSize: "14px" }}>
                                                    Últimos Materiais
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{ width: "450px" }}>
                                        <a href="#" style={{ textDecoration: "none" }}>
                                            <div className="container">
                                                <div className="row">
                                                    <a href="#" className="nav-link px-2 text-black" style={{ fontWeight: "600", color: "#18181B", fontSize: "16px", Width: "500px" }}>Em busca da downtime zero.</a>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li style={{ width: "450px" }}>
                                        <a href="#" style={{ textDecoration: "none" }}>
                                            <div className="container">
                                                <div className="row">
                                                    <a href="#" className="nav-link px-2 text-black" style={{ fontWeight: "600", color: "#18181B", fontSize: "16px", Width: "500px" }}>Guia Completo Indicadores da Manutenção</a>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li style={{ width: "450px" }}>
                                        <a href="#" style={{ textDecoration: "none" }}>
                                            <div className="container">
                                                <div className="row">
                                                    <a href="#" className="nav-link px-2 text-blue" style={{ fontWeight: "600", Width: "500px" }}>Ver todos</a>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                        </div></li>
                        <li><a href="#" className="nav-link px-2 text-white" style={{ fontWeight: "600" }}>Blog</a></li>
                        <li><a href="#" className="nav-link px-2 text-white" style={{ fontWeight: "600" }}>Área do Cliente</a></li>
                    </ul>

                    <div className="text-end">
                        <Button>Demonstração</Button>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;
