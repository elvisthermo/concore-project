import React from 'react';

export default  function Banner(props) {
    const title= props.title
    const description= props.description
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
