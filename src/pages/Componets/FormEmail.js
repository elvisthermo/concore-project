import React,{useState} from 'react';

export default function FormEmail(){
    const [name,setName] = useState('');
    const [email,setEmail]= useState('');

    function sendForm(event) {
        event.preventDefault();

        const resquestInfo = {
            method : 'POST',
            body: JSON.stringify({name,email}),
            headers: new Headers({
                'Content-type':'application/json',
            })
        };

        fetch('https://flowcore.concore.io/rh/test/react1',resquestInfo)
            .then(response =>{
                if(response.ok) {
                    alert("Incrição realizada com sucesso");
                    return response.text();
                }
                throw new Error("não foi possivel realizar a inscrição");
            }).catch(error =>{
            alert(error);
        });

    }

    return(
        <div className="col-md-4 offset-md-1">
            <h5>Assine nossa newsletter</h5>
            {/*form email*/}
            <form className="form-style"  onSubmit={sendForm} method="post">
                <div className="form-group">
                    <input type="text"
                           value={name}
                            onChange={(e)=>setName(e.target.value)}
                           placeholder="Nome:" className="form-control"
                           required
                    />
                </div>
                <div className="form-group">
                    <input type="email"
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                           placeholder="E-mail:" className="form-control"
                           required/>
                </div>
                <div className="button-area">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}
