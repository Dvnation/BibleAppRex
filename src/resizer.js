import { useEffect, useState } from "react";



export function Resizer(){

    const [NAB, setItem] = useState([]);

    useEffect(()=>{

        let data = require("../src/JSON/data.json");


    setItem([...NAB, data]);


    },[])



    let sky =   NAB.map(items => {

        let XMLBIBLE = items.XMLBIBLE;
  
  
  
  
        XMLBIBLE.map(itemss => {
          let Namebutton = document.createElement("button");
          Namebutton.className = "special";
          Namebutton.style.background = "pink";
  
          Namebutton.style.width = "100%";
  
          Namebutton.innerHTML = itemss.BIBLENAME;
  
          let bibleName = itemss.BIBLENAME;
  
          
  
          let listBearer = document.createElement("ul");
          listBearer.className = "listBearerNames";
  
          listBearer.style.margin = "9px";
          listBearer.style.padding = "0px";
  
          let list = document.createElement("li");
          Namebutton.style.borderRadius = "3px 7px";
  
          list.style.listStyle = "none";
  
          list.appendChild(Namebutton);
  
          listBearer.appendChild(list);
          document.querySelector("#checkerDiv").appendChild(listBearer);


// function scam(){

//     // document.querySelector("#checkerDiv2").style.display = "block";

//           document.querySelector("#subChecker").innerHTML = "";
//         //   document.querySelector("#subCheckerDiv").innerHTML = "";

//         //   document.querySelector("#chapterHeader").style.display = "block";

//           let BibleBook = itemss.BIBLEBOOK;




//           BibleBook.map(items => {
//             let list = document.createElement("li");

//             let ChapterNumberbuttons = document.createElement("button");
//             ChapterNumberbuttons.style.borderRadius = "3px 7px";

//             ChapterNumberbuttons.className = "special";
//             ChapterNumberbuttons.innerHTML = items.CHAPTERNUMBER;

//             ChapterNumberbuttons.style.background = "darksalmon";
//             ChapterNumberbuttons.style.width = "100%";

//             let CahapterNumbering = items.CHAPTERNUMBER;

            

//             // document.querySelector("#Appender").removeChild(document.querySelector("#listBearer"))
//             const listBearer2 = document.createElement("ul");
//             listBearer2.className = "ChapterBearer";

//             listBearer2.appendChild(ChapterNumberbuttons);

//             let sub = document.querySelector("#subChecker");

//             // document.querySelector("#checkerDiv2").appendChild(sub)

//             setTimeout(() => {
//               sub.appendChild(listBearer2);
//             }, 100);

// })}

          Namebutton.addEventListener("click",function(){

document.querySelector("#checkerDiv").style.display = "none"
document.querySelector("#subChecker").style.display = "grid"




document.querySelector("#subChecker").innerHTML = "";
//   document.querySelector("#subCheckerDiv").innerHTML = "";

//   document.querySelector("#chapterHeader").style.display = "block";

  let BibleBook = itemss.BIBLEBOOK;




  BibleBook.map(items => {
    let list = document.createElement("li");

    let ChapterNumberbuttons = document.createElement("button");
    ChapterNumberbuttons.style.borderRadius = "3px 7px";

    ChapterNumberbuttons.className = "special";
    ChapterNumberbuttons.innerHTML = items.CHAPTERNUMBER;

    ChapterNumberbuttons.style.background = "darksalmon";
    ChapterNumberbuttons.style.width = "100%";

    let CahapterNumbering = items.CHAPTERNUMBER;

    

    // document.querySelector("#Appender").removeChild(document.querySelector("#listBearer"))
    const listBearer2 = document.createElement("ul");
    listBearer2.className = "ChapterBearer";

    listBearer2.appendChild(ChapterNumberbuttons);

    let sub = document.querySelector("#subChecker");

    // document.querySelector("#checkerDiv2").appendChild(sub)

    setTimeout(() => {
      sub.appendChild(listBearer2);
    }, 100);

ChapterNumberbuttons.addEventListener("click", function () {
    // document.querySelector("#checkerDiv3").style.display = "block";

    document.querySelector("#subChecker").style.display = "none";

    document.querySelector("#subCheckerDiv").innerHTML = "";

    let Chapters = items.CHAPTER;



    Chapters.map(chapter => {
      let Versebuttons = document.createElement("button");
      const listBearer3 = document.createElement("ul");
      const Header = document.createElement("h1");

      Versebuttons.className = "special";
      Versebuttons.innerHTML = chapter.VERSENUMBER;
      Versebuttons.style.background = "coral";
      Versebuttons.style.borderRadius = "3px 7px";
    //   Versebuttons.style.width = "3em";

      listBearer3.className = "VerseBearer";

      listBearer3.appendChild(Versebuttons);

      const man = document.querySelector("#subCheckerDiv");

      man.appendChild(listBearer3);


          })
        })
    })
  
})

})})
   return(
    <>
    {sky}


    <div id="checkerDiv"></div>
    <div id = "subChecker"></div>
    <div id="subCheckerDiv"></div>

    <div id = "blank" style={{display:"none"}}>small</div>
    <div id="checkerDiv2">
            <h4
              id="chapterHeader"
              style={{display: "none", textAlignLast: "center"}}
            >
              CHAPTERS
            </h4>
            <div id="subChecker" style={{display:"none"}}></div>
          </div>
    
    </>
   )


}