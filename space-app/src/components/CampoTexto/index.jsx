import React from 'react';
import { styled } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const ContainerEstilizado = styled.div`
  position: relative;
  display: flex;

  
`

const CampoTextoEstilizado = styled.input`
  height: 56px;
  width: 566px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #C98CF1;
  color: #D9D9D9;
  box-sizing: border-box;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);

`

const IconeLupa = styled(FaSearch)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
  color: #D9D9D9;
`

const CampoTexto = (props) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado placeholder={props.placeholder} />
      <IconeLupa />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
