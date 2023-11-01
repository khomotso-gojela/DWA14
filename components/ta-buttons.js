import { html, LitElement, css } from "../libs/lit.js"; 
import { dispatch,getState } from "../modules/store.js";
import { increaseValue,decreaseValue,reset } from "../modules/actions.js";


class Buttons extends LitElement {
    static properties = {
        status: { type: 'property', state: true},
        disabledInc: {ttype: 'boolean', state: true },
        disabledDec: {ttype: 'boolean', state: true }
    }

    constructor(){
        super();
        this.status = getState().status
        this.disabledInc = false
        this.disabledDec = false
    }

    static styles = css`
    .buttons {
   
        margin: 20px;
       
    }
    
    sl-button {
        margin: 10px;
        width: 6em;
        height: 3em;
    }
    
    sl-button::part(base) {
     
        border: 2px solid rgb(143, 0, 0);
        color: red;
        background-color : #ffb6b6;
    }
    
    sl-button::part(base):hover {
     
        border: 2px solid red;
        background-color:  #ffdddd;
    `

    increase(){
        dispatch(increaseValue())
        this.disabledInc = getState().status == "MAXIMUM"? true:false
        this.disabledDec = getState().status == "NORMAL"? false:''
    }

    decrease(){
        dispatch(decreaseValue())
        this.disabledDec = getState().status == "MINIMUM"? true:false
        this.disabledInc = getState().status == "NORMAL"? false:''
    }

    reset(){
        this.disabledInc = false
        this.disabledDec = false
        dispatch(reset())
    }

    render(){


        return html`
        <div class="buttons" data-buttons>
            <sl-button pill size="large" ?disabled=${this.disabledDec} @click=${this.decrease} data-decrement>Decrement</sl-button>
            <sl-button pill size="large" @click=${this.reset} data-reset>RESET</sl-button>
            <sl-button pill size="large" ?disabled=${this.disabledInc} @click=${this.increase} data-increment>Increment</sl-button>
        </div>
        `
    }
}

customElements.define('ta-buttons', Buttons)