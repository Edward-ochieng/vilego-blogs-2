import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function DisplayArticle() {
  const [contentState, setContentState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState('')
  const id = useParams();
  console.log(id)

  console.log(id)
  useEffect(() => {
    fetch(`http://localhost:3000/articles/${id.id}`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        const trial = (JSON.parse(data.content))
        // console.log(trial.blocks[0].text)
        console.log(trial)
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
                 <img src='https://i.pinimg.com/236x/4f/95/0d/4f950dbdcdf5d96d1712987a5625a9b0.jpg' className='h-10 w-10 rounded-full border mt-4'></img>
                 </div>
                 <div className='mt-4'>
                 <p className=''>JANE DOE</p>
                 <p className='text-xs md:text-sm md:font-light	'>A Software Engineer graduate from Moringa School, works at his place. </p>
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