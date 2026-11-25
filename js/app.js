const botaonav=document.getElementById("btn");
const menu = document.querySelector(".menu-tel");
botaonav.addEventListener("click", () =>{
    menu.classList.toggle("ativo");
});
const botao_close = document.querySelector(".btnclose");
botao_close.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});
