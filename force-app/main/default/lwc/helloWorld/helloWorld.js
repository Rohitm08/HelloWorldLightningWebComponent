import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {

    //*Properties decorated with @track, creates a one way data binding b/w JS Controller and Template File.
    //*Template would auto render if property value changes in JS.
    @track greeting = 'World';       

  changeHandler(event) {     //*Use Event Handler to create data binding from template to JS.
    this.greeting = event.target.value;
  }
}