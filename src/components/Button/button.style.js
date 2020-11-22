import styled from 'styled-components'
export const PrimaryButton = styled.button`
    background-color: green;
    padding: 8px 16px;
    outline: none;
    border: 0;
    border-radius: 6px;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
    color: white;
    font-size: 14px;
    text-decoration: none;
`
export const SecondaryButton = styled(PrimaryButton)`
    background-color: red;
`