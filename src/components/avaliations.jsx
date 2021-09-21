import React from "react";
import Stars from "../assets/star.svg";

function Avaliations() {
    return (
        <div className="container-fluid"
            style={{ backgroundImage: "linear-gradient(to right, #2563eb,#1e40af )", paddingTop: "3.5rem", paddingBottom: "12rem" }}>
            <div className="row justify-content-around" style={{ display: "flex", alignItems: "center" }}>
                <div className="col-5" style={{ textAlign: "left" }}>
                    <img src={Stars} style={{ height: "40px", width: "180px", marginBottom: "1.5rem", marginTop: "1.5rem" }} />
                    <h1 className="text-white" style={{ fontSize: "2.25rem", lineHeight: "2.5rem", marginBottom: "1.5rem" }}>#1 Solução para Manutenção</h1>
                    <form>
                        <div className="flex flex-col items-center" style={{ display: "inline-flex" }}>
                            <div className="flex flex-col">
                                <input type="text" name="email" className="border" placeholder="E-mail profissional"
                                    style={{ padding: ".5rem", paddingRight: "5rem", borderRadius: ".375rem" }} />
                            </div>
                            <button type="submit" className="text-white items-center justify-center border"
                                style={{ borderColor: "#22C55E", marginLeft: ".5rem", background: "#22C55E", padding: "8px 16px", borderRadius: ".375rem", textDecoration: "none" }}
                            ><b>Agendar Demo</b></button>
                        </div>
                    </form>
                </div>
                <div className="col-4" style={{ textAlign: "left" }}>
                    <h1 className="text-center text-white"
                        style={{ marginBottom: "1.25rem", fontSize: "1.875rem", lineHeight: "2.25rem", marginTop: "1.25rem" }}>O que os nossos clientes dizem:</h1>
                    <div className="flex"
                        style={{ backgroundColor: "white", borderRadius: "8px", border: "1px solid #eee", padding: "20px", height: "auto" }}>
                        <img src="https://imgix.tractian.com/images/stars.svg?auto=format&amp;fit=max&amp;w=256" decoding="async"
                            srcSet="https://imgix.tractian.com/images/stars.svg?auto=format&amp;fit=max&amp;w=96 1x, https://imgix.tractian.com/images/stars.svg?auto=format&amp;fit=max&amp;w=256 2x" />
                        <p style={{ lineHeight: "1.5", margin: "0px" }}
                        ><b>&quot; A solução disponibilizada pela Tractian é de simples utilização, fácil compreensão e de extrema importância para toda a nossa equipe de manutenção. Com ela conseguimos tomar decisões mais assertivas e reduzimos drasticamente nosso tempo de resposta. &quot;</b></p>
                        <div style={{ width: "100%", margin: "1rem 0", display: "flex", alignItems: "center" }}>
                            <div style={{ height: "40px", width: "45px" }}>
                                <img style={{ height: "40px", width: "40px" }}
                                    src="https://imgix.tractian.com/images/pedro.png?auto=format&amp;fit=max&amp;w=96" decoding="async" srcSet="https://imgix.tractian.com/images/pedro.png?auto=format&amp;fit=max&amp;w=48 1x, https://imgix.tractian.com/images/pedro.png?auto=format&amp;fit=max&amp;w=96 2x" />
                            </div>
                            <div >
                                <h2 style={{ lineHeight: "1.5", fontSize: "1rem", margin: "0" }}><b>Eduarda Buaiz</b></h2>
                                <p style={{ lineHeight: "1.5", fontSize: ".875rem", margin: "0" }}>Diretora Geral - Indústria Alimentícia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Avaliations;
