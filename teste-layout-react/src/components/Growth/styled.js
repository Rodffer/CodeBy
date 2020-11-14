import styled from 'styled-components';

export const Growth = styled.section`
    display: flex;
    align-items: flex-end;
    background-color: #f4f4f4;
    margin-top: 16px;
    padding-bottom: 32px;
    position: relative;
    height: 800px;
`;

export const GrowthHeader = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f4f4f4;
    margin-top: 16px;
    position: relative;
    height: 100%;

    h2 {
        margin-top: 64px;
        margin-left: 240px;
        color: var(--black);
        font-size: 50px;
    }

    p {
        margin-left: 240px;
        color: var(--black);
        font-size: 25px;
    }
`;
