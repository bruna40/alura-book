import styled from "styled-components";




export const ListBookContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    h2 {
        width: 100%;
        padding: 30px 0;
        background-color: #fff;
        color: #EB9B00;
        font-size: 36px;
        text-align: center;
        margin: 0;
    }
`;

export const Container = styled.li`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        boder: 1px solid white;
    }

`;