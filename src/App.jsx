 
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import {Button} from './components/ui/button'
import {Hero1} from './components/Hero1'

function App() {
 
  return (
    <div>
      <Hero1 />
    <Hero />
     <Button variant="outline"   >
        Click Me
      </Button>
    <div className="bg-gray-900   text-white grid place-content-center pt-20 h-screen">
      
      <h1  className="text-5xl p-3 text-center  border border-blue-500 text-blue-500" >Learning React</h1>
      <div className="flex  justify-center">
          <Card title="React Course" description="Learn the fundamentals of React and build your first React application." imageUrl="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb" />
          <Card title="JavaScript Course" description="Master the JavaScript language and become a proficient developer." imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c" />
          <Card title="CSS Course" description="Style your web applications with modern CSS techniques." imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c" />
      </div>
      
    </div>
    </div>
  )
}

export default App
