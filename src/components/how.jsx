import React from "react";


function How() {
    return (
        <div className="container-fluid" style={{ padding: "0px 1.25rem" }}>
            <div className="row justify-content-between" >
                <h2 style={{ fontSize: "36px", marginTop: "6rem" }}><b>Como funciona?</b></h2>
            </div>
            <div className="row border rounded justify-content-between" style={{ alignItems: "center", border: "0 solid #e4e4e7", padding: "0px 80px", margin: "2.5rem 3rem" }}>
                <div className="col-6">
                    <h3 className="text-start" style={{ fontWeight: "600", color: "blue" }}>1. Nós enviamos os sensores</h3>
                    <p className="text-start" style={{ fontWeight: "600", fontSize: "16px" }}>Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o sensor na sua empresa. Não necessita passar pelo Wi-Fi industrial e nem falar com a TI.</p>
                </div>
                <div className="col-4">
                    <img src="https://imgix.tractian.com/images/enviamos-sensores.png?auto=format&amp;fit=max&amp;w=828" decoding="async" srcSet="https://imgix.tractian.com/images/enviamos-sensores.png?auto=format&amp;fit=max&amp;w=640 1x, https://imgix.tractian.com/images/enviamos-sensores.png?auto=format&amp;fit=max&amp;w=828 2x"
                        style={{ width: "400px", height: "400px" }} />
                </div>

            </div>
            <div className="row border rounded justify-content-between" style={{ alignItems: "center", border: "0 solid #e4e4e7", padding: "0px 80px", margin: "2.5rem 3rem", backgroundImage: "linear-gradient(to right, #2563eb, #1e40af" }}>
                <div className="col-4">
                    <img src="https://imgix.tractian.com/images/cole-na-maquina.png?auto=format&amp;fit=max&amp;w=828" decoding="async" srcSet="https://imgix.tractian.com/images/cole-na-maquina.png?auto=format&amp;fit=max&amp;w=640 1x, https://imgix.tractian.com/images/cole-na-maquina.png?auto=format&amp;fit=max&amp;w=828 2x"
                        style={{ width: "400px", height: "400px" }} />
                </div>
                <div className="col-6">
                    <h3 className="text-start" style={{ fontWeight: "600", color: "white" }}>2. Cole em suas máquinas</h3>
                    <p className="text-start " style={{ fontWeight: "600", color: "white", fontSize: "16px" }}>Nosso sensor é colado na máquina como um bandaid. Ele é responsável por transmitir os dados de vibração e temperatura do equipamento para a plataforma.</p>

                </div>

            </div>
            <div className="row border rounded justify-content-between" style={{ alignItems: "center", border: "0 solid #e4e4e7", padding: "0px 80px", margin: "2.5rem 3rem" }}>
                <div className="col-6">
                    <h3 className="text-start" style={{ fontWeight: "600", color: "blue" }}>3. Receba Insights valiosos</h3>
                    <p className="text-start" style={{ fontWeight: "600", fontSize: "16px" }}>Nosso sistema centraliza informações precisas sobre suas máquinas, com insights e análises, como saúde do equipamento, detecção de anomalias e variação de espectros.</p>
                </div>
                <div className="col-4">
                    <img src="https://imgix.tractian.com/images/cole-na-maquina.png?auto=format&amp;fit=max&amp;w=828" decoding="async" srcSet="https://imgix.tractian.com/images/cole-na-maquina.png?auto=format&amp;fit=max&amp;w=640 1x, https://imgix.tractian.com/images/cole-na-maquina.png?auto=format&amp;fit=max&amp;w=828 2x"
                        style={{ width: "400px", height: "400px" }} />
                </div>

            </div>
        </div>
    );
}

export default How;
