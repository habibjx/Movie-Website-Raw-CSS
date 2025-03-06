
/**
 * Date : Feb 06 2025
 * Title : Movie website
 * Description : This website for movie watching
 * Author : M H R Habib.
 */


// Globals variable
let toggleNavStatus = false;

//Onload handler 

window.onload = () => {
    main()
    const searchSub = document.querySelector('.searchSub');
    console.log(searchSub)
}

function main(){
    // Dom references

    

    // event listeners




}


//Event handler

//DOM function

function menuOpenCloseLargeScreen(){
    const searchSub = document.querySelector('.searchSub');

    if(!toggleNavStatus){
        searchSub.classList.add('active');
        toggleNavStatus = true;
    }else{
        searchSub.classList.remove('active');
        toggleNavStatus = false;
    }


    
}

//Utils function 