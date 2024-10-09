import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import s from "./App.module.css"


function App() {
  

  return (
    <div className="container">
      <h1 className={s.pbTitle}>PhoneBook</h1>
      <ContactForm  /> 
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App
