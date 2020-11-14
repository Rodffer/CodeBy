import styled from 'styled-components';
import media from 'styled-media-query';

import imgbackground from '../../assets/background.png';

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 0px;
    margin-bottom: 64px;
`;

export const BackgroundImage = styled.div`
    background: url(${imgbackground}) no-repeat center;
    background-size: cover;
`;

export const LogoBanner = styled.div`
    margin-top: 32px;
`;

export const BannerTitle = styled.h1`
    margin-top: 32px;
    margin-bottom: 32px;

    color: var(--white);
    font-size: 50px;
    text-align: center;

    ${media.lessThan('medium')`
    font-size: 32px;

    margin-top: 16px;
    margin-bottom: 16px;
    `}
`;

export const Button = styled.button`
    color: var(--white);
    background: var(--white);

    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    color: var(--black);

    width: 128px;
    height: 32px;

    margin-bottom: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 0;

    cursor: pointer;

    :hover {
        background: #c7c7c7;
    }

    ${media.lessThan('medium')`
    font-size: 16px;

    width: 128px;
    height: 32px;
    `}
`;
