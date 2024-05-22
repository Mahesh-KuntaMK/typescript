const num1Element=document.getElementById('num1') as HTMLInputElement;


const num2Element=document.getElementById('num2') as HTMLInputElement;

const buttonElement=document.querySelector('button')!;

const numResults:number[]=[];

const textResults:string[]=[];

type numorString=number|string;

type Result={val:number,timestamp:Date}

function ADD(num1:numorString,num2:numorString){
   

    if(typeof num1==='number' && typeof num2==='number'){
        
        return num1+num2;

    }
    else if(typeof num1==='string' && typeof num2==='string')
    {
      return num2+' '+num2;
    }

    return +num1 + +num2;
}


function printobj(resultObj:Result){

    console.log(resultObj.val)

}
buttonElement.addEventListener('click',()=>{

    const num1=num1Element.value;
    const num2=num2Element.value;
    const result=ADD(+num1,+num2);

    numResults.push(result as number);
    const stringresult=ADD(num1,num2);

    textResults.push(stringresult as string);

    printobj({val:result as number,timestamp:new Date()});

    console.log(numResults);

    console.log(textResults);
    


})


