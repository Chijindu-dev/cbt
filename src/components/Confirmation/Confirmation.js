

import Confam from './Confirmation.module.css';
import { useNavigate } from 'react-router-dom';

const Confirmation = ({ areYouSureHandlerExit })=>{
    const navigateToSubmit = useNavigate();

    const navigateToSubmitHander = ()=> navigateToSubmit('/completed')
    return(<>
    <div style={{
        display:'flex',
        justifyContent: 'center'
    }}>

            <article className={Confam.__Box__}>

                <h2 className={Confam.__Surety__}>Do you want to submit?</h2>

                <div className={Confam.Yes_Or_No_}>
                    <p className={Confam.__Yes__OOO} onClick={navigateToSubmitHander}>Yes</p>

                    <p className={Confam.__No__OOO} 
                    onClick={areYouSureHandlerExit}>No</p>
                </div>

            </article>

    </div>
    </>)
}

export default Confirmation;