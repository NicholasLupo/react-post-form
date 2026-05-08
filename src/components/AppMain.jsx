export default function AppMain() {



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
                                    /* value={}
                                    onChange={} */
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="Inserisci il titolo del blog"
                                        name="title"
                                        type="text"
                                    /* value={ }
                                    onChange={ } */
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        className="form-control"
                                        placeholder="Inserisci il contenuto del blog"
                                        name="content"
                                        type="text"
                                    /* value={ }
                                    onChange={ } */
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </main>
    )
}