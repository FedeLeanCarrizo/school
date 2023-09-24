import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FLCCodeCamp</h1>
        <Testimonio
          nombre='Florencia Bostian'
          pais='Bolivia'
          imagen='florencia'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de FLCCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en FLCCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />

        <Testimonio
            nombre='Fernando Rodriguez'
            pais='Colombia'
            imagen='fernando'
            cargo='Ingeniero de Software'
            empresa='ChatDesk'
            testimonio= '<strong>FLCCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software.</strong> El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' />

        <Testimonio
            nombre='Luciano Santillan'
            pais='Argentina'
            imagen='luciano'
            cargo='Ingeniero de Software'
            empresa='Amazon'
            testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en FLCCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. FLCCodeCamp cambió mi vida.' />   
      
      </div>
    </div>
  );
}

export default App;
