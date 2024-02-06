import { PolymerElement, html } from "@polymer/polymer";
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js';
import './OrganisationdetailsForm.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-slider/paper-slider.js';

import { LocalizedModule } from "./LocalizedModule.js";

class EmployeeDetails extends LocalizedModule  {

  static get template() {
    return html`
      <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
      <style>
      :host {
        display: block;
        padding: 16px;
      }
    
      .form-group {
        margin-bottom: 15px;
      }
      
    
      paper-input {
        width: 100%;
      }
      paper-dropdown-menu{
        width: 100%; 
      }
      .error-message {
        color: red;
      }
      paper-slider {
        width: 100%;
      }
      .header {
        width: 100%;
        color: white;
        background-color: #156fa3;
        
        padding: 10px;
      }
      .bottom-right {
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 10px;
      }
      @media (max-width: 767px) {
        .bottom-right {
          position: relative;
          margin-top: 20px;
        }
      }
      #language {
     
        top: 10px;
        right: 10px;
      }
    
    </style>
  
<!--<p>Parent</p>
<div>{{localize("greeting")}}</div> -->
<div class="row">
<div class="col-md-4 col-12 form-group">
<div id="language">
<paper-dropdown-menu label="language *">
  <paper-listbox slot="dropdown-content" selected="{{language}}" attr-for-selected="value">
    <paper-item value="en">English</paper-item>
    <paper-item value="fr">French</paper-item>
    <paper-item value="gr">Greek</paper-item>
    <paper-item value="er">Ereek</paper-item>
  </paper-listbox>
</paper-dropdown-menu>
</div>
</div>
<div>aaa{{localize('hi')}}</div>
</div >
        <div class='header'>
        
        <h>Employee Details</h></div>
        
        <div class="container">
        <iron-form id="employeeForm">
          <form>
          <div class="row">
          <div class="col-md-4 col-12 form-group">
            <paper-input id="nameInput" label="{{localize('Name')}}" required auto-validate pattern="[a-zA-Z]+" error-message="Name is Required and Only Alhabet" value="{{employeeDetails.name}}"></paper-input>
          
          </div>
          <div class="col-md-4 col-12 form-group">
    <paper-input
      id="emailInput"
      label="{{localize('Email')}}"
      on-input="validateEmail"
      value="{{email}}"
      type="email"
      required
      auto-validate
      error-message="{{emailError}}"
    ></paper-input>
    </div>
        
          <div class="col-md-4 col-12 form-group">
            <paper-input id="phoneInput" label="{{localize('Phone')}}"" type="tel" value="{{phone}}"required auto-validate pattern="[6-9][0-9]{9}" maxlength="10" error-message="{{phoneNumberError}}"></paper-input>
        
          </div>
        </div>
            <div class="row">
              <div class="col-md-4 col-12 form-group">
                <paper-input id="dobInput" label="{{localize('DOB')}}" type="date" required auto-validate error-message="DOB is requried" ></paper-input>
              </div>
              <div class="col-md-4 col-12 form-group">
                <paper-input id="address1Input" label="{{localize('AD1')}}" required auto-validate error-message="Address 1 is requried"></paper-input>
              </div>
              <div class="col-md-4 col-12 form-group">
                <paper-input id="address2Input" label="{{localize('AD2')}}" required auto-validate error-message="Address 2 is requried"></paper-input>
              </div>
            </div>
            <div class="row">
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
      {{language}}
            </div>
        
          </div>
          </form>
        </iron-form>
        </div>
    <!--    <div>
        <paper-slider
        min="10"
        max="100"
        pin
        value="{{sliderValue}}"
        editable
          draggable
          max-markers=14
        on-value-change="_handleValueChange"
      > </paper-slider>
      
        </div>
        <div> <p>Slider Value: [[sliderValue]]</p> <p>Max Markers: [[maxMarkers]]</p></div> -->
        <div class="row bottom-right">
        <div class="col-md-4 col-12 form-group">
          <paper-button class="btn btn-primary me-2" raised on-click="resetForm">{{localize('Reset')}}</paper-button>
        </div>&nbsp
        <div class="col-md-4 col-12 form-group">
          <paper-button class="btn btn-success" raised on-click="proceedForm">{{localize('Proceed')}}</paper-button>
        </div>
      </div>

      <app-location route="{{route}}" ></app-location>
      <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}"
        tail="{{subRoute}}"
      ></app-route>
   <!--   <paper-button class="btn btn-primary me-2" raised on-click="papersilder">papersilder</paper-button> -->
    
    `;
  }
  static get properties() {
    return {
      employeeDetails: {
        type: Object,
        notify: true,
        reflectToAttribute: true,
        value: () => ({})
      },
      dataList: {
        type: Object,
        notify: true,
      },
      reset: {
        type: Number,
        notify: true,
        reflectToAttribute: true,
        observer: "resetFormAfterBack"
      },
      state: {
        type: String
      },
      email: {
        type: String,
        value: '',
      },
      phone: {

        type: String,
        value: '',
      },
      emailError: {
        type: String,
        value: '',
      },
      phoneNumberError: {
        type: String,
        value: '',
      },
      errorMessages: {
        type: Object,
        value: () => ({}),
      },
      sliderValue: {
        type: Number,
        value: 0,
        notify: true,
        reflectToAttribute: true,
      },
      language: {
        type: String,
        value:'en',
     
        
      }
    };
  }
  // _changedlanguage(){
  //   alert(this.language)
  //   this.dispatchEvent(new CustomEvent("custom-submit3", { detail: this.language }))
  // }
  constructor() {
    super();

  }
  //ready() {
  //   super.ready();


  //   document.addEventListener('click', this.handleClick.bind(this));
  // }
  // connectedCallback() {
  //   super.connectedCallback();


  //   document.addEventListener('click', this.handleClick.bind(this));
  // }
  connectedCallback() {
    super.connectedCallback();

    this._loadErrorMessages();
  }


  // handleClick(event) {
  //  console.log("event" ,event)
  //  // const formContainer = this.shadowRoot.getElementById('container');
  //   const form = this.$.employeeForm;
  //   if (!form.contains(event.target))
  //   console.log('Click detected!', event);

  //   // Call your function here
  //   this.validateEmail();
  // }


  _loadErrorMessages() {
    
    fetch('./src/error-messages.properties')
      .then(response => response.text())
      .then(data => {
        this.errorMessages = this._parsePropertiesFile(data);
        console.log("this.error message", this.errorMessages)
        localStorage.setItem("Errormessage", this.errorMessages)
      })
      .catch(error => {
        console.error('Error loading error messages:', error);
      });
  }
  _parsePropertiesFile(data) {
    const properties = {};
    const lines = data.split('\n');
    for (const line of lines) {
      const [key, value] = line.split('=');
      if (key && value) {
        properties[key.trim()] = value.trim();
        localStorage.setItem(key.trim(), value.trim())
      }
    }

    return properties;
  }

  validateEmail() {

    this.emailError = this.email ? '' : this.errorMessages.requiredField;
    this.phoneNumberError =
      this.phoneNumber ? '' : this.errorMessages.invalidPhoneNumber;
    console.log("this email error message", this.emailError)
    const email = this.$.emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {

      this.$.emailInput.invalid = false;
      return true;
    } else {
      // Invalid email format
      this.emailError = this.email ? '' : this.errorMessages.invalidEmail;
      this.$.emailInput.invalid = true;

      return false;
    }

  }
  resetForm() {

    const form = this.$.employeeForm;
    form.reset();
    this.state = null;

  }
  _handleValueChange(event) {
    console.log('Slider value changed:', event.detail.value);
    this.dispatchEvent(new CustomEvent('custom-value-change', { detail: { value: event.detail.value } }));
  }
  resetFormAfterBack(reset) {
    if (reset === 1) {
      // Perform actions when reset is 1
      const form = this.$.employeeForm;
      form.reset();
      this.state = null;
      // Reset the value of reset if needed
      this.reset = 0;
    }

  }
  papersilder() {
    this.set('route.path', 'paperslider');
  }
  proceedForm() {
    const form = this.$.employeeForm;
    this.validateEmail()
    console.log("this.employeeDetails.name", this.employeeDetails.name)
    if (form.validate() && this.validateEmail()) {
      this.employeeDetails = {
        name: this.$.nameInput.value,
        email: this.$.emailInput.value,

        phone: this.$.phoneInput.value,
        dob: this.$.dobInput.value,
        address1: this.$.address1Input.value,
        address2: this.$.address2Input.value,
        city: this.$.cityInput.value,
        state: this.$.stateDropdown.value,
        language:this.language
      };
      console.log(this.employeeDetails.name);
      console.log(this.employeeDetails);
      console.log("form submiited successfully")
      this.set('route.path', '/organisationDetails');
      this.dispatchEvent(new CustomEvent("custom-submit", { detail: this.employeeDetails }, { reset: this.reset }, 
      {language:this.language}
      ))
      // const customEvent = new CustomEvent("custom-submit", {
      //   detail: this.employeeDetails,
      //   reset: this.reset,
      //   language: this.language
      // });
      // this.dispatchEvent(customEvent);
      //    this.dataList = this.employeeDetails;
    } else {


      console.log("Form validation failed!");
    }
  }


}

customElements.define('employee-details', EmployeeDetails);
