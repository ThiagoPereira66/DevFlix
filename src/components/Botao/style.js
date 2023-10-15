import styled, {css} from 'styled-components'

const BotoesStyle = css`

background: transparent;
border: 3px solid white;
border-radius: 30px;
padding: 10px 20px;
color: white;
cursor: pointer;
font-size: 20px;
font-weight: 500px;

&:hover{
    color: red;
    background: white;
}

`

export const BotoesWhite = styled.button`
${BotoesStyle}
`

export const BotoesRed = styled.button`
${BotoesStyle}
background: red;
border: 4px solid transparent;
box-shadow: 0 0 7px 8px rgb(255 0 0/ 30%);

&:hover{
    color: white;
    background: red;
box-shadow: 0 0 7px 15px rgb(255 0 0/ 30%);
}

`