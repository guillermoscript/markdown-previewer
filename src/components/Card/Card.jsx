import classes from './card.module.css'

export default function Card({ children, title, onClickTitle, cardName }) {
    return <div className={classes.card}>
        <div className={classes.cardHeader}>
            <div className={classes.cardPill}>
                <img src="/vite.svg" className={classes.cardImg} alt="Vite logo" />
                <h3>{title}</h3>
            </div>
            <div>
                <button onClick={onClickTitle} id={cardName} className="btn btn-primary">Edit</button>
            </div>
        </div>
        <div className={classes.cardBody}>
            {children}
        </div>
    </div>
}