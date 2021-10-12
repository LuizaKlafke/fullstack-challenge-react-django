import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
     
  <div className={styles.home}>

      <Head>
        <title>Duodígito</title>
        <meta charSet="utf-8" />
        <a rel="icon" href="/brigde.png" />
    
      </Head>

    {/* inicio /container  */}
    <div className={styles.container}>
      {/* inicio topo */}
      <div className={styles.topo}>
        
        <a href="./">
          <div className={styles.logo}>
            <h1>Brigde</h1>
          </div>
        </a>

        <div className={styles.menu}>
          <ul>
            <li>
              <a className={styles.home} href="./">Página Inicial</a>
            </li>
            <li>
              <a href="calculadora">Calculadora</a>
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
              
              Calcule o <strong> menor </strong> <br/> número real <div className={styles.destaque}>
                 Duodígito
                 <div className={styles.traco}>_</div>
              </div>

            </h1>

            <p>
            Um número duodigito é aquele cujo seus algarismos tem no máximo 2 números distintos. Os números 101, 322, 888 são exemplos de Duodígitos.
            </p>

            
            <a className={styles.comecar} href="calculadora">Vamos começar?</a>

          </div>

          <div className={styles.segunda}>

            <img className={styles.imgPrincipal} src="fundo-principal.png"/>

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
