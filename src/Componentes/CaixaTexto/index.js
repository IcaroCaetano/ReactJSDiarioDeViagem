import './CaixaTexto.css'

const CaixaTexto = (props) => {
    return (
        <div className='caixa-texto'>
            <label>{ props.nome }</label>
            <input  type={props.tipo} placeholder="Informe a quantidade dias" ></input>
        </div>
    )

}

export default CaixaTexto