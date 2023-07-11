import './CaixaTexto.css'

const CaixaTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return (
        <div className='caixa-texto'>
            <label>{ props.nome }</label>
            <input  
                type={props.tipo} 
                placeholder="Informe a quantidade dias" 
                value={props.valor}
                onChange={aoDigitado}
            ></input>
        </div>
    )

}

export default CaixaTexto