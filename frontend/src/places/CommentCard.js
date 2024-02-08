
function CommentCard({ comment, onDelete }) {
    const { currentUser } = useContext(CurrentUser)

    let deleteButton = null;

    if (currentuser?.userId === comment.authorId) {
        deleteButton = (
            <button className="btn btn-danger" onclick={onDelete} >
                Delete Comment
            </button>
        )
    }
    return (
        <div className="border col-sm-4">
            <h2 className="rant">{comment.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{comment.content}</h4>
            <h3>
                <strong>- {comment.author.firstName} {comment.author.lastName}</strong>
            </h3>
            <h4>Rating: {comment.stars}</h4>
            {deleteButton}
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Comment
            </button>
        </div>
    )
}

export default CommentCard;