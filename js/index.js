var siteName=document.getElementById("bookmarkName");
var siteUrl=document.getElementById("bookmarkURL");
var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
let element = document.getElementById("myElement");
var btn=document.getElementById("closeBtn");





var websitesList=[];
function addWebsite(){
  var website={
    name:siteName.value,
    Url:siteUrl.value,
}
if(!vaildationName()&&!vaildationUrl()){
  element.classList.remove("d-none");
} 
    if(vaildationName()&&vaildationUrl()){
      if (websitesList.some((site) => site.name.toLowerCase() === website.name.toLowerCase())) {
        alert("This site is already registered");
        return;
      }
       
    websitesList.push(website);
    clearForm();
    displayWebsites();
    localStorage.setItem("containerwebsites",JSON.stringify(websitesList));
    }
   
}

if(localStorage.getItem("containerwebsites")!==null){
    websitesList=JSON.parse(localStorage.getItem("containerwebsites"));
    displayWebsites();
}

function clearForm(){
    siteName.value=null;
    siteUrl.value=null;
    siteName.classList.remove("is-valid");
    siteUrl.classList.remove("is-valid");
}


function deleteWebsite(index){
  websitesList.splice(index,1)
  localStorage.setItem("containerwebsites",JSON.stringify(websitesList));
  displayWebsites();
}

function visitWebsite(index){

}


function displayWebsites(){
    var container="";
    for(var i=0;i<websitesList.length;i++){
        container+=`
                      <tr>
                        <td>${i+1}</td>
                    <td>${websitesList[i].name}</td>
                    <td>
                        <button onclick="visitWebsite(${i})" class="btn btn-outline-success" data-index="0">
                          <i class="fa-solid fa-eye pe-2"></i>Visit
                        </button>
                      </td>
                      <td>
                        <button onclick="deleteWebsite(${i})" class="btn btn-outline-danger pe-2" data-index="0">
                          <i class="fa-solid fa-trash-can"></i>
                          Delete
                        </button>
                      </td>
                    </tr>`
    }
    document.getElementById("tableContent").innerHTML=container;
}


  
  var nameRegex = /^\w{3,}(\s+\w+)*$/;
  var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
  
 function vaildationName(){
  var textName=siteName.value;
  if(nameRegex.test(textName)){
    siteName.classList.add("is-valid");
    siteName.classList.remove("is-invalid");
    return true;
  }else{
    siteName.classList.add("is-invalid");
    siteName.classList.remove("is-valid");
    return false;
  }
 }

 function vaildationUrl(){
  var textUrl=siteUrl.value;
  if(urlRegex.test(textUrl)){
    siteUrl.classList.add("is-valid");
    siteUrl.classList.remove("is-invalid");
    return true;
  }else{
    siteUrl.classList.add("is-invalid");
    siteUrl.classList.remove("is-valid");
    return false;
  }
 }

 function visitWebsite(index) {
  const url = websitesList[index].Url;
  const fullUrl = url.startsWith("http") ? url : `https://${url}`; 
  window.open(fullUrl, '_blank'); 
}


element.addEventListener('click',function(e){
 if(e.target===document.querySelector(".cartona")){
  element.classList.add("d-none");
 }
})


btn.addEventListener('click',function(){
  element.classList.add("d-none");
})



element.style.height = `${document.documentElement.scrollHeight}px`;

