import './AreaTexto.css'

const AreaTexto = () => {
    return (
        <div className='area-texto'>
            <label>Diário de Viagem</label>
            <textarea rows={4} cols={45} placeholder="Descreva em resumo a viagem..."></textarea>
        </div>
    )
}

export default AreaTexto