import { BotoesRed, BotoesWhite } from "./style"


function Botao({ children, red }) {

    return (
        <>
            {red ? (
                <BotoesRed>{children}</BotoesRed>
            ) : (
                <BotoesWhite>{children}</BotoesWhite>
            )}
        </>
    )
}

export default Botao