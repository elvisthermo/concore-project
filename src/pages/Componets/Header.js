import React,{useEffect} from 'react';

export default  function Header(props) {
    const imgLogo = props.imgLogo;
    const imgIconMenu = props.imgIconMenu;

    const menuLinks =props.menuLinks;

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
                            <a href="/"><img className={imgLogo.title} src={imgLogo.url}
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
                                    //deixar home button acesso
                                    i===0?<li key={i}><a className="link" href={link.link} data-link="true">{link.name}</a></li>//verificação para ativar apenas o primero item
                                    : <li key={i}><a className="link" href={link.link} data-link="false">{link.name}</a></li>

                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
