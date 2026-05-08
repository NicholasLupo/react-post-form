export default function FormMain({ stateToggle, currentPost, setFromData }) {



    return (
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
    )
}