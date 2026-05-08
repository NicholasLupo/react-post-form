export default function ({ posts }) {

    return (
        <div className="row">
            {
                posts.map((post, i) => (

                    <div className="col-md-4" key={i}>
                        <div className="card h-100">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col">
                                        <h3 className="mb-0">{post.title}</h3>
                                    </div>
                                    <div className="col btn-group rounded-2 justify-content-end align-items-center">
                                        <input type="checkbox" className="form-check-input" id='check' />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="blockquote">
                                    <p>{post.content}</p>
                                </div>
                                <footer className="blockquote-footer">
                                    <cite title={post.author}>{post.author}</cite>
                                </footer>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}