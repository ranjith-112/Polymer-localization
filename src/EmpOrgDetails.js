import { PolymerElement, html } from "@polymer/polymer";
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js'
import '@polymer/paper-card/paper-card.js'

import { LocalizedModule } from "./LocalizedModule";
class EmpOrgDetails extends LocalizedModule {

  static get template() {
    return html` <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
        <style>
        .form-group {
            margin-bottom: 15px;
          }
          
          
        
          paper-card {
            width: 100%; 
            padding: 10px;
            box-sizing: border-box;
          }
          
          .header{
               
            width:100%;
            color:white;
            background-color:#156fa3;
            padding: 10px;
          }
          .employeeContainer,.OrganisationContainer {
            margin-top:1%;
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
        </style>
        <div class='header'>
        <h>   Employee Details</h>
    </div>
        <div class="employeeContainer">
    
    
   
    <div class="row">
    <div class="col-md-4 form-group">
    <paper-card>
          <b>{{localize('Name')}}: </b>{{emporgDetails.name}}
    </paper-card>
    </div>
    <div class="col-md-4 form-group">
    <paper-card>
          <b>{{localize('DOB')}}: </b>{{emporgDetails.dob}}
    </paper-card>
    </div>
    <div class="col-md-4 form-group">
    <paper-card>
          <b>{{localize('Email')}}: </b>{{emporgDetails.email}}
    </paper-card>
    </div>
     
    </div>
    <div class="row">
    <div class="col-md-4 form-group">
    <paper-card>
          <b>{{localize('Phone')}}:</b> {{emporgDetails.phone}}
    </paper-card>
    </div>
    <div class="col-md-4 form-group">
    <paper-card>
         <b>{{localize('AD1')}}: </b>{{emporgDetails.address1}}
    </paper-card>
    </div>
    <div class="col-md-4 form-group">
    <paper-card>
         <b>{{localize('AD2')}}: </b>{{emporgDetails.address2}} .
    </paper-card>
    </div>
    </div> 
    <div class="row">
    <div class="col-md-4 form-group">
    <paper-card>
          <b>{{localize('City')}} : </b>{{emporgDetails.city}}
    </paper-card>
    </div>
    <div class="col-md-4 form-group">
    <paper-card>
          <b>{{localize('State')}} : </b>{{emporgDetails.state}}
    </paper-card>
    </div>
    </div>
   
 </div>
 <div class='header'>
 <h>   Organisation Details</h>
</div>
 <div class="OrganisationContainer">

<div class="row">
<div class="col-md-4 form-group">
<paper-card>
   <b>{{localize('OrganisationName')}}: </b>{{emporgDetails.orgname}}
</paper-card>
</div>
<div class="col-md-4 form-group">
<paper-card>
   <b>{{localize('Manager')}} : </b>{{emporgDetails.orgmanager}}
</paper-card>
</div>
<div class="col-md-4 form-group">
<paper-card>
  <b>{{localize('AD1')}}: </b>{{emporgDetails.orgaddress1}} .
</paper-card>
</div>

</div>
<div class="row">
<div class="col-md-4 form-group">
<paper-card>
   <b>{{localize('AD2')}}: </b>{{emporgDetails.orgaddress2}}
</paper-card>
</div>
<div class="col-md-4 form-group">
<paper-card>
   <b>{{localize('City')}} : </b>{{emporgDetails.orgcity}}
</paper-card>
</div>
<div class="col-md-4 form-group">
<paper-card>
  <b>{{localize('State')}}: </b>{{emporgDetails.orgstate}} .
</paper-card>
</div>
</div>

</div> 
<div class="row bottom-right">
<div class="col-md-4 col-12 form-group">
  <paper-button class="btn btn-primary me-2" raised on-click="_goBack">Back To EmpForm</paper-button>
</div>
{{reset}}

</div>
        <app-location route="{{route}}"></app-location>
        <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}">
        </app-route>`
  }
  static get properties() {
    return {
      emporgDetails: {
        type: Object,
      },

      data: {
        type: Object,
        observer: 'getEmpOrgdata'
      }
     
    };
  }
  getEmpOrgdata(data) {
    this.emporgDetails = data;
    console.log("data from child" + this.emporgDetails)
  }
  change_language(language){
    alert("this langue",language)

  }
  _goBack() {

    this.set('route.path', '/employeeDetails');
    this.dispatchEvent(new CustomEvent("custom2-submit", {}))
  }

}
customElements.define("emporg-element", EmpOrgDetails)