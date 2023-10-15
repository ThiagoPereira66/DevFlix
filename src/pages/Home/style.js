import styled from 'styled-components'

export const Background = styled.div`

background-image: url( ${ (props) => props.img}); // esse padrão é usado para pegar uma varial e muda-la dinamicamente
height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

/* filtro escuro na frente da imagem de fundo */

&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}
`

export const conteiner = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
`

export const Info = styled.div`

z-index: 2;
padding: 20px;
width: 50%;



h1{
    font-size: 3.5rem;
    font-weight: 700;
    color: white;

p{
    font-size: 20px;
    font-weight: 500;
    color: white;
    margin-top: 30px;
    margin-bottom: 20px;

    }
}
`

export const Poster = styled.div`
z-index: 2;
img{
    width: 300px;
    border-radius: 5px;
}
`
export const ConteinerBotoes = styled.div`
display: flex;
gap: 20px;
margin-top: 30px;
`

