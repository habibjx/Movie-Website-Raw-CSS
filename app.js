
/**
 * Date : Feb 06 2025
 * Title : Movie website
 * Description : This website for movie watching
 * Author : M H R Habib.
 */


// Globals variable
let toggleNavStatus = false;

//Onload handler ====================

window.onload = () => {
    main()




}

function main(){
    // Dom references ====================

    

    // event listeners ====================




}


//Event handler ====================

//DOM function ====================

/**
 * this is for navigation bar open close
 * @param {Object} element 
 */
function navBarCloseOpen(element){
    const navParent = document.querySelector(element);

    if(!toggleNavStatus){
        navParent.classList.add('active');
        toggleNavStatus = true;
    }else{
        navParent.classList.remove('active');
        toggleNavStatus = false;
    } 
}



//Utils function ====================