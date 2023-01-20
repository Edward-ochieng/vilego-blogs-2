import {Editor} from 'react-draft-wysiwyg'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { useState, useEffect } from 'react';
import { convertToHTML } from 'draft-convert';
import { useNavigate } from 'react-router-dom';


function TextEditor({status}) {
  useEffect(() =>{
      fetch("https://blog-app-production-e04b.up.railway.app/tags",{
        method: 'GET',
        headers: { 
          Authorization: `Bearer ${token}`,
      }

      }
      ) 
      .then((res) => res.json())
      .then((data) => 
    {  console.log(data)
  }
      )
  },[]
  )
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
      const navigate = useNavigate()
      const [convertedContent, setConvertedContent] = useState(null);
      const [response, setResponse] = useState()
      const [title, setTitle] = useState('')
      const [coverPhoto, setCoverPhoto] = useState()
      const [description, setDescription] = useState()

      useEffect(() => {
        const shortened = (convertToRaw(editorState.getCurrentContent()))
        const descriptionToBe = shortened.blocks[0].text
        const gauge = descriptionToBe.split("")
        if ( gauge.length >= 200) {
          const arr = gauge.splice(0, 199)
          const descToSend = arr.join("")
          setDescription(descToSend)
        } else if(shortened.blocks[1]) {
          const additionalData = shortened.blocks[1].text
          const splittedData = additionalData.split("")
          const arr = gauge.splice(0, 100)
          const splicedData = splittedData.splice(0,70)
          const addedArray = [...arr, ...splicedData]
          setDescription(addedArray.join(""))
        }else{
          setDescription("This is a piece by one of our writers, open for more on the topic above ")
        }
      }, [editorState])
      useEffect (() => {
        let json = convertToRaw(editorState.getCurrentContent());
        setConvertedContent(json);
      }, [ editorState])
    const datas =  JSON.stringify(convertedContent)
    const formData = new FormData();
    const token = localStorage.getItem("jwt");



      function handleSubmit () { 
        formData.append('cover_photo', coverPhoto[0]);
        formData.append('title', title);
        formData.append('content', datas);
        formData.append('description', description);

        fetch('https://blog-app-production-e04b.up.railway.app/articles', {
            method: 'POST', 
            headers: {
              Authorization: `Bearer ${token}`,
            }, 
            body: formData
        }).then((res) => res.json()
        .then((res) => {
          console.log(res)
          console.log(formData)
          navigate(`/${res.user.username}/${res.title}`)
        }))
      }
      function onImageChange(e) {
        setCoverPhoto([...e.target.files]);
      }
    return (
        <div className=''>
          <div className='mx-8 lg:mx-100'>
            <form>
              <input 
              placeholder='TITLE'
              type='text' 
              className='text-2xl h-10 mt-6 border-white placeholder:italic'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
            </form>
          </div>
          <div className='mx-8 lg:mx-100 mt-6'>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="shadow-lg " 
            toolbarClassName="toolbar-class by-gray-"
        /> 
        </div>
        <div className='mx-8 mt-8 space-y-4 lg:mx-100'>
          <h3 className=''>Cover Photo</h3>
          <p className='text-sm'>choose a coverphoto to make your  blog card more appealing</p>
            <input type="file" className=''  onChange={onImageChange}/>
        </div>
        <div className='flex justify-center mt-8'>
          <button 
          className='h-8 w-16 bg-gray-200 rounded-lg'
          onClick={handleSubmit}
          >Submit</button> 
        </div> 
        </div>
    );
  }

export default TextEditor