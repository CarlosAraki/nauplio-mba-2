import React, { Component } from "react";
import Fade from "react-reveal";
import Slide from "react-reveal";

class Artigo extends Component {

  // getRandomColor() {
  //   let letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // } 


  render() {
    if (!this.props.data) return null;

    // constteam.barbara;

    // const skills = this.props.data.team.barbara.skills.map((skills) => {
    //   const backgroundColor = this.getRandomColor();
    //   const className = "bar-expand " + skills.name.toLowerCase();
    //   const width = skills.level;

    //   return (
    //     <li key={skills.name}>
    //       <span style={{ width, backgroundColor }} className={className}></span>
    //       <em>{skills.name}</em>
    //     </li>
    //   );
    // });

    // const personalidade = this.props.data.team.barbara.personalidade.map((personalidade) => {
    //   const backgroundColor = this.getRandomColor();
    //   const className = "bar-expand " + personalidade.name.toLowerCase();
    //   const width = personalidade.level;

    //   return (
    //     <li key={personalidade.name}>
    //       <span style={{ width, backgroundColor }} className={className}></span>
    //       <em>{personalidade.name}</em>
    //     </li>
    //   );
    // });


    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={"images/nauplio.png"}
                alt="Logo Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h1>Desafio 2 - Equipe Náuplio</h1>
              <hr/>
              <h2>PROBLEMA</h2>
              <p>
                A Argo Menthor enfrenta dificuldades na implantação da sua filial em Dubai, em razão de diferenças culturais. Assim, estão estruturando um projeto nas três frentes seguintes:
              </p>
              <p>{'\u2022'+"dificuldades na contratação de mulheres;"}</p>
              <p>{'\u2022'+"dificuldades na adaptação dos funcionários transferidos de outra parte do mundo para esse local, principalmente as mulheres;"}</p>
              <p>{'\u2022'+"Dificuldades com os trainees recém-saídos das universidades locais, os quais possuem muitos gaps de formação em relação às competências essenciais da Argo Menthor."}</p>
              <p>
              O objetivo é implantar um processo de aprendizagem organizacional que fomente e multiplique a missão da Argo Menthor, utilizando mão de obra local, inclusive mais mulheres, mas respeitando a cultura local.
              </p>
              <h2>ESTUDO DE CASO</h2>
              <p>
              A equipe Náuplio pesquisou cases de sucesso, que trouxeram soluções criativas e eficazes para problemas semelhantes aos enfrentados pela Argo Menthor. Dentre os cases avaliados, decidimos destacar a experiência da Whirlpool Corporation, em especial no que se refere ao primeiro ponto a ser resolvido (o estímulo a contratações que privilegiem a diversidade, com especial atenção à contratação de mulheres).
              </p>
              <p>{'\u2022'+"Sobre a Whirlpool: a Whirlpool Corporation no Brasil é o negócio de eletrodomésticos da Whirlpool S.A., subsidiária da Whirlpool Corporation – líder em eletrodomésticos para cozinha e lavanderia -, presente no país com as marcas Brastemp, Consul, KitchenAid, Compra Certa e B.blend. É uma sociedade anônima de capital aberto, com 14,5 mil empregados no Brasil. Atualmente, há 43% de mulheres no time da Whirlpool no Brasil. O board da alta liderança é composto de 34% de mulheres – considerando Directors, Sr. Directors e VPs."}</p>
              <p>{'\u2022'+"Valores da Whirlpool: para esta empresa, diversidade e inclusão não são apenas ideais, mas princípios reforçados continuamente junto à força de trabalho. Assim, o tema está presente nos valores da empresa: “Integridade. Respeito. Inclusão e Diversidade. One Whirlpool. Espírito de Vitória”. Desde 2012, a Whirpool promove discussões sobre Diversidade e Inclusão no ambiente de trabalho com os seus colaboradores. Em 2019, realizou a Semana Global de Inclusão, idealizado por comitês como o Pride, focado na comunidade LGBTQI+, e o Women’s Network, que aborda o avanço das mulheres no mundo corporativo. Os valores da empresa foram discutidos valores em painéis e rodas de conversas, já que a Whirlpool acredita que a inclusão traz uma experiência de pertencimento, de forma que a diversidade trazida pelos empregados contribui com todo o sucesso da organização."}</p>
              <p>{'\u2022'+"Iniciativas da Whirlpool: Verificamos diversas iniciativas da Whirlpool em prol da diversidade e inclusão no ambiente de trabalho. Tratando-se de um assunto complexo e multifatorial, diversas abordagens são utilizadas:"}</p>
              <p>{'\u2022'+" "}</p>
              <h2>Trabalhos Voluntários</h2>
              <p>{'\u2022'+" "}</p>
              <div className="row">
                <div className="columns contact-details">
                {/* <Slide left duration={1300}>
                  <div className="row skill">
                    
                    <div className="nine columns main-col">
                      <h2>Comportamento</h2>

                      <div className="bars">
                        <ul className="skills">{skills}</ul>
                      </div>
                    </div>
                  </div>
                </Slide> */}
                </div>
                <div className="columns contact-details">
                  {/* <Slide left duration={1300}>
                    <div className="row skill">
                      
                      <div className="nine columns main-col">
                        <h2>Personalidade</h2>

                        <div className="bars">
                          <ul className="skills">{personalidade}</ul>
                        </div>
                      </div>
                    </div>
                  </Slide> */}
                </div>
              </div>
              
              <p>
                <Fade bottom duration={2000}>
                  <ul className="social">
                    <a href="/" className="button">

                      <i className="fa fa-linkedin"></i> LinkedIn
                    </a>
                  </ul>
                </Fade>
              </p>
              <hr />
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Artigo;
