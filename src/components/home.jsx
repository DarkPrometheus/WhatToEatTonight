import React, { useState } from 'react'

export const Home = () => {
    const Calculate = value => {
        var str = value.split(",")
        var temp = []
        var c = 1
        var stemp

        if (str.lenth != 0) {
            str = str.sort(function () { return Math.random() - 0.5 });

            str.forEach(element => {
                if (element.trim() != "") {
                    stemp = c + ". " + element
                    temp.push(stemp)
                    c++
                }
            });
        }


        setValues(temp)
    }

    const [values, setValues] = useState([])

    return (
        <div className="Home">
            <h1>What to eat tonight?</h1>
            <div className="form__group">
                <input type="text" name="info" onChange={e => Calculate(e.target.value)} />
                <label for="name">Ingresa la lista aqui</label>
            </div>
            <ul>
                {
                    values.map(e => {
                        return <li>{e}</li>
                    })
                }
            </ul>
        </div>
    )
}