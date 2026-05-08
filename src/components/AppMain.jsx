export default function AppMain({ setFromData, count }) {



    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-4">
                        <h1 className="mb-4"> Crea il tuo post! </h1>
                        <form>
                            <div className="row g-3 row-cols-1">
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="Inserisci il nome dell'autore del blog"
                                        name="author"
                                        type="text"
                                        value={count.author}
                                        onChange={setFromData}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="Inserisci il titolo del blog"
                                        name="title"
                                        type="text"
                                        value={count.title}
                                        onChange={setFromData}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="Inserisci il contenuto del blog"
                                        name="content"
                                        type="text"
                                        value={count.content}
                                        onChange={setFromData}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card h-100">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col">
                                        <h3 className="mb-0">{count.title}</h3>
                                    </div>
                                    <div className="col btn-group rounded-2 justify-content-end align-items-center">
                                        <input type="checkbox" className="form-check-input" id='check' />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="blockquote">
                                    <p>{count.content}</p>
                                </div>
                                <footer className="blockquote-footer">
                                    <cite title={count.author}>{count.author}</cite>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}