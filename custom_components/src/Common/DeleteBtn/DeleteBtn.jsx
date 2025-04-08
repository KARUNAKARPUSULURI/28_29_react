const DeleteBtn = ({btnProps}) => {
    return (
        <>
            <button style={btnProps.style}>{btnProps.name}</button>
        </>
    )
}

export default DeleteBtn;