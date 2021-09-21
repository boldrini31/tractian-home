import React from "react";
import Button from "../utils/button/button";


function Why() {
    return (
        <div className="container-fluid" style={{ padding: "20px 0px", margin: "0" }}>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-gray">Por que escolher a <b>Tractian</b>?</h2>
                </div>
            </div>
            <div className="row justify-content-around" style={{ margin: "2rem 0" }}>
                <div className=" border border-primary rounded" style={{ padding: "3rem 2rem", width: "22%" }}>
                    <img style={{ height: "70px", width: "80px", display: "block" }}
                        src="https://imgix.tractian.com/images/icon-maintence-plataform.svg?auto=format&amp;fit=max&amp;w=256" decoding="async" srcSet="https://imgix.tractian.com/images/icon-maintence-plataform.svg?auto=format&amp;fit=max&amp;w=96 1x, https://imgix.tractian.com/images/icon-maintence-plataform.svg?auto=format&amp;fit=max&amp;w=256 2x" />
                    <h2 style={{ fontSize: "18px", textAlign: "left", margin: "10px auto" }}>Manutenção Preditiva</h2>
                    <p style={{ fontSize: "15px", textAlign: "left", margin: "10px auto" }}>Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.</p>
                </div>
                <div className=" border border-primary rounded" style={{ padding: "3rem 2rem", width: "22%" }}>
                    <img style={{ height: "70px", width: "80px", display: "block" }}
                        src="https://imgix.tractian.com/images/icon-maintence-horimeter.svg?auto=format&amp;fit=max&amp;w=256" decoding="async" srcSet="https://imgix.tractian.com/images/icon-maintence-horimeter.svg?auto=format&amp;fit=max&amp;w=96 1x, https://imgix.tractian.com/images/icon-maintence-horimeter.svg?auto=format&amp;fit=max&amp;w=256 2x" />
                    <h2 style={{ fontSize: "18px", textAlign: "left", margin: "10px auto" }}>Automação de OS</h2>
                    <p style={{ fontSize: "15px", textAlign: "left", margin: "10px auto" }}>Automatize a geração de ordens de serviço com base em horas ou em dias e melhore a sua preventiva.</p>
                </div>
                <div className="border border-primary rounded" style={{ padding: "3rem 2rem", width: "22%" }}>
                    <img style={{ height: "70px", width: "80px", display: "block" }}
                        src="https://imgix.tractian.com/images/icon-maintence-online.svg?auto=format&amp;fit=max&amp;w=256" decoding="async" srcSet="https://imgix.tractian.com/images/icon-maintence-online.svg?auto=format&amp;fit=max&amp;w=96 1x, https://imgix.tractian.com/images/icon-maintence-online.svg?auto=format&amp;fit=max&amp;w=256 2x" />
                    <h2 style={{ fontSize: "18px", textAlign: "left", margin: "10px auto" }}>Monitoramento Online</h2>
                    <p style={{ fontSize: "15px", textAlign: "left", margin: "10px auto" }}>Sensor Tractian coleta dados de vibração, temperatura, horímetro e consumo de energia em tempo real.
                    </p>
                </div>
                <div className="border border-primary rounded" style={{ padding: "3rem 2rem", width: "22%" }}>
                    <img style={{ height: "70px", width: "80px", display: "block" }}
                        src="https://imgix.tractian.com/images/icon-maintence-pump.svg?auto=format&amp;fit=max&amp;w=256" decoding="async" srcSet="https://imgix.tractian.com/images/icon-maintence-pump.svg?auto=format&amp;fit=max&amp;w=96 1x, https://imgix.tractian.com/images/icon-maintence-pump.svg?auto=format&amp;fit=max&amp;w=256 2x" />
                    <h2 style={{ fontSize: "18px", textAlign: "left", margin: "10px auto" }}>Setup Instantâneo</h2>
                    <p style={{ fontSize: "15px", textAlign: "left", margin: "10px auto" }}>Solução Plug & Play, sem necessidade de gateways ou roteadores, comunicação via 2G/3G independente.

                    </p>
                </div>
            </div>
            <div className="row" style={{ margin: "40px 0px" }}>
                <div>
                    <Button>Começe Agora!</Button>
                </div>
            </div>
            <div className="row">
                <div>
                    <h2 className="py-5" style={{ fontSize: "36px", padding: "36px 0px" }}>
                        Mantenha a sua equipe e seus ativos com o <b>melhor desempenho</b></h2>
                    <p>Descomplicamos a manutenção preditiva evitando vários problemas:</p>
                </div>

            </div>

        </div>
    );
}

export default Why;
