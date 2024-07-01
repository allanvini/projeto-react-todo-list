import styled from "styled-components";

export function Container({ children }) {
    return (
        <Content>
            {children}
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    form, div {
        max-width: 550px;
    }
`