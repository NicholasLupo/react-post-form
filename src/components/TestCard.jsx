export default function TestCard({ currentPost, checked, setCheck }) {

    return (
        <div className="col-md-4 mt-4">
            <div className="card h-100">
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h3 className="mb-0">{currentPost.title}</h3>
                        </div>
                        <div className="col btn-group rounded-2 justify-content-end align-items-center">
                            <input type="checkbox" className="form-check-input" checked={checked} onClick={(e) => setCheck(e.target.checked)} />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="blockquote">
                        <p>{currentPost.content}</p>
                    </div>
                    <footer className="blockquote-footer">
                        <cite title={currentPost.author}>{currentPost.author}</cite>
                    </footer>
                </div>
            </div>
        </div>
    )
}