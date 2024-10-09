import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import s from "./App.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {fetchContacts} from "../../redux/contactsOps"
import {selectIsLoading,selectError} from "../../redux/contactsSlice"


function App() {
  const isLoading = useSelector(selectIsLoading)
  const isError = useSelector(selectError)
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])
  

  return (
    <div className="container">
      <h1 className={s.pbTitle}>PhoneBook</h1>
      <ContactForm  /> 
      <SearchBox />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong. Please, try again!</h2>}
      <ContactList />
    </div>
  )
}

export default App
