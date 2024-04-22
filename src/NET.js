import { useEffect, useState } from "react";

export function Nets({scanner,bibleName,AMPscan,CahapterNumbering,scannerLength,AMPscanLength}){

const [Net,setNet] = useState([])

useEffect(()=>{

  let net = require("../src/JSON/net.json");


setNet([...Net,net ])


},[])

let scan = []
 Net.map(content => {
  
    let books = content.verses;
    books.map(item => {
      if (
        item.chapter == CahapterNumbering &&
        item.book_name == bibleName 
      ) {
        let texts = item.text;
    scan.push(texts);
        // console.log(scan);
      }
    });
    let Ulist = document.createElement("ul");
    Ulist.style.padding = "0px";
    Ulist.style.width = "fit-content"
    
    for (
      let i = 0;
      i < Math.max(scan.length, scannerLength, AMPscanLength);
      i++
    ) {
      if (scan[i]) {
        let list = document.createElement("li");
        list.style.background = "pink";
        list.id = `NET${i + 1}`;
    
        let man = document.createElement("h1");
        man.innerText = "NET";
        man.style.color = "red";
    
        list.innerHTML = `${i + 1} ${man.innerText}  : ${
         scan[i]
        }`;
        Ulist.appendChild(list);
      }
    
      if (scanner[i]) {
        let list = document.createElement("li");
        list.id = `NAB${i + 1}`;
        list.style.background = "yellow";
    
        list.innerHTML = scanner[i];
        Ulist.appendChild(list);
      }
    
      if(AMPscan){
        let list = document.createElement("li");
        list.id = `AMP${i + 1}`;
        list.style.background = "coral";
        list.style.marginBottom = "18px";
    
        list.innerHTML = `AMP : ${AMPscan[i]}`
        Ulist.appendChild(list);
    
    
    
      }
    
      document.querySelector("#Appender2").append(Ulist);
    }
    })


return (

  <>

  </>
)
}

