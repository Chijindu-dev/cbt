import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';




export default function Timer() {
let [time, setTime] = useState('')
let [startTime, setStartTime] = useState(moment().format('"DD MM YYYY hh:mm:ss"'))
let [endtTime, setendtTime] = useState(moment().add(30,'minutes').format('"DD MM YYYY hh:mm:ss"'))

const navigate = useNavigate()
let [showTimer, setShowTime] = useState(true)   
    const StopStudentExam = () => {
        console.log('stoped!!!!');
        setShowTime(!true)
        navigate('/completed', {replace:true})
    }
    // hms
 

    useEffect(()=>{
        setTimeout(()=>{
            setTime(moment().format('"DD MM YYYY hh:mm:ss"'))

        },1000)
    })
    
 

  return (
      <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', }}>
          {showTimer && <> <h2 style={{float: 'right', margin: '2em'}} 
          id='hms'> Start Time:  {time.split(' ')[3]?.replace('"','')}<br/><br/> 
          Stop Time:  {endtTime.split(' ')[3]?.replace('"','')} 
          </h2>
        
          </>
          }
      </div>
  )
}
