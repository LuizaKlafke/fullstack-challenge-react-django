import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import React from 'react';


import api from '../services/api';



export default function Calculadora() {

  const [duodigitos, setDuodigitos] = useState([]);
  
  const [entrada, setEntrada] = useState(0);
  const [tempoExecucao, setTempoExecucao] = useState(0);
  const [duodigito, setDuodigito] = useState(0);
  
    async function handleConfirm(){
        console.log(
            entrada,
            tempoExecucao,
            duodigito, 
        );

      const { data } = await api.post(`duodigitos/`, {
          entrada, 
          tempoExecucao, 
          duodigito, 
      });
  
        setEntrada(0);
        setTempoExecucao(0);
        setDuodigito(0);
    
    }

  return (
     
  <div className={styles.calculadora}>

      <Head>
        <title>Calculadora</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/brigde.png" />
    
      </Head>

    {/* inicio /container  */}
    <div className={styles.container}>
      {/* inicio topo */}
      <div className={styles.topo}>
        
        <a href="./">
          <div className={styles.logo}>
            <h1> Brigde</h1>
          </div>
        </a>

        <div className={styles.menu}>
          <ul>
            <li>
              <a href="./">Página Inicial</a>
            </li>
            <li>
              <a className={styles.calculadora}  href="calculadora">Calculadora</a>
            </li>
            <li>
              <a href="historico">Histórico</a>
            </li>
            <li>
              <a href="sobre-mim">Sobre mim</a>
            </li>
          </ul>
        </div>
      
      </div>{/* fim /topo */}

      <main className={styles.main}>

        {/* inicio conteudo */}
        <div className={styles.conteudo}>
          
          <div className={styles.primeira}>

            <h1>
              
              Vamos <div className={styles.destaque}>
                Começar?
              </div>

            </h1>

            <div className={styles.containerParagrafo}>
              <p>
                Nosso aplicativo realiza o cálculo do menor número real Duodígito múltiplo de X, onde X deverá ser um valor maior que 100 informado pelo usuário.
              </p>
            </div>




            <div className={styles.formulario}>

              <img className={styles.imgForms} src="dev-icon.png"/>

              <form>
                
                <div className={styles.containerForms}>
                  <input 
                  className={styles.entrada}
                  type="number" 
                  name="entrada" 
                  min="101"
                  value={entrada}
                  placeholder="Escolha número real maior que 100" 
                  onChange={e => setEntrada(+e.target.value)}
                  />
                  {/* <span class="validity"></span> */}

                  <input className={styles.calcular}
                  type="button"
                   value="Calcular"
                   onClick={handleConfirm}
                   />
                  
                  <input 
                  className={styles.resultado} 
                  type="number" 
                  name="resultado" 
                  placeholder="Resultado" 
                  readOnly={true}
                  onChange={e => setEntrada(+e.target.value)}
                  />

                  <input 
                  className={styles.tempo} 
                  type="number" 
                  name="tempo" 
                  placeholder="Tempo de execução" 
                  readOnly={true}
                  />

                  <input 
                  className={styles.limpar} 
                  type="reset" 
                  value="Limpar"
                  />

                </div>
              
                </form>

              
            </div>

        
          </div>

        </div>{/* fim /conteudo */}

      </main>
    
    
    </div>{/* fim /container */}

    {/* inicio /footer */}
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div className={styles.texto}>
          <h2>Todos os direitos reservados à Luiza Klafke</h2>
          <span>Contato: luizak2306@gmail.com | +55 (51) 9 8209-9438</span>
        </div>

        <ul className={styles.links}>

          <li>
            <a href="https://github.com/LuizaKlafke">
              <img src="git-icon.png"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/luiza-klafke/">
              <img src="linkedin-icon.png"/>
            </a>
          </li>
        </ul>

      </div>

      <div className={styles.clear}></div>

    </footer>{/* fim /footer */}

  </div>
  )
}
