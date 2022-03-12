import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = 'BMI Calculator';   
    
  /*  @track bmiData = {
            weight : 0,
            height : 0,
            result : 0
        } */
    weight;
    height;

    bmi;
    onWeightChange(event){
        this.weight = parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.height = parseFloat(event.target.value);
    }

    calculateBMI(){
        try{
        this.bmi = this.weight/(this.height*this.height);
        } catch(error){
            this.bmi = undefined;
        }
    }

    //*JS getters can be used to compute the value of a property.
    get bmiValue(){
        if(this.bmi === undefined){
            return "";
        }
        return `Your BMI is: ${this.bmi}`;
    }
}