
import sub from './Submit.module.css';

const SubmitButton = ({ areYouSureHandler })=>{
    return(<>
        <article className={sub.Extreme}>
            <input type='button' className={sub.Submit_Exam} value='Submit' 
            title='Submit Questions Here'
            onClick={areYouSureHandler}
            />


        </article>
    </>)
}

export default SubmitButton;