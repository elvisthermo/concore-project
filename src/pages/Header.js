import React,{useEffect} from  'react';

export default  function Header() {
    const imgLogo = {url:'https://i.ibb.co/mNBzXkz/logo.png',title:'logo'};
    const imgIconMenu ={url:'https://i.ibb.co/fdn2xrR/hamburguer.png',title:''};

    const menuLinks =[
        {link:'index.html',name:'Home'},
        {link:'sprintzero.html',name:'Sprint Zero'},
        {link:'innovationsquad.html',name:'Innovation Squad'},
        {link:'javascript',name:'Blog'}]

    useEffect(()=>{
      function loadImg() {

      }
      loadImg();
    },[])

    return(
        <header>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-md navbar-light nav-header col-md-12">
                        <div className="menu-holder">
                            <a href="index.html"><img className={imgLogo.title} src={imgLogo.url}
                                                      alt="Concore"/></a>
                        </div>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-icon"><img src={imgIconMenu.url}/></span>
                        </button>


                        <div className="navbar-collapse collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                {menuLinks.map((link,i)=>(
                                <li key={i}><a className="link" href={link.link} data-link="true">{link.name}</a></li>

                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
