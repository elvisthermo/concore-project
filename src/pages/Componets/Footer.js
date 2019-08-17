import React from 'react';
import FormEmail from "./FormEmail";

export default  function Footer(props) {
    const img = props.img;
    const iconAndLink = props.iconAndLink;

    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <img src={img.url} alt={img.alt}/>
                        <ul>
                            {iconAndLink.map(item=>(
                                <li key={item.alt}>
                                    <a href={item.link} target="_blank">
                                        <img  src={item.url}  alt={item.alt}/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*Componete form email*/}
                    <FormEmail/>

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
