import AreaTexto from '../AreaTexto'
import CaixaTexto from '../CaixaTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {

    const [pais, setPais] = useState('')
    const [data, setData] = useState('')
    const [dias, setDias] = useState('')
    const [diario, setDiario] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoNovoDiarioCadastrado({
            pais,
            data,
            dias,
            diario
        })
        setPais('')
        setData('')
        setDias('')
        setDiario('')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <ListaSuspensa valor={pais} aoAlterado={valor => setPais(valor)} itens={ props.itens }></ListaSuspensa>
                <CaixaTexto valor={data}  aoAlterado={valor => setData(valor)} nome="Data" tipo="date"/>
                <CaixaTexto valor={dias} aoAlterado={valor => setDias(valor)} nome="Qtd de Dias" tipo="number"/>
                <AreaTexto valor={diario}  aoAlterado={valor => setDiario(valor)} />
                <Botao/>
            </form>
        </section>
    )
}

export default Formulario