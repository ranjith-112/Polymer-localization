import { PolymerElement, html } from "@polymer/polymer";
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js'
import '@polymer/paper-card/paper-card.js'
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-location/iron-location.js'
import { CommonModule } from "./CommonModule";

class OrganisationdetailsForm extends CommonModule {

    static get template() {
        return html`
        
            <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
            <style>
            .form-group {
                margin-bottom: 15px;
              
              }
              paper-input {
                width: 100%;
              }
              
            
              paper-card {
                width: 100%; 
                padding: 10px;
                box-sizing: border-box;
              }
              paper-dropdown-menu{
                width: 100%; 
              }
           
              .header{
               
                width:100%;
                color:white;
                background-color:#156fa3;
                padding: 10px;
              }
              .bottom-right {
                position: fixed;
                bottom: 0;
                right: 0;
                margin: 10px;
              }
              

              .employeeContainer {
                margin-top:1%;
                margin-left:2%;
              }
              @media (max-width: 767px) {
                .bottom-right {
                  position: relative;
                  margin-top: 20px;
                }
            }
            #OrganisationForm{
                margin-left:2%;
            }
            </style>
            <div class='header'>
            <h>   Employee Details</h>
        </div>
            <div class="employeeContainer">

        
       
        <div class="row">
        <div class="col-md-4 col-12 form-group">
        <paper-card>
              <b>{{localize('Name')}}: </b>{{employeeDetails.name}}
        </paper-card>
        </div>
        <div class="col-md-4 col-12 form-group">
        <paper-card>
              <b>{{localize('DOB')}}: </b>{{employeeDetails.dob}}
        </paper-card>
        </div>
        <div class="col-md-4 col-12 form-group">
        <paper-card>
              <b>{{localize('Email')}}: </b>{{employeeDetails.email}}
        </paper-card>
        </div>
         
        </div>
        <div class="row">
        <div class="col-md-4 col-12 form-group">
        <paper-card>
              <b>{{localize('Phone')}}:</b> {{employeeDetails.phone}}
        </paper-card>
        </div>
        <div class="col-md-4 col-12 form-group">
        <paper-card>
             <b>{{localize('Address')}}: </b>{{employeeDetails.address1}},{{employeeDetails.address2}},{{employeeDetails.city}},{{employeeDetails.state}} .
        </paper-card>
        </div>
        </div> 
        

     </div>
        
       
            <div class='header'>
                <h>Organisation Details Form</h>
            </div>
            <div class="organisationcontainer">
                <iron-form id="OrganisationForm">
                    <form>
                        <div class="row">
                            <div class="col-md-4 col-12 form-group">
                                <paper-input id="nameInput" label="{{localize('OrganisationName')}} *" required auto-validate pattern="[a-zA-Z]+" error-message="{{errormessage.requiredField}}"></paper-input>
                            </div>
                            <div class="col-md-4 col-12 form-group">
                                <paper-dropdown-menu id="managerDropdown" label="{{localize('Manager')}} *" required auto-validate error-message="Please select Manager" >
                                    <paper-listbox slot="dropdown-content" selected ="{{manager}}" attr-for-selected="value">
                                        <paper-item value="Ashok Kumar">Ashok Kumar</paper-item>
                                        <paper-item value="Aravind">Aravind</paper-item>
                                        <paper-item value="Elangovan">Elangovan</paper-item>
                                    </paper-listbox>
                                </paper-dropdown-menu>
                            </div>
                            
                            <div class="col-md-4 col-12 form-group">
                                <paper-input id="address1Input" label="{{localize('AD1')}}" required auto-validate error-message="Address 1 is requried"></paper-input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-12 form-group">
                                <paper-input id="address2Input" label="{{localize('AD2')}}" required auto-validate error-message="Address 2 is requried"></paper-input>
                            </div>
                            <div class="col-md-4 col-12 form-group">
                                <paper-input id="cityInput" label="{{localize('City')}}" required auto-validate pattern="[a-zA-Z]+" error-message="Invalid city name"></paper-input>
                            </div>
                            <div class="col-md-4 col-12 form-group">
                            <paper-dropdown-menu id="stateDropdown" label="{{localize('State')}}" required auto-validate error-message="State is requried" >
                              <paper-listbox slot="dropdown-content" selected ="{{state}}" attr-for-selected="value">
                                <paper-item value="Tamil Nadu">Tamil Nadu</paper-item>
                                <paper-item value="Maharashtra">Maharashtra</paper-item>
                                <paper-item value="Mumbai">Mumbai</paper-item>
                              </paper-listbox>
                            </paper-dropdown-menu>
                          </div>
                        </div>
                    </form>
                </iron-form>
            </div>
           
            
          <div class="row bottom-right">
          <div class="col-md-4 col-12 form-group">
            <paper-button class="btn btn-primary me-2" raised on-click="_goBack">{{localize('Back')}}</paper-button>
          </div>&nbsp
          <div class="col-md-4 col-12 form-group">
            <paper-button class="btn btn-success" raised on-click="submitForm">{{localize('Submit')}}</paper-button>
          </div>
        </div>
          <app-location route="{{route}}"></app-location>
          <app-route
          route="{{route}}"
          pattern="/:page"
          data="{{routeData}}">
          </app-route>

        `;
    }
    static get properties() {
        return {
            employeeDetails: {
                type: Object,
                
            },

            empdataList: {
                type: Object,
                notify: true,
                observer: '_empdataListChanged'
            },
            organisationDetails: {
                type: Object,
                notify: true,
                reflectToAttribute: true,
                value: () => ({})
            },
            state:{
                type:String
            },
            manager:{
                type:String
            },
           formvalue:{
            type:Object
           },
           errormessage:{
            type:Object
           }
         

        };
    }


connectedCallback(){
    super.connectedCallback()
    
   this.errormessage= localStorage
   console.log("local storage",localStorage.requiredField)
   console.log("dniudwuehdw",this.errormessage.requiredField)
}
    _empdataListChanged(dataList) {
        console.log("data from child" + dataList)
        this.employeeDetails = dataList;
        console.log("data from child" + this.employeeDetails)
        const form = this.$.OrganisationForm;
        form.reset();
        this.state=null;
        this.manager=null;
    }

    submitForm() {
        const form = this.$.OrganisationForm;
        this.formvalue= this.$.OrganisationForm;
        console.log("emp form",form);
        console.log("empthis.formvalue",this.formvalue);
        
        if (form.validate()) {


            this.organisationDetails = {

                orgname: this.$.nameInput.value,
                orgmanager: this.$.managerDropdown.value,

                orgaddress1: this.$.address1Input.value,
                orgaddress2: this.$.address2Input.value,
                orgcity: this.$.cityInput.value,
                orgstate: this.$.stateDropdown.value
               
            }
            console.log(this.organisationDetails.orgname);
            console.log(this.organisationDetails);


            console.log("form submiited successfully")
//need to check
            const megeredEmporg = { ...this.employeeDetails, ...this.organisationDetails }
            console.log("megered" + JSON.stringify(megeredEmporg));
            this.set('route.path', '/EmpOrgDetails');
            this.dispatchEvent(new CustomEvent("custom1-submit", { detail: megeredEmporg }))
        } else {


            console.log("Form validation failed!");
        }
    }
    _goBack() {

        this.set("route.path", "/employeeDetails");
        // this.valueList = this.employeeDetails;
    }
    // resetFormAfterBack(reset) {
    //     alert("Aaa")
    //     if (reset === 1) {
    //       // Perform actions when reset is 1
    //       const form = this.$.OrganisationForm;
    //       form.reset();

    //       // Reset the value of reset if needed
    //       this.reset = 0;
    //     }
    //   }

}

customElements.define("organisation-element", OrganisationdetailsForm);
