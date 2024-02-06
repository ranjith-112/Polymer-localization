
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import './EmpOrgDetails.js';
import '@polymer/paper-button/paper-button.js';
import './EmployeeDetails.js';
import './OrganisationdetailsForm.js';



class Main extends PolymerElement {
  static get template() {
    return html`
          <app-location route="{{route}}"></app-location>
    <app-route
    route="{{route}}"
    pattern="/:page"
    data="{{routeData}}">
    </app-route>
 
   
 
    
    <iron-pages selected="[[routeData.page]]" attr-for-selected="name">
    <employee-details 
      name="employeeDetails" 
      on-custom-submit="getDatafromEmployeedetails"
     reset="{{reset}}"
     on-custom-submit3="loadLanguage"
    ></employee-details>
    <organisation-element 
      name="organisationDetails" 
      empdata-list="{{empvalue}}" 
      on-custom1-submit="getDatafromOrgnisationdetails"
      language="{{language}}"

    ></organisation-element>
    <load-language-file name ="loadLanguage"></load-language-file>
   <read-file name ="readfile"></read-file>
   <emporg-element name="EmpOrgDetails" data="{{bothEmpOrgValues}}" language="{{language}}" on-custom2-submit="resetForm"></emporg-element>

   
    </iron-pages>
        
        `
  }
  static get properties() {
    return {
      data: {
        type: Object,
        notify: true,
        reflectToAttribute: true,
        observer: 'getData'
      },
      empvalue: {
        type: Object,
        notify: true,
        reflectToAttribute: true,

      },
      bothEmpOrgValues: {
        type: Object,
        notify: true,
        reflectToAttribute: true,
      },
      reset: {
        type: Number,
        value: '',
        notify: true,
        reflectToAttribute: true
      },
      language:{
        type:String,
    
        
      }
    }
  }


  getDatafromEmployeedetails(event) {
   
    this.empvalue = event.detail
    this.language=this.empvalue.language
    console.log("this main event",event)
    console.log("this.empvalue",this.empvalue)
    console.log("this main language",this.language)


  }
  getDatafromOrgnisationdetails(event) {
    this.bothEmpOrgValues = event.detail

    console.log("this main event",event)
    console.log("value1", this.bothEmpOrgValues)

  }
  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ]
  }
  _routePageChanged(page) {
    if (page == "components") {
      this.set("routeData.page", "employeeDetails")
    }
  }
  resetForm() {
    this.reset = 1;
    console.log("aa222", this.reset)

  }


  _getDataRef() {
    console.log(this.valueList, "Obs");
  }

}

customElements.define('main-element', Main);