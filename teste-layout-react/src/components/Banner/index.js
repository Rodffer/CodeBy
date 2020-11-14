import React from 'react';

import * as B from './styled';

import logo from '../../assets/logo.png';

export default function Banner() {
    return (
        <B.BannerContainer>
            <B.LogoBanner>
                <img src={logo} width="250" alt="Escalator" />
            </B.LogoBanner>
            <B.BannerTitle>we have ideas to growth your business</B.BannerTitle>
            <B.Button>see now</B.Button>
        </B.BannerContainer>
    );
}
