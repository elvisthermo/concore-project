import React from 'react';

export default  function Banner() {

    const url ={};
    const title=["A revolução no","desenvolvimento","de inovação digital."]
    const description=["Projeto e desenvolvimento de software prático, eficiente","e dentro do orçamento."]

    return(
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            {title[0]} <br/>
                            <b>{title[1]}</b><br/>
                            {title[2]}
                        </h1>

                        <p>{description[0]}<br/>{description[1]}</p>
                        <div className="link-scroll">
                            <a href="javascript:" className="scrolldown hvr-wobble-vertical">
                                <i className="fas fa-chevron-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
