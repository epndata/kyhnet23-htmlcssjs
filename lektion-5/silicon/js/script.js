const toggleMenu = () => {
    const element = document.getElementById('main-navbar');
    if (element.style.height === "0%")
        element.style.height = "100%";
    else {
        element.style.height = "0%";
    } 
}