import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Imagem from "./Imagem";
import Populares from "./Pupulares";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const ImagensContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: flex-start; 
`;

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => (
                            <Imagem 
                                aoZoomSolicitado={aoFotoSelecionada}
                                key={foto.id} 
                                foto={foto} 
                            />
                        ))}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </>
    );
};

export default Galeria;
