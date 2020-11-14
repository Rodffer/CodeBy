import styled from 'styled-components';

export const ContainerArticles = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0px;
    margin-left: 16px;

    h3 {
        color: var(--white);
        font-size: 2.125em;
        line-height: 40px;
    }

    h4 {
        color: var(--white);
        font-size: 1.25em;
        line-height: 24px;
    }

    p {
        color: #fff;
        font-family: Poppins-Regular;
        font-size: 12px;
        line-height: 14px;
    }

    article {
        margin-left: 30px;
        width: 150px;

        :first-of-type {
            margin-left: 0px;
        }
    }
`;

export const ArticleOne = styled.article`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    margin-top: 0px;
`;

export const ArticleTitle = styled.div`
    padding: 18px 13px;
    background-color: #005499;
`;

export const ArticleContent = styled.div`
    padding: 18px 13px;
    background-color: #0088ed;
    position: relative;

    height: 400px;

    p {
        position: absolute;
        bottom: 14px;
        margin: 0 18px 0 0;
        text-align: left;
    }
`;
