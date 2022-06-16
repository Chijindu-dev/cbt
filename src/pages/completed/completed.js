
import './completed.css';
import { useNavigate, NavLink } from 'react-router-dom';

const Completed = ()=>{

    // let startQuizHandler = ()=> window.location.href = `http://localhost:3000/login`;


    const navigateLogInPage = useNavigate();
    const navigateLogInPageHandler = ()=>{
        sessionStorage.clear();
        localStorage.clear();
        window.location.reload()

    }

    return(<>
        <article className='_centralise_'>

            <section className="Completed_">
                <h2 className="Report"> Here comes the end of the Mock Examinaton </h2>
                <p>
                    Your result has been entered into the leaderboard
                </p>
                
                <button className='_Starter' 
                onClick={navigateLogInPageHandler}
                >
                    Start Quiz
                </button>
            </section>

        </article>
    </>)
}

export default Completed;








// plesae sir, just leave it like that. I have seen what Can, if I 
// touch it, everything will scatter. Tell them it is like that so that the person will go away
// and the next person enters and insert his own URL to avoid redundancy of results