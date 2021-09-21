import React from "react";


function Form() {
    return (
        <div classNameName="container-fluid" style={{ margin: "3rem auto", padding: "1.25rem" }}>
            <div className="row justify-content-center">
                <div className="col-8">
                    <h2 style={{ fontWeight: "600", margin: "1.5rem auto", fontSize: "2.25rem", lineHeight: "2.5rem", letterSpacing: "-.025em" }}>Melhore os seus processos de manutenção</h2>
                </div>
                <div className="col-8">
                    <p style={{ fontWeight: "600", }}>Preencha o fomulário para uma demonstração.</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 borded" style={{ padding: "1.5rem", margin: "2.5rem 0px", borderRadius: ".75rem", backgroundImage: "linear-gradient(to right, #2563eb, #1e40af)" }}>
                    <form action="#" className="">
                        <div style={{ flexDirection: "column", display: "flex" }}>
                            <span className=""></span>
                            <div style={{ marginBottom: ".75rem", flexDirection: "column", display: "flex" }}>
                                <label className="text-white" style={{ fontWeight: "600", textAlign: "left" }} htmlFor="firstname">Nome</label>
                                <input type="text" name="firstname" style={{ padding: ".5rem", borderRadius: ".375rem", border: " 0 solid #e4e4e7" }} placeholder="Insira seu nome"></input>
                                <span className=""></span>
                            </div>
                            <div style={{ marginBottom: ".75rem", flexDirection: "column", display: "flex" }}>
                                <label className="text-white" style={{ fontWeight: "600", textAlign: "left" }} htmlFor="role">Cargo</label>
                                <input type="text" name="jobtitle" style={{ padding: ".5rem", borderRadius: ".375rem", border: " 0 solid #e4e4e7" }} placeholder="Insira seu cargo"></input>

                            </div>
                            <div style={{ marginBottom: ".75rem", flexDirection: "row", display: "flex" }}>
                                <div className="col-8" style={{ marginRight: "1.25rem", flexDirection: "column", display: "flex" }}>
                                    <label className="text-white" style={{ fontWeight: "600", textAlign: "left" }} htmlFor="email">E-mail profissional</label>
                                    <input type="text" name="email" style={{ padding: ".5rem", borderRadius: ".375rem", border: " 0 solid #e4e4e7" }} placeholder="Insira seu e-mail profissional"></input>
                                </div>
                                <div className="col-4" style={{ flexDirection: "column", display: "flex", flex: "auto" }}>
                                    <label className="text-white" style={{ fontWeight: "600", textAlign: "left" }} htmlFor="phone">Telefone</label>
                                    <input name="phone" style={{ padding: ".5rem", borderRadius: ".375rem", border: " 0 solid #e4e4e7" }} placeholder="(XX) XXXX-XXXX"></input>
                                </div>
                            </div>
                            <div style={{ marginTop: "1.25rem", textAlign: "left" }}>
                                <label className="" htmlFor="machines">
                                    <span className="text-white" style={{ fontWeight: "600", textAlign: "left" }}>Quantidade de pontos monitorados: </span>
                                </label>
                                <div className="justify-content-between" style={{ marginBottom: ".75rem", flexWrap: "wrap", flexDirection: "row", display: "flex" }}>
                                    <div style={{ marginRight: ".75rem", marginTop: ".75rem", flexDirection: "row", alignItems: "center", display: "flex" }}>
                                        <label className="text-white" style={{ cursor: "pointer" }}>
                                            <input type="radio" name="machines" value="10-20" style={{ fontWeight: "600", marginRight: ".5rem" }}></input>10 a 20
                                        </label>
                                    </div>
                                    <div style={{ marginRight: ".75rem", marginTop: ".75rem", flexDirection: "row", alignItems: "center", display: "flex" }}>
                                        <label className="text-white" style={{ cursor: "pointer" }}>
                                            <input type="radio" name="machines" value="21-30" style={{ fontWeight: "600", marginRight: ".5rem" }}></input>21 a 30
                                        </label>
                                    </div>
                                    <div style={{ marginRight: ".75rem", marginTop: ".75rem", flexDirection: "row", alignItems: "center", display: "flex" }}>
                                        <label className="text-white" style={{ cursor: "pointer" }}>
                                            <input type="radio" name="machines" value="31-50" style={{ fontWeight: "600", marginRight: ".5rem" }}></input>31 a 50
                                        </label>
                                    </div>
                                    <div style={{ marginRight: ".75rem", marginTop: ".75rem", flexDirection: "row", alignItems: "center", display: "flex" }}>
                                        <label className="text-white" style={{ cursor: "pointer" }}>
                                            <input type="radio" name="machines" value="50+" style={{ fontWeight: "600", marginRight: ".5rem" }}></input>Mais de 50
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="text-white" style={{ whiteSpace: "nowrap", padding: ".5rem 1rem", marginTop: ".75rem", marginLeft: "2.5rem", marginRight: "2.5rem", fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "600", justifyContent: "center", borderRadius: ".375rem", background: "#22C55E", cursor: "pointer", border: "0 solid #e4e4e7" }}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}

export default Form;
