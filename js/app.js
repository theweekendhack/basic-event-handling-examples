

function main()
{

       //Get h1
        const heading =  document.querySelector("h1");
        
        //Get all the buttons
        const buttons = document.querySelectorAll("button");// will always return an array

        //This will allow me to set an event to the first element in the array
        buttons[0].addEventListener("click",function(){

           heading.style.color = "#ffff00";
        })

        buttons[1].addEventListener("click",function(){

            heading.style.color ="#00ff00";
        })

        buttons[2].addEventListener("click",function(){

            heading.style.color="#000000";
        })

        buttons[3].addEventListener("click",function(){

            heading.innerText ="DOM Bacchanal";

        })

        buttons[4].addEventListener("click",function(){

            
        })

        buttons[5].addEventListener("click",function(){


        })
    
}


main();