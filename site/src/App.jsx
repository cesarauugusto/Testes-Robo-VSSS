import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AmbienteROS from "./pages/AmbienteROS";
import CampoEstrutura from "./pages/CampoEstrutura";
import SistemaFuncionamento from "./pages/SistemaFuncionamento";
import Autores from "./pages/Autores";
import Referencias from "./pages/Referencias";

function App() {
  return (
    <main className="app" id="topo">
      <Header />

      <section className="hero">
        <p className="tag">Projeto de pesquisa e desenvolvimento</p>

        <img
          className="logoHeroIeee"
          src={`${import.meta.env.BASE_URL}images/ieee.png`}
          alt="Logo da IEEE"
        />

        <img
          className="logoHeroIfce"
          src={`${import.meta.env.BASE_URL}images/logo-ifce.png`}
          alt="Logo do IFCE"
        />

        <h1>
          Plataforma Open Source para Reprodução de um Sistema de Competição Very
          Small Size Soccer
        </h1>

        <p className="descricao">
          Esta plataforma organiza de forma pública e didática o desenvolvimento
          de um projeto de futebol de robôs da categoria IEEE Very Small Size
          Soccer, reunindo ambiente ROS, visão computacional, controle PID,
          estrutura física, algoritmos, códigos de teste e resultados.
        </p>

        <div className="botoes">
          <a href="#sobre">Sobre o projeto</a>
          <a href="#reproducao">Como reproduzir</a>
          <a href="#campo-estrutura">Campo e estrutura</a>
          <a href="#ambiente-ros">Ambiente ROS</a>
          <a href="#sistema">Sistema completo</a>
        </div>
      </section>

      <section className="secao" id="sobre">
        <p className="tag">Apresentação</p>

        <h2>Sobre o projeto</h2>

        <p>
          Este projeto apresenta uma plataforma aberta voltada para estudantes,
          pesquisadores e entusiastas da robótica que desejam compreender e
          reproduzir um sistema Very Small Size Soccer. A proposta reúne
          informações sobre o campo, o protótipo do robô, a eletrônica
          embarcada, o ambiente ROS, a visão computacional, o controle PID e as
          estratégias aplicadas aos robôs.
        </p>

        <p>
          A plataforma tem caráter didático e open source. O objetivo não é
          apenas apresentar o resultado final, mas organizar todo o processo de
          desenvolvimento para que outros estudantes possam estudar, reproduzir,
          modificar e aprimorar o sistema.
        </p>
      </section>

      <section className="secao secaoFluxograma" id="reproducao">
  <p className="tag">Etapas do projeto</p>

  <h2>Etapas para montar e validar o sistema</h2>

  <p>
    A sequência abaixo resume as principais etapas para montar, configurar e
    testar o projeto Very Small Size Soccer, desde a construção do campo até a
    integração completa entre ROS, câmera e robô.
  </p>

  <div className="etapasProjetoGrid">
    <div className="etapaProjetoCard">
      <span className="etapaNumero">01</span>
      <h3>Construção do campo e estrutura do robô</h3>
      <p>
        Montagem do campo físico conforme as regras da categoria IEEE Very Small
    Size Soccer, modelagem da estrutura do robô, impressão 3D da carcaça e
    organização interna dos componentes eletrônicos e mecânicos.
      </p>
    </div>

    <div className="etapaProjetoCard">
      <span className="etapaNumero">02</span>
      <h3>Instalação do Ubuntu 20.04</h3>
      <p>
        Preparação do sistema operacional utilizado no projeto, escolhido por sua
        compatibilidade com o ROS Noetic.
      </p>
    </div>

    <div className="etapaProjetoCard">
      <span className="etapaNumero">03</span>
      <h3>Instalação do ROS Noetic</h3>
      <p>
        Instalação do ambiente ROS, configuração do workspace Catkin e preparação
        da base do sistema.
      </p>
    </div>

    <div className="etapaProjetoCard">
      <span className="etapaNumero">04</span>
      <h3>Teste de conexão do robô</h3>
      <p>
        Validação da comunicação entre o ROS e o robô usando{" "}
        <strong>rosserial_python</strong> e o controle pelo teclado{" "}
        <strong>WASD</strong>.
      </p>
    </div>

    <div className="etapaProjetoCard">
      <span className="etapaNumero">05</span>
      <h3>Calibração de cores e câmera</h3>
      <p>
        Verificação do tópico da câmera com <strong>usb_cam</strong> e ajuste
        das cores HSV para identificar corretamente a bola e o robô.
      </p>
    </div>

    <div className="etapaProjetoCard etapaDestaque">
      <span className="etapaNumero">06</span>
      <h3>Integração do sistema completo</h3>
      <p>
        Execução conjunta do ROS, câmera, comunicação com o robô e algoritmos
        finais, como <strong>goleiro.py</strong> ou <strong>jogador.py</strong>.
      </p>
    </div>
  </div>
</section>

      <CampoEstrutura />

      <section className="secao" id="recursos">
        <p className="tag">Materiais de apoio</p>

        <h2>Recursos principais</h2>

        <p>
          Os links abaixo reúnem parte da documentação utilizada para instalação
          do ROS, configuração da câmera USB, comunicação com o ESP usando
          rosserial_python e entendimento dos pacotes utilizados no projeto.
        </p>

        <div className="recursosCards">
          <a
            className="recursoItem"
            href="https://wiki.ros.org/Distributions"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Distributions - ROS Wiki</h3>
            <p>
              Página com as distribuições do ROS e suas compatibilidades com as
              versões do Ubuntu.
            </p>
          </a>

          <a
            className="recursoItem"
            href="https://wiki.ros.org/noetic/Installation/Ubuntu"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Instalação do ROS Noetic</h3>
            <p>
              Documentação oficial com o passo a passo para instalar o ROS
              Noetic no Ubuntu.
            </p>
          </a>

          <a
            className="recursoItem"
            href="https://wiki.ros.org/usb_cam"
            target="_blank"
            rel="noreferrer"
          >
            <h3>usb_cam - ROS Wiki</h3>
            <p>
              Material oficial sobre o pacote usb_cam, utilizado para capturar a
              imagem da câmera no ROS.
            </p>
          </a>

          <a
            className="recursoItem"
            href="https://wiki.ros.org/rosserial_python"
            target="_blank"
            rel="noreferrer"
          >
            <h3>rosserial_python - ROS Wiki</h3>
            <p>
              Documentação utilizada para realizar a comunicação entre o ROS e o
              ESP no projeto.
            </p>
          </a>

          <a
            className="recursoItem"
            href="https://github.com/ros-drivers/usb_cam"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Repositório usb_cam</h3>
            <p>
              Repositório oficial do driver usb_cam, usado como apoio para
              instalação e configuração.
            </p>
          </a>

          <a
            className="recursoItem"
            href="https://www.youtube.com/watch?v=Fc6qsprvia4&t=11s"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Vídeo explicativo de apoio</h3>
            <p>
              Vídeo utilizado como apoio para entender melhor a conexão do robô
              com o ROS.
            </p>
          </a>

          <a
            className="recursoItem"
            href="https://github.com/cesarauugusto/Categoria-Very-Small-Size-Soccer-IFCE-Sobral"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Repositório do projeto VSSS</h3>
            <p>
              Repositório principal com códigos, testes, estrutura do robô e
              programas finais do projeto.
            </p>
          </a>
        </div>
      </section>

      <AmbienteROS />

      <SistemaFuncionamento />

      <Autores />

      <Referencias />

      <Footer />
    </main>
  );
}

export default App;