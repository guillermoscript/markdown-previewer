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

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`


You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

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
