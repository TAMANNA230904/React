import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>My App !!</h1>
        </div>
    )
}

const anotherElement=(
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const myvariable="Learning React"
const reactElement=React.createElement(
    'a',
    {href:'https://google.com' ,target:'_blank'},
    'Click on the link',
    //vaiable injection in the tree at last
    myvariable
)

ReactDOM.createRoot(document.getElementById('root')).render( 
    <App/>
    // <MyApp />
  // anotherElement
   //reactElement
 
)
