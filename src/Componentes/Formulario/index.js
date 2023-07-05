import AreaTexto from '../AreaTexto'
import CaixaTexto from '../CaixaTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'

const Formulario = (props) => {
    return(
        <section className='formulario'>
            <form>
                <ListaSuspensa itens={ props.itens }></ListaSuspensa>
                <CaixaTexto nome="Data" tipo="date"/>
                <CaixaTexto nome="Qtd de Dias" tipo="number"/>
                <AreaTexto></AreaTexto>
                <Botao/>
            </form>
        </section>
    )
}

export default Formulario