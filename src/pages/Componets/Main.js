import React,{useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import About from "./About";
import Solutions from "./Solutions";
import animations from '../js/scripts';

//header
//imagens estáticas
const imgLogo = {url:'https://i.ibb.co/mNBzXkz/logo.png',title:'logo'};
const imgIconMenu ={url:'https://i.ibb.co/fdn2xrR/hamburguer.png',title:''};

//menu items
const menuLinks =[
    {link:'/',name:'Home'},
    {link:'sprintzero.html',name:'Sprint Zero'},
    {link:'innovationsquad.html',name:'Innovation Squad'},
    {link:'javascript',name:'Blog'}]

//descrição do banner cada ponto do array e uma quebra de linha
const bannerTitle=["A revolução no","desenvolvimento","de inovação digital."]
const bannerDescription=["Projeto e desenvolvimento de software prático, eficiente","e dentro do orçamento."];

//imagem e descrições do componets about
const urlImage ={url:"https://i.ibb.co/gSThfmR/img-section-about.png",title:"Concore"};
const urlGradinet ={url:"https://i.ibb.co/wCJj8hV/divider-gradient.png",title:"Gradient divider"};
const aboutTitle=["Grande parte dos projetos de software falham em custo, prazo","ou valor entregue."];
const aboutDescription = ["A Concore surgiu com a missão de descomplicar o desenvolvimento de software e tornar a inovação tecnológica acessível para todas as empresas.",
    "Nós criamos a plataforma que permite desenvolver softwares customizados à uma fração do tempo tradicional.",
    "Nossa ferramenta, aliada ao nosso time especialista em inovação, nos permite criar soluções em projetos de softwares que atendem fielmente as regras do seu negócio."];

const footerImg = {url:"https://i.ibb.co/TwmbBYF/logo-footer.png",alt:"Logo Concore"};
//array object links e icones
const footerIconsLink =[
    {url:"https://i.ibb.co/jr84Tb7/facebook.png",
        alt:"Facebook Concore",
        link:"https://www.facebook.com/concore.io/"},
    {url:"https://i.ibb.co/FbXYT8S/linkedin.png",
        alt:"Linkedin Concore",
        link:"https://www.linkedin.com/company/concore.io/"},
    {url:"https://i.ibb.co/hdV4yHx/instagram.png",
        alt:"Instagram Concore",
        link:"https://www.instagram.com/concore.oficial/"}];


export function Main() {

    {useEffect(()=>{
        animations();
    })}

    return(
    <>
        <Header imgLogo={imgLogo} imgIconMenu={imgIconMenu} menuLinks={menuLinks}/>
        <Banner title={bannerTitle} description={bannerDescription} />
        <About urlImage={urlImage} gradinet={urlGradinet} title={aboutTitle} description={aboutDescription} />
        <Solutions gradinet={urlGradinet}/>
        <Footer img={footerImg} iconAndLink={footerIconsLink}/>
    </>
    )
}
