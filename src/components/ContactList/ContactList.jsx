import { useSelector } from "react-redux"
import {selectContacts} from "../../redux/contactsSlice.js"
import  {selectNameFilter} from "../../redux/filtersSlice.js"
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"


const ContactList = () => {

const contacts = useSelector(selectContacts)
const filterValue = useSelector(selectNameFilter)
const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
);


  return (
    <ul className={s.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contactData={contact} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList
