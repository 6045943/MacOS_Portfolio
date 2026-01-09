import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

import { Navbar, Welcome, Dock } from "#components"
import { Terminal, Safari, Resume, Finder, TextFile, ImageFile, Contact, Home, Photos } from "#windows"

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TextFile />
      <ImageFile />
      <Contact />
      <Home />
      <Photos />
    </main>
  )
}

export default App