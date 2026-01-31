
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import StudentInfo from './components/StudentInfo.jsx'
import './App.css'
import CounterApp from './components/CounterApp.jsx'

function App() {

  return (
    <>
      <Header />
      <StudentInfo 
        name="Nguyen Cong Huy"
        id="KTPM123"
        class="KTPM"
      />
      <Footer />
      <CounterApp />
    </>
  )
}

export default App;
