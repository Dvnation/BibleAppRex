import logo from './logo.svg';
import './App.css';
import { Bibler } from './reserve';
import { useEffect, useState } from 'react';
import { Test } from './tester';
import { Resizer } from './resizer';

function App() {


const [width,changeWidth] = useState(window.innerWidth)

  // useEffect(()=>{


  //   const handleScreenWidthChange = () => {
  //     changeWidth(window.innerWidth);
  //     console.log(width);
  //   };

  //   // Add event listener for window resize
  //   window.addEventListener('resize', handleScreenWidthChange);

  //   // Cleanup function to remove event listener
  //   return () => {
  //     window.removeEventListener('resize', handleScreenWidthChange);
  //   };
  // }, [])


  useEffect(()=>{

console.log(width);


  },[])

  if(width > 1200 || width == 1200 ){
return <Bibler/>

  }
  else{

    return <Resizer/>
  }
// return <Bibler/>


  


  // return (
  //  <>
  //  <Bibler/>
  //  </>
  // );
}

export default App;
