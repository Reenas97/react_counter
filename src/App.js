import { useState } from "react"

export default function App(){

    let [number, setNumber] = useState(0)
    let [warning, setWarning]= useState('')

    function minus(){
        if(number > 0){
            setNumber(number - 1)
        }else if(number == 0){
            setWarning(warning = 'Você não pode contar abaixo de 0')
        }
    }

    function plus(){
        setNumber(number + 1)
        setWarning(warning = '')
    }

    function reset(){
        setNumber(number = 0)
        setWarning(warning = '')
    }


    return <section>
        <p class="warning">{warning}</p>
        <h1>Contador</h1>
        <p>{number}</p>
        <div class="button-block">
            <button onClick={minus}>-</button>
            <button onClick={plus}>+</button>
        </div>
        <br/>
        <br/>
        <button onClick={reset} class="reset-button">reset</button>
    </section>
}