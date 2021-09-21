import React from "react";
import Button from "../utils/button/button";

function Demo() {
    return (
        <div style={{
            width: "100 %",
            backgroundImage: "linear-gradient(to right, #1e3a8a, #2563eb)",
        }}>
            <div className="container" style={{ margin: "auto" }}>
                <div className="row" style={{ width: "100%", alignItems: "center" }}>
                    <div className="col-7 justify-content-left" style={{ padding: "24px 32px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className=" text-white" style={{ textAlign: "Left", fontSize: "20px", marginBottom: "16px" }}>
                                        Monitoramento de máquinas Tractian:</h2>
                                </div>
                                <div className="col-12">
                                    <h1 className="text-white lg:text-4xl text-xl font-semibold" style={{ textAlign: "Left" }}>
                                        O sistema preditivo mais completo do mercado</h1>
                                </div>
                                <div className="col-12">
                                    <h4 className="text-white font-light sm:text-lg my-6 pr-2" style={{ textAlign: "Left", fontSize: "20px", margin: "24px 0px" }}>
                                        Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da TRACTIAN.</h4>
                                </div>
                                <div className="col-12">
                                    <Button float="left">Demonstração</Button>
                                </div>
                                <div className="col-12">
                                    <p className="text-white font-light mt-4" style={{ textAlign: "Left", marginTop: "1rem" }}>Já é cliente?<span> </span>
                                        <a href="#" target="_blank" className="font-semibold text-white" style={{ fontWeight: "600", textDecoration: "none" }}>Acesse aqui.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5" style={{ padding: "32px 6px", alignItems: "center" }}>
                        <img src="https://arsenaltechno.com/wp-content/uploads/2016/12/robo-automacao.gif"></img>

                    </div>
                </div>
            </div >
            <img src="https://imgix.tractian.com/images/ondas.svg" width="100%" height="auto"></img>
        </div >
    );
}

export default Demo;
