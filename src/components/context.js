import React,{useState,useEffect} from 'react';


const AppContext = React.createContext()


function AppProvider({children}) {
  const [navbar , setNavbar] = useState(false);
  const [loading , setLoading] = useState(true);

  const [banker,setBanker] = useState(false);
  const [developer , setDeveloper] = useState(true);

  const handleClick = () => {
    setBanker(!banker);
    setDeveloper(!developer);
  }


  useEffect(()=>{
    let nav = setTimeout(
      ()=>setNavbar(true)
    ,2000)
    return () => {
      clearTimeout(nav)
    }
  },[])

  useEffect(()=>{
    let loadingPage = setTimeout(
      ()=>setLoading(false)
    ,1500)
    return ()=>{
      clearTimeout(loadingPage)
    }
    },[])

  return (
    <AppContext.Provider value={{navbar,loading,banker,developer,handleClick}}>
      {children}
    </AppContext.Provider>
  )
}

export {AppProvider,AppContext}