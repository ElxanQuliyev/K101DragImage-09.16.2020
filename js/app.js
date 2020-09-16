const dragArea=document.querySelector('#DragImage .drag-content')
dragArea.addEventListener("dragover",function(e){
    e.preventDefault()
    dragArea.classList.add("active")
})

dragArea.addEventListener("dragleave",function(){
    dragArea.classList.remove("active")
})

dragArea.addEventListener("drop",function(e){
    e.preventDefault();
    dragArea.classList.remove("active")

    FillImage(e.dataTransfer.files)
})

function FillImage(files){
    for(let image of files){
        if(image.type.match("image*")){
            const tr=document.createElement("tr")
            const reader= new FileReader();
            reader.onload=function(rd){
                const td=document.createElement("td");
                const img=document.createElement("img")
                img.src=rd.target.result
                img.height=200;
                img.width=200
                td.appendChild(img)
                tr.insertBefore(td,tr.firstChild)
            }
            reader.readAsDataURL(image)   
            document.querySelector("#imageTable tbody").appendChild(tr);
            document.querySelector("#imageTable").classList.remove("d-none")
        }
    }
}


