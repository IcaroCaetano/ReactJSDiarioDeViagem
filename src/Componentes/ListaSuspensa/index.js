import './ListaSupensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-supensa">
            <label>
                País
            </label>
            <select>
                {props.itens.map(item => <option key={item.nome}>{item.nome}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa