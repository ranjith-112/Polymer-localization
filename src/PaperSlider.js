import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
class PaperSlider extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 16px;
        }

        paper-slider {
          width: 100%;
        }
      </style>
<p>auiwdbiwbd</p>
      <paper-slider
        min="0"
        max="100"
        value="{{sliderValue}}"
      > </paper-slider>
      
      <app-location route="{{route}}" ></app-location>
      <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}"
        tail="{{subRoute}}"
      ></app-route>
    `;
  }

  static get properties() {
    return {
      sliderValue: {
        type: Number,
        value: 0,
        notify: true,
        reflectToAttribute: true,
      }
    };
  }
}

customElements.define('p-slider', PaperSlider);
