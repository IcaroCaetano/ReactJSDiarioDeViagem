import './ListaSupensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
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