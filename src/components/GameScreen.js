import React from 'react'

export default function GameScreen(){
    return (
        <>
            <div className="console">
                <div className="monitor">
                    <div className="screen"></div>
                </div>
                <div className="quick-buttons">
                    <button>opt 1</button>
                    <button>opt 1</button>
                    <button>opt 1</button>
                </div>
                <form className="terminal">
                    <input className="input-terminal" />
                    <button className="button-terminal">submit</button>
                </form>
            </div>
        </>
    ) 
}