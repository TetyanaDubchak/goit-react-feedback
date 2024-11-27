import { Notification } from "components/Notification/Notification";
import css from "./Statistics.module.css";


export const Statistics = ({state,total,positivePercentage})=> {

    return (<>
        <h3 className={css.title}>Statistics</h3>
        {(state.good !== 0 || state.neutral !== 0 || state.bad !== 0) ?
        <ul>
                <li className={css.item}>Good: { state.good}</li>
                <li className={css.item}>Neutral: { state.neutral}</li>
                <li className={css.item}>Bad: {state.bad}</li>
                <li className={css.item}>Total: {total}</li>
                <li className={css.item}>Positive feedback: { positivePercentage}%</li>
        </ul> : <Notification message="There is no feedback"/>
    }     
    </>

        )
    
}