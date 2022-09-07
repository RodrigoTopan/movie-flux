import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import {Home} from './modules/containers/Home'

export const App = () => (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
)