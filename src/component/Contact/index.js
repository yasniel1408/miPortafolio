import React, {useState} from 'react'
import './contact.css';
import axios from 'axios';


const Component = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")


    const enviarDatosCorreo = async(event) => {
        event.preventDefault();
        let response = await axios.get(`http://yasniel.ga/enviarCorreo.php?name=${name}&email=${email}&body=${body}`)
        console.log(response.data)

        setName("")
        setEmail("")
        setBody("")
    }

    return(
        <div className="divGeneral" id="contact">
            <div className="contactDiv">
                <h3 className="sizeH1">Contact</h3>
                <form className="contactForm" onSubmit={enviarDatosCorreo}>
                    <input 
                        type="text" 
                        required 
                        className="myInput" 
                        placeholder="Name" 
                        defaultValue={name}
                        onChange={e => setName(e.target.value)}/>
                    <input 
                        type="email" 
                        required 
                        className="myInput" 
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}/>
                    <textarea 
                        type="text" 
                        required 
                        className="myTextArea" 
                        rows="10" 
                        placeholder="Body"
                        onChange={e => setBody(e.target.value)}></textarea>
                    <input type="submit" className="mySubmit" value="Send"/>
                </form>
            </div>
        </div>
    )
}
    

export default Component