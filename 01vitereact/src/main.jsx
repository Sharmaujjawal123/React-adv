import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



function MyApp(){
  return (
      <div>
          <h1>Custom App | chai</h1>
      </div>
  )
}
// lec-4
// ae maine custom react folder samjha tha par react ka aisa structure nhi hai
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// isko react accept kar liya 
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

// ae createlement ka structur jo react accept karta hai
// 1 element text 2 obk=ject 3 text 4 any text any evaluated expressiion
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement

)
