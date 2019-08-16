import React from  'react';
import Cards from "./Cards";

export default  function About() {

    const urlImage ={url:"https://i.ibb.co/gSThfmR/img-section-about.png",title:"Concore"};
    const urlGradinet ={url:"https://i.ibb.co/wCJj8hV/divider-gradient.png",title:"Gradient divider"};

    const title=["Projeto e desenvolvimento de software prático, eficiente","e dentro do orçamento."];

    const description = ["A Concore surgiu com a missão de descomplicar o desenvolvimento de software e tornar a inovação tecnológica acessível para todas as empresas.",
        "Nós criamos a plataforma que permite desenvolver softwares customizados à uma fração do tempo tradicional.",
        "Nossa ferramenta, aliada ao nosso time especialista em inovação, nos permite criar soluções em projetos de softwares que atendem fielmente as regras do seu negócio."]

    const textCard1 = ['Tecnologia própria que nos permite desenvolver de forma mais eficiente e rápida','economizandopreciosos recursos.'];
    const textCard2 = ['Nossa equipe respira tecnologia e inovação há mais de 10 anos','gerando soluções assertivas e práticas.'];
    const textCard3 = ['Criamos estimativas técnicas com base em dados científicos','gerando assertividade.'];

    return(
        <section className="sobre">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-md-5">
                        <img className="img-width" src={urlImage.url} alt={urlImage.title}/>
                    </div>
                    <div className="col-md-7">
                        <h2>{title[0]}<br/>{title[1]}</h2>
                        <img className="divider1" src={urlGradinet.url} alt={urlGradinet.title}/>

                        {description.map((value,i)=>(
                            i!==1?(<p>{value}</p>):<p><b>{value}</b></p>

                            ))}
                    </div>

                    <div className="col-md-12 text-center" data-aos="fade-down">
                        <h2 className="title-d">Os diferenciais Concore para fazer seu negócio crescer.</h2>
                        <img className="divider2" src={urlGradinet.url} alt={urlGradinet.title} />
                    </div>


                    <Cards imgClass={"div-img"} urlImg={{url:"https://i.ibb.co/8PmrT6f/4x.png", title:"mais rápido"}} text={textCard1}/>
                    <Cards imgClass={"div-img mg-top"} urlImg={{url:"https://i.ibb.co/FWYQbYc/squad.png", title:"Squad de inovação"}} text={textCard2}/>
                    <Cards imgClass={"div-img mg-top"} urlImg={{url:"https://i.ibb.co/GxtsCRc/datadriven.png", title:"Data driven"}} text={textCard3}/>

                </div>
            </div>
        </section>



    )
}
