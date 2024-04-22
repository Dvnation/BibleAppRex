// import { useState, useEffect } from "react"







// export function Vw({bibleNamer,chapter}){

//     const [VWversion,setVWversion] = useState([])

//     useEffect(() => {
//         let data = require("../src/JSON/VW.json");
//         setVWversion([...VWversion, data]);
//       }, [])


//     let VWscan = []


//     const [VWscanLength,setVWScanLength] = useState()
  
//     VWversion.map(item=>{
//       let XMLBIBLE = item.XMLBIBLE
      
//       XMLBIBLE.map(item=>{
//           let BIBLEBOOK = item.BIBLEBOOK
      
//           BIBLEBOOK.map(item=>{
//               let CHAPTER = item.CHAPTER
      
      
//            console.log(CHAPTER);
//       CHAPTER.map(item=>{
        
//         // console.log(won)
//           if(CHAPTER.length>25 && CHAPTER[chapter]){
      
//             let shake = CHAPTER[chapter].VERS
  
//             shake.map(item=>{
//               VWscan.push(item)
//               console.log(item);

  
  
//             })
            
  
    
//         }
  
//         })
    
    
//        })
//      })
//     return(
  
//       <>
    
//       </>
//     )
//     })


//     return(
//         <>
//         {console.log(VWscan.length)}
//         </>
//     )


// }