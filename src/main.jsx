import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ProtectedRoute from './components/protected-route/Protected-route'
import Usuarios from './components/usuarios/Usuarios'
import TablaUsuarios from './components/tablaUsuarios/TablaUsuarios'
import Administracion from './components/administracion/Administracion'
import Mensaje from './components/mensaje/Mensaje'
import Portafolio from './components/portafolio/Portafolio'

var isAllowed = false

const functionToGetchildData = (validateRouteLogin) => {
  if (validateRouteLogin === ''){
    isAllowed=true
  } else {
    isAllowed=false
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route element={<ProtectedRoute isAllowed={isAllowed}/> }className='modal'>
        <Route path="administracion" element={<Administracion/>} />
        </Route>

        <Route path="usuarios" element={<Usuarios />} />  
        <Route path="portafolio" element={<Portafolio />} />  
        <Route path="tabla-usuarios" element={<TablaUsuarios/>}/>
        <Route path="mensaje" element={<Mensaje childToParentData={functionToGetchildData}/>}/>
      </Routes>
      </HashRouter>
  </React.StrictMode>,
)