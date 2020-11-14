import styled from 'styled-components';
import media from 'styled-media-query';

import imgnature from '../../assets/nature.png';
import imgdaily from '../../assets/daily.png';
import imgtogether from '../../assets/together.png';
import imganalysis from '../../assets/analysis.png';
import imgpictures from '../../assets/pictures.png';

export const Categories = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 16px 240px 16px 240px;

    ${media.lessThan('medium')`
        margin: 0px 16px 0px 16px;
    `}
`;

export const Title = styled.h1`
    font-size: 50px;
    color: var(--black);

    ${media.lessThan('medium')`
    font-size: 32px;
    `}
`;

export const Subtitle = styled.h2`
    font-size: 25px;
    color: var(--black);
    margin-bottom: 32px;
    font-weight: bold;

    ${media.lessThan('medium')`
    font-size: 22px;
    `}
`;

export const Rows = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    color: var(--white);
    height: 350px;
    margin-bottom: 20px;
`;

export const TitleRow = styled.h1`
    font-size: 50px;
    color: var(--white);
`;

export const SubtitleRow = styled.h2`
    font-size: 25px;
    font-weight: bold;
    color: var(--white);
`;

export const Nature = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
    transition: 0.3s;
    margin-right: 20px;

    background: url(${imgnature}) no-repeat;
    background-size: cover;

    :hover {
        transform: translateX(5px) translateY(-5px);
    }
`;

export const Daily = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    padding: 20px;
    transition: 0.3s;

    background: url(${imgdaily}) no-repeat;
    background-size: cover;

    :hover {
        transform: translateX(5px) translateY(-5px);
    }
`;

export const Together = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 80px 20px;
    transition: 0.3s;

    background: url(${imgtogether}) no-repeat;
    background-size: cover;

    :hover {
        transform: translateX(5px) translateY(-5px);
    }
`;

export const Analysis = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    padding: 20px;
    text-align: end;
    transition: 0.3s;

    background: url(${imganalysis}) no-repeat;
    background-size: cover;

    :hover {
        transform: translateX(5px) translateY(-5px);
    }
`;

export const Pictures = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
    margin-left: 20px;
    transition: 0.3s;

    background: url(${imgpictures}) no-repeat;
    background-size: cover;

    :hover {
        transform: translateX(5px) translateY(-5px);
    }
`;
