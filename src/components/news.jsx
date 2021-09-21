import React from "react";


function News() {
    return (
        <div className="container-fluid" style={{}}>
            <div className="row">
                <div className="col-6 justify-content-center" style={{ backgroundColor: "rgba(244,244,245)", padding: "5rem 1.5rem", display: "flex" }}>
                    <div className="border" style={{ width: "75%", borderRadius: ".5rem", padding: "3rem 0px", backgroundColor: "white" }}>
                        <h2 style={{ padding: "0px 1.25rem", fontSize: "1.5rem", lineHeight: "2rem", marginBottom: "2rem" }}>
                            <b>Qual o peso da sua máquina no seu bolso? Veja se vale a pena trocar para a solução da Tractian</b></h2>
                        <a className="text-white" href="/calculadora" style={{ background: "#22C55E", padding: "8px 16px", borderRadius: ".375rem", textDecoration: "none", fontWeight: "600" }}>Faça o teste já!</a>
                    </div>
                </div>
                <div className="col-6" style={{ padding: "4rem 2.5rem 0 2.5rem" }}>
                    <h2 style={{ fontSize: "1.875rem", lineHeight: "2.25rem", textAlign: "left", color: "rgba(39,64,175)", marginBottom: "2rem", fontWeight: "600" }}>
                        Novidades no Blog
                    </h2>
                    <li style={{ listStyle: "none", textAlign: "left" }}>
                        <a href="/blog/tipos-de-manutencao-o-guia-definitivo" style={{ color: "black", marginTop: "2rem", fontWeight: "600", textDecoration: "none" }}>
                            Tipos de Manutenção: o Guia Definitivo
                        </a>
                        <div style={{ width: "16rem", height: ".125rem", backgroundImage: "linear-gradient(to right, #2563eb, #1e40af", margin: "1.5rem auto 1rem 0", borderTopLeftRadius: ".25rem", borderTopRightRadius: ".25rem" }}>
                        </div>
                    </li>
                    <li style={{ listStyle: "none", textAlign: "left" }}>
                        <a href="blog/conheca-as-7-habilidades-que-todo-gestor-deveria-praticar" style={{ color: "black", marginTop: "2rem", fontWeight: "600", textDecoration: "none" }}>
                            Conheça as 7 habilidade que todo gestor deveria praticar
                        </a>
                        <div style={{ width: "16rem", height: ".125rem", backgroundImage: "linear-gradient(to right, #2563eb, #1e40af", margin: "1.5rem auto 1rem 0", borderTopLeftRadius: ".25rem", borderTopRightRadius: ".25rem" }}>
                        </div>
                    </li>
                    <li style={{ listStyle: "none", textAlign: "left" }}>
                        <a href="blog/guia-completo-sobre-monitoramento-online-de-ativos" style={{ color: "black", marginTop: "2rem", fontWeight: "600", textDecoration: "none" }}>
                            Guia completo sobre monitoramento online de ativos
                        </a>
                        <div style={{ width: "16rem", height: ".125rem", backgroundImage: "linear-gradient(to right, #2563eb, #1e40af", margin: "1.5rem auto 1rem 0", borderTopLeftRadius: ".25rem", borderTopRightRadius: ".25rem" }}>
                        </div>
                    </li>
                    <div style={{ textAlign: "right" }}>
                        <p style={{ cursor: "pointer", color: "rgba(30,64,175)", fontWeight: "600", marginTop: "4rem" }}>
                            Ir para o blog
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
