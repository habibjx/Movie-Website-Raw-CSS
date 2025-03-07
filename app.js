
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

/**
 * this is for tablet nav toggle
 */
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
/**
 * this is for phone nav toggle
 */
function menuOpenCloseSmallScreen(){
    const navWrapper = document.querySelector('.nav-wrapper');

    if(!toggleNavStatus){
        navWrapper.classList.add('active');
        toggleNavStatus = true;
    }else{
        navWrapper.classList.remove('active');
        toggleNavStatus = false;
    } 
}



//Utils function 