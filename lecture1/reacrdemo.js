const React={
    createElement:function(tag,styles,children){
        const element=document.createElement(tag);
        
        if(typeof children==='object'){

            for(let val of children){
                element.appendChild(val);
            }
        }

        
        else{
            element.innerText=children;
        }
        
        for(let key in styles){
            element.style[key]=styles[key];
        }
        return element;
    }

   
}

const ReactDom = {

     Render : function(element){
        document.getElementById('root').appendChild(element);
    }
}
const header1=React.createElement('h1',{fontsize:"30px" , color: "green"},"Hello World");
ReactDom.Render(header1);


const l1=React.createElement('li',{},"HTML");
const l2=React.createElement('li',{},"CSS");
const l3=React.createElement('li',{},"JavaScript");

const ul1=React.createElement('ul',{fontsize:"30px" , color:'blue'},[l1,l2,l3]);
ReactDom.Render(ul1);