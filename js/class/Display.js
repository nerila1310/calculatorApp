import Operations from './Operations.js'

class Display {
    constructor(displayPreviousValue, displayCurrentValue){
        this.displayPreviousValue = displayPreviousValue;
        this.displayCurrentValue = displayCurrentValue;
        this.calculator = new Operations();
        this.typeOperacion = undefined;
        this.previousValue = '';
        this.currentValue = '';
        this.mapSigns = {
            add: '+',
            subtract: '-',
            multiply: '*',
            divide: '/'
        }
    }
    
    //* remove number from screen 
    deleteNumber(){
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValues();
    }
    
    //* remove all number from screen
    deleteDisplay(){
        this.currentValue = '';
        this.previousValue = '';
        this.typeOperacion = undefined;
        this.printValues();
    }
    
    //* add number to screen
    addNumber(a){
        if(a === '.' && this.currentValue.includes('.')) return;
        this.currentValue += a;
        this.printValues();
    };
    
    //* calculate operation
    calculate(){
        const currentValue = parseFloat(this.currentValue);
        const previousValue = parseFloat(this.previousValue);
        
        if(isNaN(currentValue) || isNaN(previousValue)) return;
        this.currentValue = this.calculator[this.typeOperacion](previousValue, currentValue).toFixed(4);
    }
    
    //* validate operation
    validate(typeOperacion){
        if(this.typeOperacion === 'equal'){
            this.calculate()
        }else{
            this.calculate();
            this.typeOperacion = typeOperacion;
            this.previousValue = this.currentValue || this.previousValue;
            this.currentValue = '';
            this.printValues();
        }
    }
    
    //* display values on screen
    printValues(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.mapSigns[this.typeOperacion] || ''}`
    }
}

export default Display;