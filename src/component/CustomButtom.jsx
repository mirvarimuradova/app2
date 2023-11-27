import React from 'react'
import '../App.css'
import { useState } from 'react'
const CustomButtom = () => {
    const [isVisible, setIsVisible] = useState(false);
 const [item,setItem]= useState(false)
 function textButton(){
   setItem(!item)
 }
 function warnButton(){
  let button = document.querySelector(".varn")
  button.style.background = 'red'
    alert('Warning')
 }
  return (
    <div>
      <button onClick={textButton}>text</button><br/>
      {item &&  <p className='prg1'>
      Nesimi’nin yaşamı hakkında bugün elimizde çok sınırlı bilgiler bulunmaktadır ve değişik kaynaklardan sağlanan bilgiler de çoğu zaman birbiriyle çelişkilidir. Adı İbn Hâcer el-Askalanî'nin eserinde Nesimüddin, Sıbt İbnü'l-Acemi'nin eserinde Ali ve diğer 
      bazı kaynaklarda Celaleddin ve Ömer olarak geçmektir.[1] İmamüddin gerçek adı değil lakabıdır.[1]
      </p>}
      
      <button className='varn' onClick={warnButton}>warnMessage</button><br/>
      <button onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
        

      >hint</button>
       {isVisible && <p>This is the paragraph content.</p>}
    </div>
  )
}

export default CustomButtom
