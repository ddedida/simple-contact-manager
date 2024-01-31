import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

interface ContactData {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [contacts, setContacts] = useState<ContactData[]>(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const handleContact = (contact: ContactData) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  useEffect(() => {
    console.log("Saving to localStorage");
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id: string) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  return (
    <>
      <Header></Header>
      <div className="mt-8 container mx-auto flex items-start justify-center gap-10">
        <AddContact onData={handleContact} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
