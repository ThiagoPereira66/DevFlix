import styled from 'styled-components'



export const Container = styled.div`
z-index: 100;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 1.5rem;

background-color: ${ (props) => props.changeBackground ? '#000' : 'translate'};

transition: background-color  .8s;


img{
    width: 25%;
}
`

export const Menu = styled.ul`
display: flex;
gap: 50px;
cursor: pointer;
`

export const Li = styled.li`
font-size: 1.5rem;
list-style: none;
font-weight: 600;
position: relative;

a{
    color: #fff;
    list-style: none;
}

&::after{
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #008000;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: .6s;

}
`


