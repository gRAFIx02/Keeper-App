import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import Zoom from '@mui/material/Zoom';

function CreateArea(props)
{
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const [isClicked, setIsClicked] = useState(false);

  function handleChange(event)
  {
    const {value, name} = event.target;
    setNote(prevVal =>
      ({
        ...prevVal,
        [name]: value
      })
    );
  }

  function submit(event)
  {
    props.onAdd(note);
    setNote(
      {
        title: '',
        content: ''
      }
    );
    event.preventDefault();
  }

  function handleClick()
  {
    setIsClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {isClicked && <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
        <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." value={note.content} rows={isClicked ? 3 : 1}/>
        <Zoom in={isClicked}>
        <Fab onClick={submit}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
