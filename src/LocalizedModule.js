    // common-module.js
import { PolymerElement, html } from "@polymer/polymer";
import { mixinBehaviors } from "@polymer/polymer/lib/legacy/class.js";
import { AppLocalizeBehavior } from "@polymer/app-localize-behavior";
export {LocalizedModule};
class LocalizedModule extends mixinBehaviors([AppLocalizeBehavior], PolymerElement) {

    static get properties() {
        return {
           
              language: {
                type:String,
                value:'en',
                observer:"attached"
              },
       
              }
            
        }
       
    attached() {
   
        // this.loadResources(this.resolveUrl(this.language + 'Language.json'));
        const language1Promise = this.loadResources(this.resolveUrl( 'locales.json'));
const language2Promise = this.loadResources(this.resolveUrl(this.language + 'Language.json'));



      
    }  
    
}

customElements.define("localized-module", LocalizedModule);
