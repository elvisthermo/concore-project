import React from 'react';
//items do carrosel
const carouselOfItems = [
    {url:"https://i.ibb.co/2Ykg2yD/case-ingresse.png",
        alt:"Concore",
        title:"Cliente: Ingresse S.A",
        subtitle:"Diminuinos o tempo de repasses financeiros de horas para minutos.",
        descriptrion:"Nós projetamos em conjunto com o setor financeiro da Ingresse uma ferramenta de solicitação e gestão de repasses financeiros." +
            " O processo de repasse era realizado por planilhas, o que resultava em eventuais erros, perdas e dificuldade de gestão em grande volume."},

    {url:"https://i.ibb.co/2Ykg2yD/case-ingresse.png",
        alt:"Concore",
        title:"Cliente: Ingresse S.A",
        subtitle:"Diminuinos o tempo de repasses financeiros de horas para minutos.",
        descriptrion:"Nós projetamos em conjunto com o setor financeiro da Ingresse uma ferramenta de solicitação e gestão de repasses financeiros." +
            " O processo de repasse era realizado por planilhas, o que resultava em eventuais erros, perdas e dificuldade de gestão em grande volume."}
];


export default  function Solutions(props) {
    const imgGradient = props.gradinet;

    return(
        <section className="solucoes">

            <div className="container">
                <div className="row">

                    <div className="col-md-12 text-center" data-aos="fade-up">
                        <h2>Soluções Concore</h2>
                        <img className="divider2" src={imgGradient.url} alt={imgGradient.title}/>
                    </div>

                    <div className="col-md-12">
                    {/*componetes cards saiba mais já com os */}
                    <LongCard name={"bg-sprint"} value={"fade-left"}
                        link={"sprintzero.html"} img={{url:"https://i.ibb.co/8PpHxQQ/logo-sprint-zero.png",title:"Sprint zero"}}
                     text={"Comece transformando a sua ideia em um projeto de software completo e com protótipo navegável."}
                    />

                    <LongCard name={"bg-innovation"} value={"fade-right"}
                                  link={"innovationsquad.html"} img={{url:"https://i.ibb.co/fpWvVKS/logo-innovationsquad.png",title:"Innovation squad"}}
                                  text={"Tenha a disposição uma equipe sênior para projeto e desenvolvimento do seu software."}
                    />
                    </div>
                </div>
            </div>

            <div className="slider-concore" data-aos="fade-up">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 text-center">
                            <h2>Confira o impacto das soluções Concore para seus clientes.</h2>
                            <img className="divider2" src={imgGradient.url} alt={imgGradient.title}/>
                        </div>

                        <div className="col-md-12">
                            <div id="carouselConcore" className="carousel slide" data-ride="carousel" data-interval="10000">
                                <div className="carousel-inner">
                                    <SlidingCarousel name={"carousel-item active"} item={carouselOfItems[0]}/>
                                    <SlidingCarousel name={"carousel-item"} item={carouselOfItems[1]}/>
                                </div>
                                <a className="carousel-control-prev car-control" href="#carouselConcore" role="button"
                                   data-slide="prev">
                                    <i className="fas fa-chevron-left"></i>
                                </a>
                                <a className="carousel-control-next car-control" href="#carouselConcore" role="button"
                                   data-slide="next">
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

//cards com animação lateral
function LongCard(props) {
    return(
        <a href={props.link}>
            <div className={props.name} data-aos={props.value}>
                <div className="row">
                    <div className="col-md-5 text-center">
                        <div className="img-solucoes">
                            <img src={props.img.url}
                                 alt={props.img.title}/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h3>{props.text}</h3>
                        <div className="link-area">
                            <span className="a-style hvr-wobble-vertical">Saiba mais</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

//carossel itens
function SlidingCarousel(props) {
    return(
        <>
        <div className={props.name}>
            <div className="row">
                <div className="col-md-6">
                    <img src={props.item.url} alt={props.item.alt}/>
                </div>
                <div className="col-md-6">
                    <h4>{props.item.title}</h4>
                    <h3>{props.item.subtitle}</h3>
                    <p>
                        {props.item.descriptrion}
                    </p>
                </div>
            </div>


        </div>
            <a className="carousel-control-prev car-control" href="#carouselConcore" role="button"
               data-slide="prev">
                <i className="fas fa-chevron-left"></i>
            </a>
            <a className="carousel-control-next car-control" href="#carouselConcore" role="button"
               data-slide="next">
                <i className="fas fa-chevron-right"></i>
            </a>
        </>

    )
}
