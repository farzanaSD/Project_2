function handleContact(event){
    event.preventDefault();
    console.log("Subscribe Complete");
    const nam=event.target.email.value;
console.log(nam);
}
const imageArray=[
    {
        url: "image/Mask group (2)6.png"
    },
    {
        url:"image/Mask group (1)7.png",
    },
    {
        url:"image/Mask group5.png",
    },
    {
        url:"image/Mask group (2).png",
    },
    {
        url:"image/Mask group (3).png",
    },
    {
        url:"image/Mask group (4).png",
    },
    
    
 ]
 function handleShowMoreProject(){
   
    const projectContainer=document.getElementById("m-text-2");
    const projectDiv=document.createElement("div");
    //console.log(projectDiv);
    for (const item of imageArray) {
       // console.log(item);
        const projectDivImage=document.createElement("div");
    projectDivImage.classList.add("m-img-1")
        projectDivImage.innerHTML=`
    <img src ="${item.url}"alt="">`;
    projectContainer.append(projectDivImage);
    console.log(projectDivImage);
    }
   // console.log("click",projectContainer);
}