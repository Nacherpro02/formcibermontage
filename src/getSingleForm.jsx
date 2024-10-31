import { useState, useEffect } from 'react';
import './App.css';

function GetSingleForm(){
    const [data, setData] = useState([])
    const [id, setId] = useState('')

    function handleFetch (){
    const fetchData = async () => {
        const response = await fetch(`/api/get_data/${id}`)
        const result = await response.json()
        setData(result)
        }
        fetchData()
    setId('')
    }
    





    return (
        <>
            <div>
            <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            <button onClick={handleFetch}>Search</button>

            </div>
                {data.length === 0 ?(
                    <p>Cargando...</p>
                ):(
                    data.map((item, i) => (
                        <div key={i} className="survey-item">
                            <p>Fecha: {item.date}</p>
                        <p>Nombre: {item.question_1}</p>
                        <p>Correo: {item.question_2}</p>
                        <p>Edad: {item.question_3}</p>
                        <p>¿Alguna vez has necesitado que te arreglaran el equipo?: {item.question_4}</p>
                        <p>¿Tienes alguna experiencia sobre reparar ordenadores?: {item.question_5}</p>
                        <p>¿Qué es lo que más te ha gustado de nuestra empresa?: {item.question_6}</p>
                        <p>¿El ordenador es para ocio o uso personal?: {item.question_7}</p>
                        <p>¿Mejorarías alguna cosa de nuestra empresa? (Justifica tu respuesta): {item.question_8}</p>
                        <p>¿Qué opinas de nuestros trabajadores?: {item.question_9}</p>
                        <p>¿Cuál ha sido tu nivel de satisfacción con la empresa?: {item.question_10}</p>
                        <p>¿Alguna vez has comprado en nuestra empresa o vendido algo a nosotros?: {item.question_11}</p>
                        <p>¿Cómo conociste esta empresa?: {item.question_12}</p>
                        <p>Puntúa esta empresa: {item.question_13}</p>
                        <hr />
                        </div>
                    )))}
            </div>
        
        </>
    )
}
export default GetSingleForm