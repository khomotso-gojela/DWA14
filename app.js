import { html } from "./libs/lit.js";
import { getState } from "./modules/store.js";


export const App = (state) => {

    return html`
    <div class='wrapper' data-wrapper>
        <div class="alert" >
            <sl-alert ?open=${state.alert} data-alert >
                <sl-icon slot="icon" name="info-circle"></sl-icon>
                COUNTER HAS BEEN RESET
            </sl-alert>
        </div>

        <div class="counter" data-counter>
        ${state.value}
        </div>

        <ta-buttons status=${state.status} ></ta-buttons>
        
        
    </div>     
    `
}