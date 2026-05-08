import { useState } from "react"
import AppMain from "./components/AppMain"

function App() {

  const [currentPost, setCurrentPost] = useState({
    author: '',
    title: '',
    content: '',
  })

  const [posts, setPosts] = useState([])

  function setFromData(e) {
    setCurrentPost({
      ...currentPost,
      [e.target.name]: e.target.value
    })
  }

  function stateToggle(e) {
    e.preventDefault()
    if (currentPost.author && currentPost.title && currentPost.content) {
      setPosts([...posts, currentPost])
      setCurrentPost({
        author: '',
        title: '',
        content: '',
      })
    }
  }

  const [checked, setCheck] = useState(false)

  return (
    <>
      <AppMain setFromData={setFromData} stateToggle={stateToggle} currentPost={currentPost} posts={posts} checked={checked} setCheck={setCheck} />
    </>
  )
}

export default App