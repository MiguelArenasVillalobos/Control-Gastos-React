import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { formatearFecha } from '../helpers';

import IconoAhorro from '../assets/img/icono_ahorro.svg'
import IconoCasa from '../assets/img/icono_casa.svg'
import IconoComida from '../assets/img/icono_comida.svg'
import IconoEducacion from '../assets/img/icono_educacion.svg'
import IconoFinanzas from '../assets/img/icono_finanzas.svg'
import IconoGastos from '../assets/img/icono_gastos.svg'
import IconoOcio from '../assets/img/icono_ocio.svg'
import IconoRopa from '../assets/img/icono_ropa.svg'
import IconoSalud from '../assets/img/icono_salud.svg'
import IconoServicios from '../assets/img/icono_servicios.svg'
import IconoSuscripciones from '../assets/img/icono_suscripciones.svg'
import IconoTrabajo from '../assets/img/icono_trabajo.svg'

const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  varios: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
  servicios: IconoServicios,
  trabajo: IconoTrabajo,
  educacion: IconoEducacion,
  finanzas: IconoFinanzas,
  ropa: IconoRopa,
}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => eliminarGasto(id)}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions(leadingActions)}
        trailingActions={trailingActions(trailingActions)}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            <img
              src={diccionarioIconos[categoria]}
            />
            <div className='descripcion-gasto'>
              <p className='categoria'>{categoria}</p>
              <p className='nombre-gasto'>{nombre}</p>
              <p className='fecha-gasto'>Agregado el: <span>{formatearFecha(fecha)}</span></p>
            </div>
          </div>
          
          <p className='cantidad-gasto'>${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto