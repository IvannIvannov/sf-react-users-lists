import './App.css';
import Header from '../components/Header';
import UserList from '../components/UserList';
import Footer from '../components/Footer';


function App() {

  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        {/* <!-- Section component  --> */}
        <UserList />

      </main>
      
      <Footer />
    </>
  )
}

export default App
