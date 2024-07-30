import { styled } from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Cabecalho from './components/Cabecalho'
import CampoTexto from './components/CampoTexto'
import BarraLateral from './components/BarraLateral'

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

`
const ContaineCabecalhoCampoTexto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%; 
  padding: 20px 0;
`;

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <ContaineCabecalhoCampoTexto>
        <Cabecalho/>
        <CampoTexto placeholder="O que você procura?"/>
      </ContaineCabecalhoCampoTexto>
      <BarraLateral/>
    </FundoGradiente>
  )
}

export default App
