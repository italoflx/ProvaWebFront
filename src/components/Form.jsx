import { useState } from 'react'
import '../styles/form.css'
import ICON from '../assets/user.png'

 const Form = () =>{
        const [dataForm, setDataForm] = useState({
            nome:'',
            cpf:'',
            sexo:'',
            idade:'',
            peso:'',
            contato:'',
            email:'',
            altura:'',
        })
 
    const handleChangeValue = (event) => {
        setDataForm((dataForm) => ({
            ...dataForm,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJBcGlSZXN0RGVtbyIsInN1YiI6Iml0YWxvIiwiZXhwIjoxNjg5NzAzMjYxLCJpYXQiOjE2ODk2OTk2NjEsInNjb3BlIjoiUk9MRV9VU0VSIn0.CKSK_cD6kB5iNkgQ0zi6ReYujJIdyP3Nvorc13JNm7vcyR8LFK90e0jZY3TSZQkf2d3NBxQ50TQLipmrpaM3pOLyfAXmR6ZZjlVBiQp1lZpFY-diChQ_wWTP7hlbdS3lKvV3tRKFkfjxh1eThDb1PbAKUSl04Po3weUJuXD08_iACW8f6XFI96qS1I420esxeFkitMGRBBj5mJzSRO6j2C76WJBxCZ-NQ4ATx8gpxpMMFExIY12iUAibptkhUXKhjk8dEYEdVCozzOGITtj6CmvNGVp9dKqrkBLgTiZxIMafSpxwXw1oMVEr0jO_7jXOzuK-JsxdqhaeJTEADVFl9w";
        event.preventDefault()
      
        fetch('http://localhost:8080/pacientes', {
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
                <label className="form-label" htmlFor="nome">Cadastrando o Paciente</label>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="nome">Nome</label>
                    <input className="form-input" type="text" name="nome" onChange={handleChangeValue} />
                </div>
                <div>
                    <label className="form-label" htmlFor="cpf">CPF</label>
                    <input className="form-input" type="text" name="cpf" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" type="email" name="email" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="contato">Contato</label>
                    <input className="form-input" type="text" name="contato" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="peso">Peso</label>
                    <input className="form-input" type="number" name="peso" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="idade">Idade</label>
                    <input className="form-input" type="number" name="idade" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="altura">Altura</label>
                    <input className="form-input" type="number" name="altura" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label">Sexo</label>
                    <div className="form-radio">
                        <input type="radio" name="sexo" value="M" onChange={handleChangeValue}/>
                        <label className="form-label" htmlFor="homem">Homem</label>
                    </div>
                    <div className="form-radio">
                        <input type="radio" name="sexo" value="F" onChange={handleChangeValue}/>
                        <label className="form-label" htmlFor="mulher">Mulher</label>
                    </div>
                </div>
                <div className="submit-button">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}
 
 export default Form