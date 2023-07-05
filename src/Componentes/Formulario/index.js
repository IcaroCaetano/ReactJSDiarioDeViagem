import AreaTexto from '../AreaTexto'
import CaixaTexto from '../CaixaTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    return(
        <section className='formulario'>
            <form>
                <ListaSuspensa itens={ props.itens }></ListaSuspensa>
                <CaixaTexto nome="Qtd de Dias"/>
                <AreaTexto></AreaTexto>
            </form>
        </section>
    )
}

export default Formulario