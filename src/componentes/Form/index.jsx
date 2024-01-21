import React from "react";
import "./style.css";

export default function Form() {
    return(
        <div className="container-topo-form">
            <div>
               <h2>Análise de cadastro</h2>
               <p>Preencha os campos abaixo e analisaremos
                  seus dados. Se tudo estiver correto ligaremos
                  para marcar uma visita a sua loja.
               </p>
            </div>
            <form action="">
                <fieldset>
                   <legend>Dados pessoais</legend>

                   <label htmlFor="">Nome</label>
                   <input type="text" placeholder="digite seu nome" />

                   <label htmlFor="">Data de Nascimento</label>
                   <input type="date" />

                   <label htmlFor="">Telefone</label>
                   <input type="tel" placeholder="(XX)XXXXX-XXXX" />
                </fieldset>

                <fieldset>
                   <legend>CNH</legend>

                   <label htmlFor="">Número do Registro </label>
                   <input type="number" placeholder="informe o número da sua CNH"/>

                   <label htmlFor="">Validade</label>
                   <input type="date" />
                </fieldset>

                <fieldset>

                    <legend>Carro</legend>

                    <label htmlFor="">Modelo do Carro</label>

                    <select name="carros">Modelo do Carro

                    <option selected value="">Escolha um carro</option>
                    <optgroup label="Volksvagem">
                        <option value="gol">Gol</option>
                        <option value="golf">Golf</option>
                        <option value="fox">Fox</option>
                    </optgroup>

                    <optgroup label="Fiat">
                        <option value="uno">Uno</option>
                        <option value="siena">Siena</option>
                        <option value="palio">Pálio</option>
                    </optgroup>

                    <optgroup label="Nissan">
                        <option value="frontier">Frontier</option>
                        <option value="versa">Versa</option>
                        <option value="skiline">skiline GT-R</option>
                    </optgroup>
                    </select>

                </fieldset>
                    

                <button>Enviar dados</button>
            </form> 
        </div>
    );
}