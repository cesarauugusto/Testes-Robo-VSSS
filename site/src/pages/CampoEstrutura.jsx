const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

export default function CampoEstrutura() {
  return (
    <section className="secao" id="campo-estrutura">
      <p className="tag">Estrutura física</p>

      <h2>Campo e estrutura do robô</h2>

      <p>
        A estrutura física do projeto foi desenvolvida considerando as regras da
        categoria IEEE Very Small Size Soccer. Essa etapa envolve o planejamento
        do campo, a modelagem do robô, a organização interna dos componentes e a
        preparação do ambiente para os testes com visão computacional e controle.
      </p>

      <div className="estruturaVertical">
        <article className="estruturaBloco">
          <img
            src={imagePath("campo-vsss.png")}
            alt="Campo da categoria IEEE Very Small Size Soccer"
          />

          <div>
            <h3>Campo da categoria VSSS</h3>

            <p>
              O campo da competição foi construído com base nas regras da
              categoria IEEE Very Small Size Soccer. A estrutura deve possuir
              cor preta, superfície não reflexiva e ser construída em madeira,
              com textura semelhante à de uma mesa de pingue-pongue.
            </p>

            <p>
              As medidas principais do campo são de{" "}
              <strong>1,50 m de comprimento</strong> por{" "}
              <strong>1,30 m de largura</strong>. Além dessas dimensões, o campo
              possui paredes ao redor para evitar que a bola escape durante os
              testes. Essas paredes possuem <strong>5 cm de altura</strong> e{" "}
              <strong>2,5 cm de espessura</strong>.
            </p>

            <p>
              Para evitar que a bola fique presa nos cantos, cada canto do campo
              possui um triângulo retângulo com lados de <strong>7 cm</strong>.
              O gol possui <strong>40 cm de comprimento</strong> e{" "}
              <strong>10 cm de profundidade</strong>. As linhas e marcações
              internas também foram definidas de acordo com as especificações da
              competição.
            </p>

            <ul>
              <li>Campo preto, não reflexivo e construído em madeira.</li>
              <li>Dimensões principais: 1,50 m x 1,30 m.</li>
              <li>
                Paredes laterais com 5 cm de altura e 2,5 cm de espessura.
              </li>
              <li>Cantos com triângulos retângulos de lados iguais a 7 cm.</li>
              <li>Gol com 40 cm de comprimento e 10 cm de profundidade.</li>
              <li>Área do goleiro utilizada nas estratégias defensivas.</li>
            </ul>

            <a
              className="botaoDocumento"
              href="https://drive.google.com/file/d/15ujm5bh02MM3qjBlRszCguBq1YDOuxfm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Ver desenho técnico 2D do campo
            </a>
          </div>
        </article>

        <article className="estruturaBloco">
          <img
            src={imagePath("prototipo-robo.png")}
            alt="Protótipo 3D do robô VSSS"
          />

          <div>
            <h3>Protótipo do robô</h3>

            <p>
              O protótipo do robô foi modelado em software 3D respeitando o
              limite dimensional da categoria. A estrutura foi projetada para
              acomodar os motores, a bateria, a placa controladora e os
              componentes responsáveis pelo acionamento do sistema.
            </p>

            <p>
              Essa modelagem foi importante para organizar os componentes de
              forma compacta e permitir que o robô pudesse se movimentar dentro
              do campo sem ultrapassar as dimensões permitidas pela categoria.
            </p>
          </div>
        </article>

        <article className="estruturaBloco">
          <img
            src={imagePath("componentes-robo.png")}
            alt="Componentes internos do robô VSSS"
          />

          <div>
            <h3>Organização interna dos componentes</h3>

            <p>
              A parte interna do robô foi organizada para facilitar a montagem,
              a manutenção e o acesso aos componentes. A disposição dos
              elementos permite melhor aproveitamento do espaço disponível dentro
              do protótipo.
            </p>

            <p>
              Dentro da estrutura foram posicionados os motores, a bateria e os
              componentes eletrônicos responsáveis pelo recebimento dos comandos
              e pelo acionamento dos motores.
            </p>

            <a
              className="botaoDocumento"
              href="https://drive.google.com/drive/folders/14HOnzzR1LY0sx_cKD8RnJsX6sFZjANC9?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Acessar arquivos de impressão 3D
            </a>
          </div>
        </article>
      </div>

      <div className="secaoInterna">
        <h3>Componentes eletrônicos e mecânicos escolhidos</h3>

        <p>
          A escolha dos componentes eletrônicos e mecânicos foi uma etapa
          essencial no desenvolvimento do robô, pois a categoria Very Small Size
          Soccer exige uma estrutura compacta, leve e capaz de responder
          rapidamente aos comandos do sistema. Por isso, os componentes foram
          selecionados considerando critérios como tamanho físico, capacidade de
          processamento, comunicação sem fio, facilidade de montagem, acionamento
          dos motores e alimentação elétrica.
        </p>

        <p>
          O conjunto foi organizado para caber dentro da carcaça do robô,
          facilitar a integração com o ROS e permitir o controle dos motores de
          forma estável. A seguir são apresentados os principais componentes
          utilizados no projeto e a justificativa técnica para cada escolha.
        </p>

        <div className="componentesGrid">
          <article className="componenteCard">
            <div className="componenteImagemBox">
              <img
                src={imagePath("esp32.png")}
                alt="Placa WeMos D1 R2 WiFi ESP8266 utilizada no robô"
              />
            </div>

            <div className="componenteTexto">
              <span className="componenteTag">Controle embarcado</span>

              <h4>Placa WeMos D1 R2 WiFi ESP8266</h4>

              <p>
                A escolha do microcontrolador é essencial para o robô, pois é
                por meio dele que os comandos enviados pelo sistema são
                recebidos, interpretados e convertidos em sinais de controle para
                os motores. No projeto, foi utilizada a placa{" "}
                <strong>WeMos D1 R2 WiFi ESP8266</strong>, baseada no
                microcontrolador <strong>ESP8266EX</strong>, desenvolvido pela
                Espressif Systems.
              </p>

              <p>
                Essa placa foi escolhida principalmente por possuir{" "}
                <strong>Wi-Fi integrado</strong>, o que elimina a necessidade de
                módulos externos de comunicação sem fio. Isso reduz a quantidade
                de componentes embarcados, simplifica a montagem elétrica e
                diminui o espaço necessário dentro da carcaça do robô.
              </p>

              <p>
                Outro fator importante é o formato da placa, que facilita a
                integração com shields compatíveis e permite uma montagem mais
                organizada. No sistema, a WeMos recebe os comandos provenientes
                do ROS, via comunicação sem fio, e os repassa para o estágio de
                acionamento dos motores.
              </p>
            </div>
          </article>

          <article className="componenteCard">
            <div className="componenteImagemBox">
              <img
                src={imagePath("ponteh.png")}
                alt="L298P Motor Shield utilizado para acionar os motores"
              />
            </div>

            <div className="componenteTexto">
              <span className="componenteTag">Acionamento dos motores</span>

              <h4>L298P Motor Shield</h4>

              <p>
                Para controlar os motores do robô, foi utilizado o{" "}
                <strong>L298P Motor Shield</strong>, baseado no chip{" "}
                <strong>L298P</strong>, desenvolvido pela STMicroelectronics.
                Esse componente atua como estágio de potência entre a placa
                controladora e os motores, pois o microcontrolador não é capaz de
                fornecer diretamente a corrente necessária para movimentar o
                robô.
              </p>

              <p>
                Esse driver é capaz de acionar dois motores simultaneamente, com
                corrente de acionamento de até <strong>2 A</strong>. Essa
                característica atende à configuração diferencial do robô, na qual
                as rodas direita e esquerda precisam ser controladas de forma
                independente para permitir avanço, recuo, curvas e correções de
                orientação.
              </p>

              <p>
                A escolha desse shield também foi motivada pela facilidade de
                conexão direta com a WeMos D1 R2 WiFi ESP8266. Essa característica
                simplifica a montagem, reduz a quantidade de fios e torna o
                sistema mais compacto, fator importante para um robô de dimensões
                reduzidas.
              </p>
            </div>
          </article>

          <article className="componenteCard">
            <div className="componenteImagemBox">
              <img
                src={imagePath("motor.png")}
                alt="Micro Motor Gearbox utilizado no robô"
              />
            </div>

            <div className="componenteTexto">
              <span className="componenteTag">Sistema de locomoção</span>

              <h4>Micro Motor Gearbox Pololu 600 rpm / 6 V</h4>

              <p>
                O motor utilizado no projeto foi o{" "}
                <strong>Micro Motor Gearbox</strong>, da Pololu, com velocidade
                de aproximadamente <strong>600 rpm a vazio</strong> e tensão
                nominal de <strong>6 V</strong>. Esse tipo de motor é adequado
                para robôs móveis compactos porque combina motor DC com uma
                caixa de redução mecânica.
              </p>

              <p>
                A caixa de redução é importante porque melhora a relação entre
                velocidade e torque. Em vez de utilizar apenas um motor DC comum,
                o motor com redução permite uma resposta mecânica mais
                controlável, facilitando ajustes de velocidade, mudanças de
                direção e correções de trajetória feitas pelo algoritmo.
              </p>

              <p>
                Em um robô diferencial, no qual cada roda é controlada de forma
                independente, pequenas variações na velocidade dos motores são
                usadas para girar o robô, alinhar sua direção com a bola e
                executar as estratégias de movimentação. Por isso, motores com
                caixa de redução são mais adequados para o controle fino do
                deslocamento do robô.
              </p>
            </div>
          </article>

          <article className="componenteCard">
            <div className="componenteImagemBox">
              <img
                src={imagePath("bateria.png")}
                alt="Bateria LiPo 2S utilizada no robô"
              />
            </div>

            <div className="componenteTexto">
              <span className="componenteTag">Alimentação elétrica</span>

              <h4>Bateria LiPo 2S 7,4 V / 500 mAh / 35C</h4>

              <p>
                Para alimentar o robô, foi utilizada uma bateria{" "}
                <strong>Lithium Polymer (LiPo)</strong> de{" "}
                <strong>2 células</strong>, com dimensões aproximadas de{" "}
                <strong>55 mm por 30 mm</strong>, tensão nominal de{" "}
                <strong>7,4 V</strong>, capacidade de <strong>500 mAh</strong>{" "}
                e regime de descarga de <strong>35C</strong>.
              </p>

              <p>
                A escolha dessa bateria está relacionada à necessidade de
                fornecer energia suficiente para o conjunto eletrônico e para os
                motores, sem ocupar muito espaço dentro da carcaça. Como o robô
                possui dimensões reduzidas, a bateria precisa ser compacta, leve
                e capaz de fornecer corrente adequada durante acelerações,
                mudanças de direção e correções rápidas de movimento.
              </p>

              <p>
                A tensão nominal de 7,4 V é compatível com a alimentação do
                estágio de potência dos motores, enquanto a capacidade de 500 mAh
                atende aos testes práticos do protótipo. O regime de descarga de
                35C também é relevante, pois indica a capacidade da bateria de
                fornecer corrente em momentos de maior demanda, como arrancadas e
                manobras rápidas.
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="secaoInterna">
        <h3>Relação entre campo, câmera e robô</h3>

        <img
          className="imagemFluxoProjeto"
          src={imagePath("fluxo-campo-camera-robo.png")}
          alt="Diagrama da relação entre campo, câmera e robôs"
        />

        <p>
          Durante os testes, a câmera deve ser posicionada acima do campo, de
          forma centralizada e reta, apontada perpendicularmente para baixo. Esse
          posicionamento é importante para que o campo seja capturado como uma
          imagem praticamente 2D, reduzindo distorções de perspectiva e
          facilitando o processamento por visão computacional.
        </p>

        <p>
          Quando a câmera está alinhada corretamente, o sistema consegue
          identificar com mais precisão a posição da bola, dos robôs e das
          marcações do campo. Por isso, antes dos testes, é necessário ajustar a
          altura, o enquadramento e o alinhamento da câmera para que todo o campo
          apareça na imagem.
        </p>

        <img
          className="imagemFluxoProjeto"
          src={imagePath("visao-superior-campo.png")}
          alt="Exemplo da visão superior do campo capturada pela câmera"
        />

        <div className="fluxoSistema fluxoClaro">
          <span>Campo</span>
          <strong>→</strong>
          <span>Câmera superior</span>
          <strong>→</strong>
          <span>ROS</span>
          <strong>→</strong>
          <span>OpenCV</span>
          <strong>→</strong>
          <span>Robô</span>
        </div>
      </div>
    </section>
  );
}