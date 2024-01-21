import React from "react";
import "./style.css";
import imgSobre from "../../assets/carros.png";
import Divisor from "../Divisor";
import Form from "../Form";

export default function Principal(){
     return(
        <main>
            <section className="container-primeira-secao">
                <div className="container-capa"></div>
                <div className="container-contra-capa"></div>
                <div className="container-subtitulos">
                    <h2 className="primeira-secao-sub1">AluCar</h2>
                    <h2 className="primeira-secao-sub2">Aluguel de Carros</h2>
                </div>
               
            </section>
            <section className="container-segunda-secao">
                <h2>Sobre nós</h2>
                <p>Há 45 anos atuando na área de locação de veículos
                    com segurança e garantia de satisfação. Temos os 
                    melhores preços e modelos do mercado.
                </p>
                <img src={imgSobre} alt="Imagem Carros" />
                <p>| O compromisso da AluCar é com a qualidade</p><br></br>
                <p>| Os melhores carros estão aqui!</p><br></br>
                <p>| Assistência 24hrs.</p>
            </section>
            <Divisor />
            <Form />
            
        </main>
     );
}