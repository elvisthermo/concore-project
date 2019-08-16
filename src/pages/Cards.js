import React from  'react';

export default  function Cards(props) {

    return(
        <div className="col-md-4 text-center" data-aos="fade-up">
            <div className="box-df">
                <div className={props.imgClass}>
                    <img src={props.urlImg.url} alt={props.urlImg.title}/>
                </div>
                <hr className="hr-g"/>
                <p>{props.text[0]}<strong>{props.text[1]}</strong></p>
            </div>
        </div>

    )
}
