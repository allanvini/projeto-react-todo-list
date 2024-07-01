import styled from "styled-components";

export function TodoCard({description, onDelete, onCheck, isChecked}){
    return (
        <TodoContainer
            style={{
                opacity: isChecked ? 0.5 : 1
            }}
        >
            <input type="radio" checked={isChecked} onClick={onCheck} />
            <span>{description}</span>
            <button onClick={onDelete} >Remover</button>
        </TodoContainer>
    );
}

const TodoContainer = styled.div`
    box-sizing: border-box;
    color: white;
    background-color: #4545ff;
    padding: 15px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 10px 10px 10px 10px;
    font-weight: bolder;
`;