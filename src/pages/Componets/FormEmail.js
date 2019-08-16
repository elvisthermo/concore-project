import React,{useState} from 'react';

export default function FormEmail(){
    const [name,setName] = useState('');
    const [email,setEmail]= useState('');

    function sendForm(event) {
        event.preventDefault();
        console.log("name:",name);
        console.log("email:",email);
    }

    return(
        <div className="col-md-4 offset-md-1">
            <h5>Assine nossa newsletter</h5>
            {/*form email*/}
            <form className="form-style">
                <div className="form-group">
                    <input required type="text"
                           value={name}
                           onChange={(e)=>setName(e.target.value)}
                           placeholder="Nome:" className="form-control"/>
                </div>
                <div className="form-group">
                    <input required type="text"
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                           placeholder="E-mail:" className="form-control"/>
                </div>
                <div className="button-area">
                    <button type="submit" onClick={sendForm}>Enviar</button>
                </div>
            </form>
        </div>
    )
}
