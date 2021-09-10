import axios from 'axios'
import React, { Component} from 'react'
import styled from 'styled-components'
const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

let colors = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];
let x = Math.floor(Math.random()*colors.length);

export default class Card extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }
    
    async componentDidMount () {
    this.peticionGet(); 
    }

    peticionGet = () => {
        axios.get(url)
        .then(response => {
            let pedirLocura = response.data.quotes
            let i = Math.floor(Math.random()*pedirLocura.length);
            this.setState({data: pedirLocura[i]})
            // console.log(response.data.quotes)
        }).catch(error => {
            console.log(error.message);
        })
    }
    render() { 

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

        const {author, quote} = this.state.data
        return (
            <Tripode>
                <Camara>
                    <h1>"{quote}</h1>
                    <Obtura>
                        <p>-{author}</p>
                        <Luz onClick={() => {window.location = "ReactDOM.render()"} } >New quote</Luz>
                    </Obtura>
                </Camara>
            </Tripode>
        )
    }
}
