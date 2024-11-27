import css from "./FeedbackOptions.module.css";
export const FeedbackOptions=({onButtons})=> {

        return (
            <ul className={css.list}>
                <li><button className={css.button} onClick={()=>onButtons('good')}>Good</button></li>
                <li><button className={css.button} onClick={()=>onButtons('neutral')}>Neutral</button></li>
                <li><button className={css.button} onClick={()=>onButtons('bad')}>Bad</button></li>
            </ul>
        )
    
}