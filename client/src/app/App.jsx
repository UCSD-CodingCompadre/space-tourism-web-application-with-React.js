import './styles/App.css';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import {Crew} from '../pages/Crew';
import {Destination} from '../pages/Destination';
import {Home} from '../pages/Home';
import{Technology} from '../pages/Technology';


function App() {
  return (
    <div 
    className="App"
    >
      <BrowserRouter>
        <Routes>
          <Route
          element={<Navigate to="/home" />}
          path="/"
          >
          </Route>
          <Route
          element={ <Home/>}
          path="/home"
          >
          </Route>
          <Route
          element={ <Destination />}
          path="/destination"
          >
          </Route>
          <Route
          element={ <Crew />}
          path="/crew"
          >
          </Route>
          <Route
          element={<Technology />}
          path="/technology"
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
