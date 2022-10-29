import styled from "styled-components";


export const LayoutComponentsWrapper = styled.div`
    padding: 12px 0 32px 0;
    
    @media screen and (min-width: 768px) and (max-width: 1279px) {
        display: flex;
    }
    @media screen and (min-width: 1280px) {
        padding: 40px 69px 0 0;
        border-right: 1px solid var(--black);
        width: 465px;
        margin-right: 69px;
    }
`;
export const NavigationAndBalanceWrapper = styled.div`
    margin-right: 32px;
    width: 100%;
    @media screen and (min-width: 768px) and (max-width: 1279px) {
        width: 336px;
    }
    @media screen and (min-width: 1280px) {
        margin-right: 0;
        margin-bottom: 32px;
    }
`;