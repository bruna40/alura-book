import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    cursor: pointer;

    li{
        list-style: none;
        justify-content: center;
        align-items: center;
        p {
            padding: 0 5px;
            min-width: 120px;
            font-size: 16px;
        }


    }
`;

export const Image = styled.div`

    li{
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-right: 20px;
        img {
            width: 35px;
        }
    }

`;