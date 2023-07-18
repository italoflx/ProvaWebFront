import { useState } from 'react'
import '../styles/form.css'
import ICON from '../assets/iconM.png'

 const FormM = () =>{
     const [dataForm, setDataForm] = useState({
         nome:'',
         contato:'',
         crm:'',
         email:'',
         especialidade:'',
     })
 
     const handleChangeValue = (event) => {
        setDataForm((dataForm) => ({
            ...dataForm,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJBcGlSZXN0RGVtbyIsInN1YiI6Iml0YWxvIiwiZXhwIjoxNjg5NzAzMTQwLCJpYXQiOjE2ODk2OTk1NDAsInNjb3BlIjoiUk9MRV9VU0VSIn0.Em7O_5t-kxVUNa2mN2yPZ377droBD1Lrd8sCIHWyzqofzTgwAJoDLODPqOVKxcPfH9ag6s1epq_72HhUsMHznM-YpQ4HQPNielnHJztsqDpD-8FiVcHnyCpQAlSrw9ObMQ3lZ3zYKV2rBunHW0SPhI9k6xzGlvAPq9nEEFHDZhqBMPDA1sZ04i1kv8Rvxu0PEUiED3bxTHLdlJ9yFSNjFxei6Al4NCl7viv1jf8kEbhe6O_1h6Qcfux1u1B0mc6a_9VV0t3I8oBfmFo6AgLoq5FSvJLC1da-Q2RZ6ri4mEsHNsowgGgfbmaDnMjOZevKXs5Dpp1fK5vK4mavQQfOTA";
        event.preventDefault()
      
        fetch('http://localhost:8080/medicos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(dataForm),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Erro:', error);
        })
    }

    return(
        <div className="prancheta">
            <div className="header">
                <img src={ICON} alt="Logo"/>
                <label className="form-label" htmlFor="nome">Cadastrando o Medico</label>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="nome">Nome</label>
                    <input className="form-input" type="text" name="nome" onChange={handleChangeValue} />
                </div>
                <div>
                    <label className="form-label" htmlFor="contato">Contato</label>
                    <input className="form-input" type="text" name="contato" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" type="email" name="email" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="crm">CRM</label>
                    <input className="form-input" type="text" name="crm" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="especialidade">Especialidade</label>
                    <input className="form-input" type="text" name="especialidade" onChange={handleChangeValue}/>
                </div>
                <div className="submit-button">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}
 
 export default FormM