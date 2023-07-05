import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    return(
        <section className='formulario'>
            <form>
                <ListaSuspensa itens={ props.itens }></ListaSuspensa>
            </form>
        </section>
    )
}

export default Formulario