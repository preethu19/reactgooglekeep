import React, {useState} from 'react';
import Heading from './Component/Heading';
import Footer from './Component/Footer';
import CreateNote from './Component/CreateNote';
import Note from './Component/Note';
import './App.css';

function App() {
	const [addItem, setAddItem] = useState([])
	const addNote = (note)=>{
		setAddItem((prevData)=>{
			return [...prevData, note]
		})
		console.log(note)
	}
	const onDelete = (id) => {
    	setAddItem((oldData) => {
      	return (oldData.filter((currentData, index) => {
        	return index !== id;
      	}))
    })
  }
  return (
   	<>
	  <Heading />
	  <CreateNote passNote={addNote} />
	  {addItem.map((val, index) => {
        return (<Note deleteItem={onDelete} id={index} key={index} title={val.title} content={val.content} />)
      })}
	<Footer />
	</>
  );
}

export default App;
