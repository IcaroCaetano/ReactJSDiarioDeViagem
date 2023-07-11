import './AreaTexto.css'

const AreaTexto = (props) => {
    return (
        <div className='area-texto'>
            <label>Diário de Viagem</label>
            <textarea 
                rows={4} cols={45} 
                placeholder="Descreva em resumo a viagem..."
                value={props.valor}
                onChange={evento => props.aoAlterado(evento.target.value)}
            ></textarea>
        </div>
    )
}

export default AreaTexto