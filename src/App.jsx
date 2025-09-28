import React from "react";
import { MainPage } from "./features/MainPage/MainPage"
import { PetPage } from "./features/PetPage";

const PAGES = {
  '/': MainPage,
  '/pet': PetPage,
}

function App() {
  const PageComponent = React.useMemo(() => {
    const pathname = window.location.pathname;

    const component = PAGES[pathname]

    if (!component) {
      window.location.href = '/'
    }

    return component
  }, [])
  
  return (
    <>
      <PageComponent />
    </>
  )
}

export default App
