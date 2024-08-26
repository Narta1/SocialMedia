const aelem=document.getElementById('a');
        aelem.addEventListener("click", ()=>{viewStory()});
        function viewStory(){
            
            const takeElem=document.getElementsById('container');
            console.log(takeElem);
            takeElem.innerHTML='<img src="taken-pp9.jpg" alt="" >';

        }