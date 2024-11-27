import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import css from "./Section.module.css";


export const Section = ({title,state, onButtons, total,positivePercentage}) => {
    
    return (<>
        <h2 className={css.title}>{title}</h2>
        <FeedbackOptions onButtons={onButtons} />
        <Statistics state={state} total={total} positivePercentage={positivePercentage } />    
    </>

        
   )
}