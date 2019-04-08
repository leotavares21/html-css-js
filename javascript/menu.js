 "use strict"

            const specHeader = document.querySelector(".spec-header");
            const listaMenu = specHeader.querySelector(".items-nav");

            function ativarMenu(){
                listaMenu.classList.add("ativarMenu");
            }
            
            function fecharMenu(){
                listaMenu.classList.remove("ativarMenu");
            }