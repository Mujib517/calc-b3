function Button({ value, type, onClick }) {

    const onBtnClick = () => {
        onClick(value, type); // call parent
    }

    return <button
        onClick={onBtnClick}
        className="btn btn-dark btn-lg">{value}</button>
}

export default Button;