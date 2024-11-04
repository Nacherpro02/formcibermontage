import { useState, useEffect } from 'react';
import './App.css';

function GetSingleForm(){
    const [data, setData] = useState([])
    const [id, setId] = useState('')

    
    const fetchData = async () => {
        const response = await fetch(`/api/get_data/${id}`)
        const result = await response.json()
        setData(result)
        setId('')
    }
    

    return (
        <>
            <div>
            <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            <button onClick={fetchData}>Search</button>

            </div>
               
            </div>
            {data.length === 0 ? (
                <p>No hay nada...</p>
                    
                ):(
                    <div>
                        <p>ID: {data.id}</p>
                        <p>Fecha: {data.create_time}</p>
                        <p>Nombre: {data.question_1}</p>
                        <p>Correo: {data.question_2}</p>
                        <p>Edad: {data.question_3}</p>
                        <p>¿Alguna vez has necesitado que te arreglaran el equipo?: {data.question_4}</p>
                        <p>¿Tienes alguna experiencia sobre reparar ordenadores?: {data.question_5}</p>
                        <p>¿Qué es lo que más te ha gustado de nuestra empresa?: {data.question_6}</p>
                        <p>¿El ordenador es para ocio o uso personal?: {data.question_7}</p>
                        <p>¿Mejorarías alguna cosa de nuestra empresa? (Justifica tu respuesta): {data.question_8}</p>
                        <p>¿Qué opinas de nuestros trabajadores?: {data.question_9}</p>
                        <p>¿Cuál ha sido tu nivel de satisfacción con la empresa?: {data.question_10}</p>
                        <p>¿Alguna vez has comprado en nuestra empresa o vendido algo a nosotros?: {data.question_11}</p>
                        <p>¿Cómo conociste esta empresa?: {data.question_12}</p>
                        <p>Puntúa esta empresa: {data.question_13}</p>
                        <hr />
                        </div>    
                )}
    
                    
        </>
    )
}
export default GetSingleForm