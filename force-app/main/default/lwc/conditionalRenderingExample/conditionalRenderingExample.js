import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv = false;

    @track cityList = ['Rourkela', 'Bengaluru', 'Bhubaneswar', 'Jajpur'];

    showDivHandler (event){
        this.displayDiv = event.target.checked;
    }
}