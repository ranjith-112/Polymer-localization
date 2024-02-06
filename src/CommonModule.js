    // common-module.js
import { PolymerElement, html } from "@polymer/polymer";
import { mixinBehaviors } from "@polymer/polymer/lib/legacy/class.js";
import { AppLocalizeBehavior } from "@polymer/app-localize-behavior";
export {CommonModule};
class CommonModule extends mixinBehaviors([AppLocalizeBehavior], PolymerElement) {
    connectedCallback() {
        super.connectedCallback()
       
        this.loadResources(this.resolveUrl('frLanguage.json'));
      
    }  
}

customElements.define("common-module", CommonModule);
