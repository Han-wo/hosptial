import React, { useState } from 'react'
import MapComponent from '../Landing/Section/MapComponent'
import '../Landing/Section/index2.css'


function Landing() {
    const [InputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')

    const onChange = (e) => {
        setInputText(e.target.value)
  }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(InputText)
        setInputText('')
  }

    return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
        <button type="submit">검색</button>
      </form>
        <MapComponent searchPlace={Place} />
    </>
  )
}

export default Landing