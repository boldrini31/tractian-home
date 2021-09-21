import React from "react";
import Ambev from "../assets/logo-ambev.png";
import Arcelor from "../assets/logo-arcelor.png";
import Ciser from "../assets/logo-ciser.png";
import Eletro from "../assets/logo-electrolux.png";
import Ioch from "../assets/logo-iochpemaxion.png";
import Marca from "../assets/logo-marcaambiental.png";
import Marilan from "../assets/logo-marilan.png";
import Master from "../assets/logo-master.png";
import Suzano from "../assets/logo-suzano.png";
import Yara from "../assets/logo-yara.png";

function Carousel() {
    return (
        <div className="container-fluid" style={{ margin: "20px 0" }}>
            <div className="row justify-content-around">
                <img src={Ambev} style={{ height: "70px", width: "130px" }}></img>
                <img src={Arcelor} style={{ height: "70px", width: "130px" }}></img>
                <img src={Ciser} style={{ height: "70px", width: "130px" }}></img>
                <img src={Eletro} style={{ height: "70px", width: "130px" }}></img>
                <img src={Ioch} style={{ height: "70px", width: "130px" }}></img>
                <img src={Marca} style={{ height: "70px", width: "130px" }}></img>
                <img src={Marilan} style={{ height: "70px", width: "130px" }}></img>
                <img src={Master} style={{ height: "70px", width: "130px" }}></img>
                <img src={Suzano} style={{ height: "70px", width: "130px" }}></img>
                <img src={Yara} style={{ height: "70px", width: "130px" }}></img>
            </div>
        </div>
    );
}

export default Carousel;
