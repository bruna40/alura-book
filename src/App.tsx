import { GlobalStyle } from "./styles/global";
import { DadosProvider } from "./contexts/DadosContext";
import Router from "./Router/Route";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <DadosProvider>
        <Router />
        <GlobalStyle />
      </DadosProvider>
    </BrowserRouter>


  )
}

export default App
