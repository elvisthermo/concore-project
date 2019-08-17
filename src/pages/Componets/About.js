import React from 'react';
//array dos componetes cards
const textCard1 = ['Tecnologia própria que nos permite desenvolver de forma mais eficiente e rápida ','economizando preciosos recursos.'];
const textCard2 = ['Nossa equipe respira tecnologia e inovação há mais de 10 anos ','gerando soluções assertivas e práticas.'];
const textCard3 = ['Criamos estimativas técnicas com base em dados científicos ','gerando assertividade.'];

export default  function About(props) {

    const urlImage = props.urlImage;
    const urlGradinet = props.gradinet;
    const title= props.title;
    const description = props.description

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
                            i!==1?(<p key={i}>{value}</p>):<p key={i}><b>{value}</b></p>

                            ))}
                    </div>

                    <div className="col-md-12 text-center" data-aos="fade-down">
                        <h2 className="title-d">Os diferenciais Concore para fazer seu negócio crescer.</h2>
                        <img className="divider2" src={urlGradinet.url} alt={urlGradinet.title} />
                    </div>


                    <Cards imgClass={"div-img"} urlImg={{url:"https://i.ibb.co/8PmrT6f/4x.png", title:"mais rápido"}} text={textCard1}/>
                    <Cards imgClass={"div-img mg-top"} bold={2} urlImg={{url:"https://i.ibb.co/FWYQbYc/squad.png", title:"Squad de inovação"}} text={textCard2}/>
                    <Cards imgClass={"div-img mg-top"} urlImg={{url:"https://i.ibb.co/GxtsCRc/datadriven.png", title:"Data driven"}} text={textCard3}/>

                </div>
            </div>
        </section>



    )
}


function Cards(props) {

    return(
        <div className="col-md-4 text-center" data-aos="fade-up">
            <div className="box-df">
                <div className={props.imgClass}>
                    <img src={props.urlImg.url} alt={props.urlImg.title}/>
                </div>
                <hr className="hr-g"/>
                {/*troca de cor para o paragrafo do meio*/}
                {props.bold?
                    <p><strong>{props.text[0]}</strong>{props.text[1]}</p>:<p>{props.text[0]}<strong>{props.text[1]}</strong></p>
                }
            </div>
        </div>

    )
}
