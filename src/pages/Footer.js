import React from  'react';

export default  function Footer() {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <img src="https://i.ibb.co/TwmbBYF/logo-footer.png" alt="Logo Concore"/>
                        <ul>
                            <li><a href="https://www.facebook.com/concore.io/" target="_blank"><img
                                src="https://i.ibb.co/jr84Tb7/facebook.png"
                                alt="Facebook Concore"/></a></li>
                            <li><a href="https://www.linkedin.com/company/concore.io/" target="_blank"><img
                                src="https://i.ibb.co/FbXYT8S/linkedin.png" alt="Linkedin Concore"/></a></li>
                            <li><a href="https://www.instagram.com/concore.oficial/" target="_blank"><img
                                src="https://i.ibb.co/hdV4yHx/instagram.png" alt="Instagram Concore"/></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <h5>Assine nossa newsletter</h5>

                        <form className="form-style">
                            <div className="form-group">
                                <input required type="text" placeholder="Nome:" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input required type="text" placeholder="E-mail:" className="form-control"/>
                            </div>
                            <div className="button-area">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 text-center-mobile">
                        <h5>Contatos</h5>
                        <p><a href="mailto:">contato@concore.io</a></p>
                        <p>Alameda Franca, 243 Bela Vista SP</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="creditos">Copyright © 2019 Concore. Todos os direitos reservados. </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
