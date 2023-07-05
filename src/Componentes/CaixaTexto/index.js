import './CaixaTexto.css'

const CaixaTexto = (props) => {
    return (
        <div className='caixa-texto'>
            <label>{ props.nome }</label>
            <input></input>
        </div>
    )

}

export default CaixaTexto