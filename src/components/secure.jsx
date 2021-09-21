import React from "react";


function Secure() {
    return (
        <div className="container-fluid" style={{ padding: "8rem 2rem" }}>
            <div className="row">
                <h2 className="text-center">Suas máquinas mais seguras.</h2>
            </div>
            <div className="row align-items-center" >
                <div style={{ width: "16rem", height: ".25rem", backgroundImage: "linear-gradient(to right, #2563eb, #1e40af", margin: "1.5rem auto 1rem auto", borderTopLeftRadius: ".25rem", borderTopRightRadius: ".25rem" }}>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-3 border-end">
                    <h6 className="fw-bold" style={{ fontSize: "3.75rem", lineHeight: "1" }}>90%</h6>
                    <p style={{ fontSize: "1rem", lineHeight: "1.5rem", margin: "1.5rem .75rem", letterSpacing: ".1em", fontWeight: "600" }}>DE ASSERTIVIDADE DOS INSIGHTS GERADOS PELA PLATAFORMA.</p>
                </div>
                <div className="col-3 border-end">
                    <h6 className="fw-bold" style={{ fontSize: "3.75rem", lineHeight: "1" }}>45%</h6>
                    <p style={{ fontSize: "1rem", lineHeight: "1.5rem", margin: "1.5rem .75rem", letterSpacing: ".1em", fontWeight: "600" }}>AUMENTO DE CONFIABILIDADE DAS MÁQUINAS COM SISTEMA TRACTIAN.</p>
                </div>
                <div className="col-3 ">
                    <h6 className="fw-bold" style={{ fontSize: "3.75rem", lineHeight: "1" }}>30%</h6>
                    <p style={{ fontSize: "1rem", lineHeight: "1.5rem", margin: "1.5rem .75rem", letterSpacing: ".1em", fontWeight: "600" }}>REDUÇÃO DAS OCORRÊNCIAS DE ÚLTIMA HORA NA MANUTENÇÃO.</p>
                </div>
            </div>
        </div>
    );
}

export default Secure;
