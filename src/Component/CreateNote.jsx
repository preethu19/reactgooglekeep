import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props)=>{
	const [note, setNote] = useState({
        title: '',
        content: ''
    })
	const [expand, setExpand] = useState(false)
	const InputEvent = (event)=>{
		const {name, value} = event.target;
		setNote((prevData)=>{
			return({
				...prevData,
				[name]: value
			})
		})
	}
	const addEvent = ()=>{
		props.passNote(note);
		setNote({
        title: '',
        content: ''
    })
	}
	const expandIt= ()=>{
		setExpand(true)
	}
	const backToNormal= ()=>{
		setExpand(false)
	}
	
	return(
	<>
		<div className='mx-auto p text-center  mt-3' style={{ width: '200px' }}>
			<form className='text-center'>
				<div className='card shadow-lg'>
					{expand?
				<input type='text' placeholder='Title' value={note.title} name="title" onChange={InputEvent} autoComplete='off' />
					:null}
				<div className='card-body'>
				<textarea rows='' column='' value={note.content} name="content" onChange={InputEvent} placeholder='Write a note' onClick={expandIt} onDoubleClick={backToNormal}/>
					{expand?
				<Button className='bton' onClick={addEvent}>
					<AddIcon />
				</Button>
						:null}
					</div>
				</div>
			</form>
		</div>
	</>
	)
}

export default CreateNote;