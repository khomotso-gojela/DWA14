import { subscribe,getState } from "./modules/store.js";
import './components/ta-buttons.js'

import { render } from "./libs/lit.js";
import { App } from "./App.js";

const elements = {
    appdiv: document.querySelector('[data-app]'),
    alert: document.querySelector('[data-alert]')
}

render(App(getState()), elements.appdiv)

subscribe((_,next) => {
    render(App(next), elements.appdiv)
})



