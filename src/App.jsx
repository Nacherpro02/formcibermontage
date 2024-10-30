import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetForm from './getForm';

function App() {
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [three, setThree] = useState('15')
  const [four, setFour] = useState(null)
  const [five, setFive] = useState(null)
  const [six, setSix] = useState('')
  const [seven, setSeven] = useState('')
  const [eight, setEight] = useState('')
  const [nine, setNine] = useState('')
  const [ten, setTen] = useState('')
  const [eleven, setEleven] = useState('')
  const [twelve, setTwelve] = useState('')
  const [thirteen, setThirteen] = useState('')

  const options_4 = ['Sí', 'No']
  const options_5 = ['Sí', 'No']
  const options_7 = ['Personal', 'Ocio']
  const options_11 = ['Sí', 'No']
  const emoji_array = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  const [showForms, setShowForms] = useState(false)

  function handleSubmit() {
    const form = {
      question_1: one,
      question_2: two,
      question_3: three,
      question_4: four,
      question_5: five,
      question_6: six,
      question_7: seven,
      question_8: eight,
      question_9: nine,
      question_10: ten,
      question_11: eleven,
      question_12: twelve,
      question_13: thirteen

    }
    setOne('')
    setTwo('')
    setThree('15')
    setFour(null)
    setFive(null)
    setSix('')
    setSeven('')
    setEight('')
    setNine('')
    setTen('')
    setEleven('')
    setTwelve('')
    setThirteen('')
    fetch("/api/submit", {method: 'POST',
    headers: {'Content-Type': 'application/json'}, body: JSON.stringify(form),})
    .then((res) => res.json())
    toast.success("Enviado correctamente")
  }
    
    



  return (
    <>
      <div>
        <h1>Encuesta Promotores</h1>
        <div>
        <p>1. Nombre:</p>
        <input type='text' value={one} onChange={(e) => setOne(e.target.value)}/>
        <br/>
        <p>2. Correo</p>
        <input type='text' value={two} onChange={(e) => setTwo(e.target.value)}/>
        <p>3. ¿Cuál es tu edad?</p>
        <input type="range" min="15" max="80" step={1} value={three} onChange={(e) => setThree(e.target.value)}/>
        <p>Edad: {three}</p>
        <p>4. ¿Alguna vez has necesitado que te arreglaran el equipo?</p>
        <div>
        {options_4.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={four === option}
              onChange={(e) => setFour(e.target.value)}
              style={{ marginRight: '10px' }}
            />
              {option} <br />
            </label>
          ))}
        </div>
        <br/>
        <p>5. ¿Tienes alguna experiencia sobre reparar ordenadores</p>
        <div>
        {options_5.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={five === option}
              onChange={(e) => setFive(e.target.value)}
              style={{ marginRight: '10px' }}
            />
              {option} <br />
            </label>
          ))}
        </div>
        <p>6. ¿Qué es lo que mas te ha gustado de nuestra empresa</p>
        <textarea name="" id="" rows="5" cols="60" value={six} onChange={(e) => setSix(e.target.value)}></textarea>
        <br/>
        <p>7. ¿El ordenador es para ocio o uso personal</p>
        <div>
        {options_7.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={seven === option}
              onChange={(e) => setSeven(e.target.value)}
              style={{ marginRight: '10px' }}
            />
              {option} <br />
            </label>
          ))}
        </div>
        <br/>
        <p>8. ¿Mejorarías alguna cosa de nuestra empresa? (Justifica tu respuesta)</p>
        <textarea name="" id="" rows="5" cols="60" value={eight} onChange={(e) => setEight(e.target.value)}></textarea>
        <br/>
        <p>9. ¿Que opinas de nuestros trabajadores?</p>
        <textarea name="" id="" rows="5" cols="60" value={nine} onChange={(e) => setNine(e.target.value)}></textarea>
        <br/>
        <p>10. ¿Cuál ha sido tu nivel de satisfacción con la empresa</p>
        <input type="range" min="1" max="5" step={1} value={ten} onChange={(e) => setTen(e.target.value)}/>
        <p>Nivel de satisfacción: {emoji_array[ten-1]}</p>
        <br/>
        <p>11. ¿Alguna vez has comprado en nuestra empresa o vendido algo a nosotros</p>
        <div>
        {options_11.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={seven === option}
              onChange={(e) => setSeven(e.target.value)}
              style={{ marginRight: '10px' }}
            />
              {option} <br />
            </label>
          ))}
        </div>
        <br/>
        <p>12. ¿Comó conociste esta empresa?</p>
        <textarea name="" id="" rows="5" cols="60" value={twelve} onChange={(e) => setTwelve(e.target.value)}></textarea>
        <br/>
        <p>Puntua esta empresa:</p>
        <input type="range" min="1" max="5" step={1} value={thirteen} onChange={(e) => setThirteen(e.target.value)}/>
        <p>Nivel de satisfacción: {emoji_array[thirteen-1]}</p>
        <div>{thirteen >= 4 ?(
          <p>A la {thirteen} estrellas 🤩</p>
        ):(
          <p>Solo {thirteen} estrella(s) 🥺</p>
        )}  
        </div>
        <br/>
        <button type="submit" onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
        <div>
          {showForms === false ? (
            <GetForm />):(
            <p>Nada</p>
          )}
        </div>
      <ToastContainer />
    </>
  )
}

export default App
