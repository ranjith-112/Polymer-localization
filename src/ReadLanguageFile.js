
import { PolymerElement, html } from "@polymer/polymer";
import { mixinBehaviors } from "@polymer/polymer/lib/legacy/class.js";
import { AppLocalizeBehavior } from "@polymer/app-localize-behavior";

import { CommonModule } from "./CommonModule.js";
class ReadLanguageFile extends CommonModule{
    static get template(){
        return html `<p>From common  read file</p>
        <div>Child {{localize("greeting")}}</div>
        {{language}}
        
    `
    }
    
    static get properties(){
        return {
          
    }}
  
 
}
customElements.define("read-file",ReadLanguageFile)