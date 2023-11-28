import style from './StyledButton.module.css'

// eslint-disable-next-line react/prop-types
export default function StyledButton({text, onClick}) {
    return (
        <button className={style.button} onClick={onClick}>{text || "none"}</button>
    )
}
