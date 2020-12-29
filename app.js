
    function show()
    {
        let a=document.querySelector('#text').value;
        document.querySelector('.face p span').innerHTML= a;   
     
    }
    function change(color)
    {
        document.querySelector('.face p span').style.color=color;
    }

    function changeStyle(style)
    {
        let a=document.querySelector('#text').value;
        document.querySelector('.face p span').innerHTML= a;   
        document.querySelector('.face p span').style.fontStyle=style;
    }

     function changeWeight(style)
    {
        let a=document.querySelector('#text').value;
        document.querySelector('.face p span').innerHTML= a;   
        document.querySelector('.face p span').style.fontWeight=style;
    }
