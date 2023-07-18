import React, { useState, useEffect } from 'react'

const Home = () => {
  const [pacientes, setPacientes] = useState([]);
  const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJBcGlSZXN0RGVtbyIsInN1YiI6Iml0YWxvIiwiZXhwIjoxNjg5NzAzMjYxLCJpYXQiOjE2ODk2OTk2NjEsInNjb3BlIjoiUk9MRV9VU0VSIn0.CKSK_cD6kB5iNkgQ0zi6ReYujJIdyP3Nvorc13JNm7vcyR8LFK90e0jZY3TSZQkf2d3NBxQ50TQLipmrpaM3pOLyfAXmR6ZZjlVBiQp1lZpFY-diChQ_wWTP7hlbdS3lKvV3tRKFkfjxh1eThDb1PbAKUSl04Po3weUJuXD08_iACW8f6XFI96qS1I420esxeFkitMGRBBj5mJzSRO6j2C76WJBxCZ-NQ4ATx8gpxpMMFExIY12iUAibptkhUXKhjk8dEYEdVCozzOGITtj6CmvNGVp9dKqrkBLgTiZxIMafSpxwXw1oMVEr0jO_7jXOzuK-JsxdqhaeJTEADVFl9w";

  useEffect(() => {
    fetch("http://localhost:8080/pacientes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => setPacientes(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>Pacientes</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">CPF</th>
            <th scope="col">Peso</th>
            <th scope="col">Altura</th>
            <th scope="col">Sexo</th>
            <th scope="col">contato</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((p, key) => (
            <tr key={key}>
              <td>{p.nome}</td>
              <td>{p.cpf}</td>
              <td>{p.peso}</td>
              <td>{p.altura}</td>
              <td>{p.sexo}</td>
              <td>{p.contato}</td>
              <td>{p.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
