import { useState, useEffect } from 'react'

const Filtos = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
          <label>Filtrar Gastos</label>
          <select
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
          >
          <option value=''>-- Todas las Categorias --</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='casa'>Casa</option>
            <option value='varios'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
            <option value='servicios'>Servicios</option>
            <option value='trabajo'>Trabajo</option>
            <option value='educacion'>Educación</option>
            <option value='finanzas'>Finanzas</option>
            <option value='ropa'>Ropa</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filtos