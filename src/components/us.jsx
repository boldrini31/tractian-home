import React from "react";


function Us() {
    return (
        <div className="container-fluid " style={{
            backgroundImage: "linear-gradient(to right, #2563eb, #1e40af)"
        }}>
            < div className="row justify-content-around" style={{ alignItems: "center" }}>
                <div className="col-4">
                    <img style={{ height: "350px", width: "430px" }} src="https://imgix.tractian.com/images/leo-e-mih.png?auto=format&amp;fit=max&amp;w=1080" decoding="async" srcSet="https://imgix.tractian.com/images/leo-e-mih.png?auto=format&amp;fit=max&amp;w=640 1x, https://imgix.tractian.com/images/leo-e-mih.png?auto=format&amp;fit=max&amp;w=1080 2x" ></img>
                </div>
                <div className="col-6" style={{ textAlign: "left" }}>
                    <h1 className="text-white" style={{ fontSize: "1.875rem", lineHeight: "2.25rem", fontWeight: "700" }}>FAÇA PARTE DO TIME! 🧢</h1>
                    <p className="text-white" style={{ fontSize: "1.125rem", lineHeight: "1.75rem", marginTop: ".75rem", marginBottom: "1.5rem" }}>Confira as posições abertas e venha fazer parte de um time de alta performance</p>
                    <a className="text-white" href="/calculadora"
                        style={{ fontSize: "1.125rem", lineHeight: "1.75rem", background: "#22C55E", padding: ".5rem 1rem", borderRadius: ".375rem", textDecoration: "none" }}>Veja nossas vagas!</a>
                </div>
            </div>
        </ div>
    );
}

export default Us;
