
import React from 'react';
import Question from '../components/question';
// import { useState } from 'react';
// import SubmitButton from '../components/Submit/Submit';
import Timer from '../components/timer'
import { qe } from '../data/q'

export default function Home() {



  return (
    <div>

        <Timer/>
        {/* <SubmitButton /> */}
        <Question q={qe.questions} title={qe.title}
        />

    </div>
  )
}
