import React, { useState } from "react";
function Input() {

    // css style start

    const inputStyle = {
        borderRadius: "8px",
        border: "1px solid transparent",
        padding: "0.6em 1.2em",
        fontSize: "1em",
        fontWeight: "500",
        fontFamily: "inherit",
        backgroundColor: "#5a5858",
        cursor: "pointer",
        transition: " border-color 0.25s",
    }

    // css style end

    const [val, setValue] = useState([]);
    const [addVal, setAddVal] = useState('')

    const clickhandler = (e) => {
        setAddVal(e.target.value)
    }
    const addvalue = (e) => {
        e.preventDefault()
        setValue([...val, addVal])
        setAddVal('')
    }
    return (

        <>
            <form action="">

                <input value={addVal} type="text" onChange={clickhandler} style={inputStyle} />
                <button onClick={addvalue} >Add</button>

                <ul>

                    {

                        val.map((a) => {



                            return (
                                <>
                                    <li>{a}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </form>
        </>

    )

}

export default Input