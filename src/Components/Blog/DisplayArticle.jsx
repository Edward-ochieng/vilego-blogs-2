import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function DisplayArticle() {
  const [contentState, setContentState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState('')
  const id = useParams();
  const [firstName, setFirstName] = useState()
  const [secondName, setSecondName] = useState()
  const [pfp, setPfp] = useState()
  const [occupation, setOccupation] = useState()

  console.log(id)
  useEffect(() => {
    fetch(`https://blog-app-production-e04b.up.railway.app/articles/${id.id}`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        setFirstName(data.user.firstname)
        setSecondName(data.user.secondname)
        setPfp(data.user.profile_photo)
        setOccupation(data.user.occupation)
        const trial = (JSON.parse(data.content))
        console.log(data)
        setTitle(data.title)
        const fetchedContentState = convertFromRaw((JSON.parse(data.content)));
        setContentState(EditorState.createWithContent(fetchedContentState));
        console.log(fetchedContentState)
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  return (
    <div>
        <div className='mx-8 md:mx-36 lg:mx-100'>
        <div className='flex md:mx-0 space-x-4 '>
                 <div className='rounded'>
                 <img src={pfp} className='h-10 w-10 rounded-full border mt-4'></img>
                 </div>
                 <div className='mt-4'>
                 <p className=''>{firstName} {secondName}</p>
                 <p className='text-xs md:text-sm md:font-light	'>{occupation} </p>
                 </div>
                 </div>
        </div>
        <div className='mx-8 mt-4 md:mx-36 lg:mx-100'>
        <h2 className='text-center'>{title}</h2>
        </div>
        <div className="mx-8 md:mx-36 lg:mx-100">
            <Editor
            editorState={contentState}
            toolbarHidden
            readOnly={true}
            />
    </div>
    </div>

  );
}

export default DisplayArticle;