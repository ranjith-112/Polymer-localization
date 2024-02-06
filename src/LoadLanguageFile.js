
import { PolymerElement, html } from "@polymer/polymer";
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import './ReadLanguageFile.js'
import { CommonModule } from "./LocalizedModule.js";
import '@polymer/paper-item/paper-item.js'; 
  class LoadLanguageFile extends CommonModule  {
    static get template(){
        return html `
        <paper-dropdown-menu id="language" label="language *"  >
        <paper-listbox slot="dropdown-content" selected ="{{language}}" attr-for-selected="value">
          <paper-item value="en">English</paper-item>
          <paper-item value="fr">French</paper-item>
          <paper-item value="gr">Greek</paper-item>
        </paper-listbox>
      </paper-dropdown-menu>
        
        
        <p>Parent</p>
        <div>{{localize("greeting")}}</div>

        <div> Child Element </div>
        <read-file  language="{{language}}"></read-file>
      
     
      
      `
    }
    
    static get properties() {
        return {
           
              language: {
                type:String,
                value: 'en',
              },
       
              }
            
        }
        // connectedCallback() {
        //     super.connectedCallback()
           
        //     this.loadResources(this.resolveUrl('locales.json'));
          
        // }
     
    }
    customElements.define("load-language-file",LoadLanguageFile)

