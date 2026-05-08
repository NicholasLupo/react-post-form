import { useState } from "react"
import AppMain from "./components/AppMain"

function App() {

  const initialFormData = {

    author: '',
    title: '',
    content: '',

  }

  const [count, setCount] = useState(initialFormData)

  function setFromData(e) {

    setCount({

      ...count,
      [e.target.name]: e.target.value

    })

  }

  return (
    <>
      <AppMain setFromData={setFromData} count={count} />
    </>
  )
}

export default App