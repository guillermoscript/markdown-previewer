import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Markdown from 'marked-react';
import './App.css'
import Card from './components/Card/Card'

function App() {
  
  const [markdown, setMarkdown] = useState(`
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  `)
  const [isEdit, setIsEdit] = useState({
    card1: false,
    card2: false
  })

  function handleClickEdit(e) {
    console.log(e.target)
    const { id } = e.target
    console.log(id)
    setIsEdit(prev => {
      console.log(prev)
      return {
        ...prev,
        [id]: !prev[id]
      }
    })

  }

  if (isEdit.card1) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo
          } className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <Card title="Editor" onClickTitle={(e) => handleClickEdit(e)} cardName="card1">
            <textarea typeof='text' value={markdown} onChange={e => {
              setMarkdown(e.target.value)
            }} id="editor"  >
            </textarea>
          </Card>
          </main>
      </div>
    )
  }

  if (isEdit.card2) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <Card title="Previewer" onClickTitle={(e) => handleClickEdit(e)} cardName="card2">
            <div id="preview">
              <Markdown value={markdown} />
            </div>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <Card onClickTitle={(e) => handleClickEdit(e)} cardName="card1" title="Editor">
          <textarea typeof='text' value={markdown} onChange={e => {
            setMarkdown(e.target.value)
          }} id="editor"  ></textarea>
        </Card>
        <Card onClickTitle={(e) => handleClickEdit(e)} cardName="card2" title="Previewer">
          <div id="preview">
            <Markdown value={markdown} />
          </div>
        </Card>
      </main>
    </div>
  )
}

export default App
