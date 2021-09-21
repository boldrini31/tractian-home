import React, { useState } from "react";

const SensorPlugAndPLay = () => (
    <div className="container-fluid" role="tabpanel" aria-labelledby="home-tab" style={{ backgroundColor: "rgba(244,244,245)", margin: "0" }}>
        <div className="row" style={{ alignItems: "center", padding: "2rem auto 0 auto" }}>
            <div className="col-6">
                <div style={{ alignItems: "flex-end" }}>
                    <img style={{ objectFit: "contain", height: "372px" }} src="https://imgix.tractian.com/images/sensor-de-vibracao-plug-play.png?auto=format&amp;fit=max&amp;w=3840" />
                </div>
            </div>
            <div className="col-6">
                <div style={{ marginRight: "5rem", padding: ".75rem", marginLeft: ".5rem", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "1.25rem 0" }}>
                        <h3 style={{ lineHeight: "2.25rem", fontSize: "1.5rem", color: "rgba(24,24,27)" }}>Sem gateway, sem enrolação</h3>
                    </div>
                    <p>Nossos sensores enviam dados do seu equipamento através de rede 2g/3g pensando na facilidade de implementação.</p>
                    <p>Basta fixar o sensor no local a ser monitorado e pronto: acompanhe em tempo real a condição da sua máquina.</p>
                </div>
            </div>
        </div>
    </div>
)

const MonitoringOnline = () => (
    <div className="container-fluid" role="tabpanel" aria-labelledby="home-tab" style={{ backgroundColor: "rgba(244,244,245)", margin: "0" }}>
        <div className="row" style={{ alignItems: "center", padding: "2rem auto 0 auto" }}>
            <div className="col-6">
                <div style={{ alignItems: "flex-end" }}>
                    <img style={{ objectFit: "contain", height: "372px" }} src="https://imgix.tractian.com/images/features-header.png?auto=format&fit=max&w=3840" />
                </div>
            </div>
            <div className="col-6">
                <div style={{ marginRight: "5rem", padding: ".75rem", marginLeft: ".5rem", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "1.25rem 0" }}>
                        <h3 style={{ lineHeight: "2.25rem", fontSize: "1.5rem", color: "rgba(24,24,27)" }}>Plataforma que trabalha por você</h3>
                    </div>
                    <p>A plataforma oferece uma visão ampla da condição da sua máquina.</p>
                    <p>Insights automáticos, detecção de folgas mecânica, desalinhamento, desacoplamento e modelos de IA exclusivos da Tractian para cada tipo de máquina.</p>
                </div>
            </div>
        </div>
    </div >
)

const ManagementActives = () => (
    <div className="container-fluid" role="tabpanel" aria-labelledby="home-tab" style={{ backgroundColor: "rgba(244,244,245)", margin: "0" }}>
        <div className="row" style={{ alignItems: "center", padding: "2rem auto 0 auto" }}>
            <div className="col-6">
                <div style={{ alignItems: "flex-end" }}>
                    <img style={{ objectFit: "contain", height: "372px" }} src="https://imgix.tractian.com/images/gestao-de-ativo-ordem-de-servico-automatizada-celular.png?auto=format&fit=max&w=1920" />
                </div>
            </div>
            <div className="col-6">
                <div style={{ marginRight: "5rem", padding: ".75rem", marginLeft: ".5rem", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "1.25rem 0" }}>
                        <h3 style={{ lineHeight: "2.25rem", fontSize: "1.5rem", color: "rgba(24,24,27)" }}>Ordens de serviço automatizadas</h3>
                    </div>
                    <p>Pare de estimar dias de funcionamento para manutenção preventiva.</p>
                    <p>Com o horímetro dos nossos sensores, nossa plataforma gera ordens de serviços automáticas com base em horas de funcionamento.</p>
                </div>
            </div>
        </div>
    </div>
)

function Why() {
    const [activeTab, setActiveTab] = useState("sensorPlugAndPlay")

    return (
        <>
            <div className="container">
                <div className="row justify-content-center" id="myTab" role="tablist">
                    <div className="col-2" style={{ borderBottom: `${activeTab === "sensorPlugAndPlay" ? "2px solid rgba(96, 165, 250)" : "2px solid transparent"}`, padding: ".75rem", }}>
                        <a onClick={() => setActiveTab("sensorPlugAndPlay")} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" role="tab" aria-controls="home" aria-selected="true" style={{ padding: ".75rem", fontWeight: "600", fontSize: ".75rem", color: "blue", cursor: "pointer" }}>SENSOR PLUG & PLAY</a>
                    </div>
                    <div className="col-2" style={{ borderBottom: `${activeTab === "monitoringOnline" ? "2px solid rgba(96, 165, 250)" : "2px solid transparent"}`, padding: ".75rem", }}>
                        <a onClick={() => setActiveTab("monitoringOnline")} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="false" style={{ padding: ".75rem", fontWeight: "600", fontSize: ".75rem", color: "blue", whiteSpace: "nowrap", cursor: "pointer" }}>MONITORAMENTO ONLINE</a>
                    </div>
                    <div className="col-2" style={{ borderBottom: `${activeTab === "managementActives" ? "2px solid rgba(96, 165, 250)" : "2px solid transparent"}`, padding: ".75rem", }}>
                        <a onClick={() => setActiveTab("managementActives")} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" role="tab" aria-controls="contact" aria-selected="false" style={{ padding: ".75rem", fontWeight: "600", fontSize: ".75rem", color: "blue", cursor: "pointer" }}>GESTÃO DE ATIVOS</a>
                    </div>
                </div>
            </div >
            {activeTab === "sensorPlugAndPlay" && <SensorPlugAndPLay />}
            {activeTab === "monitoringOnline" && <MonitoringOnline />}
            {activeTab === "managementActives" && <ManagementActives />}
        </>
    );
}

export default Why;
