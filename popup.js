const getQuote=async()=>{
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
          headers: {
            "X-Api-Key": "aeyMDnS05qPm65DJmshdhA==zZwGHccmfdEYfaje"
        }
    });
        const data = await response.json();
        const quote=document.querySelector("#quote");
        const Author=document.querySelector("#Author");
        Author.innerHTML="Author : "+data[0].author;
        quote.innerHTML=data[0].quote;
}
catch(error){
    console.log(error);
}
}


window.addEventListener("load",()=>{
    getQuote();
})