export default function AppMain({ setFromData, stateToggle, currentPost, posts }) {



    return (
        <main>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-8 mt-4">
                        <h1 className="mb-4"> Crea il tuo post! </h1>
                        <form onSubmit={stateToggle}>
                            <div className="row g-3 row-cols-1">
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="Inserisci il nome dell'autore del blog"
                                        name="author"
                                        type="text"
                                        value={currentPost.author}
                                        onChange={setFromData}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="Inserisci il titolo del blog"
                                        name="title"
                                        type="text"
                                        value={currentPost.title}
                                        onChange={setFromData}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="Inserisci il contenuto del blog"
                                        name="content"
                                        type="text"
                                        value={currentPost.content}
                                        onChange={setFromData}
                                    />
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary" type="submit"> Pubblica il tuo post! </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card h-100">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col">
                                        <h3 className="mb-0">{currentPost.title}</h3>
                                    </div>
                                    <div className="col btn-group rounded-2 justify-content-end align-items-center">
                                        <input type="checkbox" className="form-check-input" id='check' />
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
                </div>
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
            </div>
        </main>
    )
}