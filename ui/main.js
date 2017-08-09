var button=document.getElementByID('counter');
counter=0;
button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementByID('count');
    span.innerHTML=counter.toString();
};