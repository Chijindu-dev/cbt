
import Def from './DefaultInfo.module.css';
import { AiOutlineClose } from 'react-icons/ai';

const DefaultInfo = ({ closeHandler })=>{
    return(<>
    <article className={Def.Default_Wrapper}>

        <div className={Def.fc__}>
            <h2>Important Information</h2>

            <span> <AiOutlineClose size={24} className={Def.Close} onClick={closeHandler}/> </span>

        </div>
        <hr/>

        
        <p style={{
            padding: '20px 0px',
            margin:'13px'
        }}>
            Please use your <b>Registration number </b>as the username, <br />
            and <b>1234567</b> as the default <u><b>password</b></u>.
        </p>

        <hr/>

        {/* <input type='button' className={Def.Exit_Box_Btn} value='Close' /> */}

    </article>
    </>)
}

export default DefaultInfo;