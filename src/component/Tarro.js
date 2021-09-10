import React from 'react'
import styled from 'styled-components'

let pc = 0;
const urlBase = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const Escoba = () => {
    let colors = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];
    let x = Math.floor(Math.random()*colors.length);
    const [Refrescar, setRefrescar] = React.useState([]) //hook

    React.useEffect(()=>{
        traerData();
    }, [])

    const traerData = async() => {
        const rest = await fetch(urlBase)
        const data = await rest.json()
        setRefrescar(data.quotes[pc])
        console.log(Refrescar);
    }

    const peluchePala = () =>{
        pc = randoski()
        traerData()
    }

    const randoski = () => {
        return Math.floor((Math.random() * 99) + 1);
    }

    // sibuiendo la locura

    const Tripode = styled.div`
    background:${colors[x]} ;
    display: flex;
    justify-content: center;
    width: 100vw; 
    height: 100vh;`

    const Camara = styled.div`
    background: #fff; 
    width: 40vw;
    height: 40vh;
    margin-top: 20vh;  
    color: ${colors[x]};
    border-radius: 15px;
    padding: 30px;
    font-family: 'Lobster', cursive;
    font-size: 16px;`
    
    const Obtura = styled.div`
    float: right;
    `
    const Luz = styled.button`
    float: right;
    padding: 10px;
    background:${colors[x]} ;
    border: 0px;
    border-radius: 5px;
    color: #fff; 
    `

    return(
        <div>
            <Tripode>
                <Camara>
                    <h1>"{Refrescar.quote}</h1>
                    <Obtura>
                        <p>-{Refrescar.author}</p>
                        <Luz onClick={peluchePala}>New quote</Luz>
                    </Obtura>
                </Camara>
            </Tripode>
             </div>
    )
}
export default Escoba

 
