import styled from 'styled-components';
import tags from './tags.json';

const TagContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 40px;
`;

const TituloTag = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
    margin-right: 10px; /* Espaço entre o título e as tags */
`;

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    margin-right: 10px; /* Espaçamento entre as tags */
    margin-bottom: 10px; /* Para caso haja quebra de linha, as tags terão espaço vertical */
    
    &:hover {
        border-color: #C98CF1;
    }
`;
const Tags = () => {
    return (
        <TagContainer>
            <TituloTag>Busque por tags:</TituloTag>
            {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
        </TagContainer>
    );
};

export default Tags;
