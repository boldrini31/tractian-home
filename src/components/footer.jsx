import React from "react";
import Ycombinator from "../assets/logo-ycombinator-branca.png";
import Citrino from "../assets/logo-citrino-branca.png";
import Dfg from "../assets/logo-dfg-branca.png";
import Gptw from "../assets/logo-gptw.png";
import Stw from "../assets/logo-stw.png";
import Sil from "../assets/logo-sil.png";
import Falconi from "../assets/logo-falconi.png";

function Footer() {
    return (
        <div className="container-fluid" style={{ backgroundImage: "linear-gradient(to right, #1e3a8a, #2563eb)", padding: "4rem 2rem" }}>
            <div className="row">
                <div className="col-3" style={{ textAlign: "left" }}>
                    <ul>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <h3 style={{ fontSize: "16px", color: "#7CE7F2", marginBottom: ".5rem", fontWeight: "600" }}>SOBRE A TRACTIAN</h3>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Trabalhe conosco</a>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Conheça a Tractian</a>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Historias de Sucesso</a>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Imprensa</a>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Politica de Privacidade</a>
                        </li>
                    </ul>
                </div>
                <div className="col-3" style={{ textAlign: "left" }}>
                    <ul>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <h3 style={{ fontSize: "16px", color: "#7CE7F2", marginBottom: ".5rem", fontWeight: "600" }}>PRODUTO</h3>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Sensor Tractian</a>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Plataforma</a>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Funcionalidades</a>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Planos</a>
                        </li>
                    </ul>
                </div>
                <div className="col-3" style={{ textAlign: "left" }}>
                    <ul>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <h3 style={{ fontSize: "16px", color: "#7CE7F2", marginBottom: ".5rem", fontWeight: "600" }}>MATERIAIS</h3>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Guias e Ebooks</a>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Checklists</a>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Calculadora</a>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Intensivão</a>
                        </li>
                    </ul>
                </div>
                <div className="col-3" style={{ textAlign: "left" }}>
                    <ul>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <h3 style={{ fontSize: "16px", color: "#7CE7F2", marginBottom: ".5rem", fontWeight: "600" }}>FALE CONOSCO</h3>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Contato</a>
                        </li>
                        <li style={{ marginTop: ".5rem", flexDirection: "column", display: "flex" }}>
                            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "600" }}>Fale com o CEO</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row" style={{ padding: "5rem 0", textAlign: "left" }}>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <h3 style={{ fontSize: "16px", color: "#7CE7F2", marginBottom: "1rem", fontWeight: "600", textTransform: "uppercase" }}>Investidos Por</h3>
                        </div>
                        <div className="row">
                            <img src={Ycombinator} style={{ objectFit: "contain", height: "90px", width: "180px" }}></img>
                            <img src={Citrino} style={{ objectFit: "contain", height: "90px", width: "170px" }}></img>
                            <img src={Dfg} style={{ objectFit: "contain", height: "90px", width: "140px" }}></img>
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <h3 style={{ fontSize: "16px", color: "#7CE7F2", marginBottom: "1rem", fontWeight: "600", textTransform: "uppercase" }}>Reconhecimento</h3>
                                </div>
                                <div className="row">
                                    <img src={Gptw} style={{ objectFit: "contain", height: "70px", width: "90px" }}></img>
                                    <img src={Stw} style={{ objectFit: "contain", height: "70px", width: "90px" }}></img>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <h3 style={{ fontSize: "16px", color: "#7CE7F2", marginBottom: "1rem", fontWeight: "600", textTransform: "uppercase" }}>Conecte-se com a tractian</h3>
                                </div>
                                <div className="row" >
                                    <div className="col=12">
                                        <a href="https://www.linkedin.com/company/tractian/" target="_blank" rel="noreferrer" style={{ marginRight: "1.5rem", textDecoration: "none" }}>
                                            <img style={{ objectFit: "contain", height: "32px", width: "32px" }} alt="" src="https://imgix.tractian.com/images/linkedin.png?auto=format&amp;fit=max&amp;w=64" decoding="async" srcSet="https://imgix.tractian.com/images/linkedin.png?auto=format&amp;fit=max&amp;w=32 1x, https://imgix.tractian.com/images/linkedin.png?auto=format&amp;fit=max&amp;w=64 2x" />
                                        </a>
                                        <a href="https://www.facebook.com/tractian" target="_blank" rel="noreferrer" style={{ marginRight: "1.5rem", textDecoration: "none" }}>
                                            <img style={{ objectFit: "contain", height: "32px", width: "32px" }} alt="" src="https://imgix.tractian.com/images/facebook.png?auto=format&amp;fit=max&amp;w=64" decoding="async" srcSet="https://imgix.tractian.com/images/facebook.png?auto=format&amp;fit=max&amp;w=32 1x, https://imgix.tractian.com/images/facebook.png?auto=format&amp;fit=max&amp;w=64 2x" />
                                        </a>
                                        <a href="https://www.instagram.com/tractian/" target="_blank" rel="noreferrer" style={{ marginRight: "1.5rem", textDecoration: "none" }}>
                                            <img style={{ objectFit: "contain", height: "32px", width: "32px" }} alt="" src="https://imgix.tractian.com/images/instagram.png?auto=format&amp;fit=max&amp;w=64" decoding="async" srcSet="https://imgix.tractian.com/images/instagram.png?auto=format&amp;fit=max&amp;w=32 1x, https://imgix.tractian.com/images/instagram.png?auto=format&amp;fit=max&amp;w=64 2x" />
                                        </a>
                                        <a href="https://youtube.com/c/TRACTIAN" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                                            <img style={{ objectFit: "contain", height: "32px", width: "32px" }} alt="" src="https://imgix.tractian.com/images/youtube.png?auto=format&amp;fit=max&amp;w=64" decoding="async" className="object-contain" srcSet="https://imgix.tractian.com/images/youtube.png?auto=format&amp;fit=max&amp;w=32 1x, https://imgix.tractian.com/images/youtube.png?auto=format&amp;fit=max&amp;w=64 2x" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ textAlign: "left" }}>
                <div className="col-6">
                    <div clasName="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="container">
                                    <div className="row">
                                        <h3 style={{ fontSize: "16px", color: "#7CE7F2", marginBottom: "1rem", fontWeight: "600", textTransform: "uppercase" }}>Distribuidor</h3>
                                    </div>
                                    <div clasName="row">
                                        <img src={Sil} style={{ objectFit: "contain", height: "90px", width: "130px" }}></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <h3 style={{ fontSize: "16px", color: "#7CE7F2", marginBottom: "1rem", fontWeight: "600", textTransform: "uppercase" }}>Homologado por</h3>
                                </div>
                                <div className="row">
                                    <img src={Falconi} style={{ objectFit: "contain", height: "90px", width: "200px" }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6" style={{ display: "flex", height: "125px" }}>
                    <ul className="col align-self-end" style={{ marginRight: "4rem", textAlign: "right", listStyleType: "none", flexDirection: "column" }}>
                        <li className="text-white" >© Tractian Tecnologia Ltda
                        </li>
                        <li>
                            <span className="text-white">CNPJ: 35.755.699/0001-84</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Footer;
