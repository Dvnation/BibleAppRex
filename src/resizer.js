import { useEffect, useState } from "react";
import { Amp } from "./AMP";



export function Resizer(){

  const [AMP, setAmp] = useState([])

  const [chapternamer,setchapter] = useState()

  const [scannerLength, setScannerlength] = useState()

  const [bibleName,setBibleName] = useState()


  const[scanners,setscanner] = useState()
  const [CahapterNumbering, setCah] = useState()

  const [bibleNamer,setBiblenamer] = useState()



    const [NAB, setItem] = useState([]);

    useEffect(()=>{
      let AMPs = require("../src/JSON/AMP.json");

        let data = require("../src/JSON/data.json");


    setItem([...NAB, data]);
    setAmp([...AMP, AMPs ])


    },[])






    let scanner = [];
    let iterate = [];
    let scan = []
    let AMPscan = []



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
      Versebuttons.style.background = "lightcoral";
      Versebuttons.style.borderRadius = "3px 7px";
      Versebuttons.style.width = "100%";

      listBearer3.className = "VerseBearer";

      listBearer3.appendChild(Versebuttons);

      const man = document.querySelector("#subCheckerDiv");
man.style.display = "grid"

if(window.innerWidth < 1200){

man.style.gridTemplateColumns = "auto auto auto auto auto"

}

      man.appendChild(listBearer3);



      Versebuttons.addEventListener("click", function () {

        document.querySelector("#subCheckerDiv").style.display = "none"
        document.querySelector("#Appender2").style.display = "block"



        if(window.innerWidth < 1200){

document.querySelector("#Appender2") .style.width = "100%"    
document.querySelector("#Appender2") .style.margin = "auto"        

          }
          


        setCah(CahapterNumbering)

        setchapter(chapter.VERSENUMBER)



        setBiblenamer(bibleName.toUpperCase())

        setBibleName(bibleName)
        
        // document.querySelector("#Appender2").style.visibility = "visible"


        iterate = []
      document.querySelector("#Appender2").innerHTML = "";
      // document.querySelector("#BibleText").style.display = "block";

      // document.querySelector("#textHeader").innerHTML =
      //   bibleName.toUpperCase() + " " + CahapterNumbering;

     
      Chapters.map(rex => {
        let list = document.createElement("li");

        list.style.border = "2px solid black";
        list.style.borderRadius = "3px 7px";
        list.style.background = "wheat";
        let verseList = document.createElement("ul");
        verseList.style.padding = "3px 0px";
        verseList.style.margin = "0px";
        // list.innerHTML = verse.VERSEN

        let Bname = document.createElement("div");
        Bname.innerHTML = "NAB";
        Bname.style.background = "blue";

        list.innerHTML = ` ${Bname.innerHTML} : ${rex.VERSE}`;
       

        scanner.push(list.innerHTML);

        setscanner(scanner)
        setScannerlength(scanner.length)
      });

      let man = Chapters.filter(
        item => Versebuttons.innerHTML == item.VERSENUMBER
      );
      man.map(item => {
     
        iterate.push(item.VERSENUMBER);
      });





   

      setTimeout(() => {
        document.querySelector(`#NET${iterate}`).scrollIntoView();

        setTimeout(() => {
          document.querySelector(
            `#NET${iterate}`
          ).style.opacity = 0;
        }, 100);

        setTimeout(() => {
          document.querySelector(
            `#NET${iterate}`
          ).style.opacity = 0.1;
        }, 200);
        setTimeout(() => {
          document.querySelector(
            `#NET${iterate}`
          ).style.opacity = 0.4;
        }, 300);
        setTimeout(() => {
          document.querySelector(
            `#NET${iterate}`
          ).style.opacity = 0.5;
        }, 400);
        setTimeout(() => {
          document.querySelector(
            `#NET${iterate}`
          ).style.opacity = 0.7;
        }, 500);
        setTimeout(() => {
          document.querySelector(
            `#NET${iterate}`
          ).style.opacity = 1;
        }, 600);
      }, 200);

       

scan = []
scanner = []
AMPscan = []

      


    });













          })
        })
    })
  
})

})})


const book = ()=>{
document.querySelector("#checkerDiv").style.display = "block"
document.querySelector("#subChecker").style.display = "none"
document.querySelector("#subCheckerDiv").style.display = "none"
document.querySelector("#Appender2").style.display = "none"


}

const verse= ()=>{

  document.querySelector("#checkerDiv").style.display = "none"
document.querySelector("#subChecker").style.display = "none"
document.querySelector("#subCheckerDiv").style.display = "grid"
document.querySelector("#Appender2").style.display = "none"
}

const chapter = ()=>{

  document.querySelector("#checkerDiv").style.display = "none"
document.querySelector("#subChecker").style.display = "grid"
document.querySelector("#subCheckerDiv").style.display = "none"
document.querySelector("#Appender2").style.display = "none"
}
   return(
    <>
    {sky}


    <Amp AMP= {AMP}  bibleName = {bibleName} bibleNamer={bibleNamer} scanner={scanners} scannerLength = {scannerLength} chapter= {CahapterNumbering} CahapterNumbering={CahapterNumbering}/>


<div id="section1" style={{display:"flex", justifyContent:"space-between"}}>
    <h5 onClick={()=>book()}>BOOKS</h5>
    <h5 onClick={()=>chapter()}>CHAPTERS</h5>
    <h5 onClick={()=>verse()}>VERSES</h5>


</div>
    <div id="checkerDiv"></div>
    <div id = "subChecker" style={{display:"none"}}></div>
    <div id="subCheckerDiv" style={{display:"none"}}></div>

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
    



          <div id="Appender2" style={{display:"none"}}></div>


    </>
   )


}