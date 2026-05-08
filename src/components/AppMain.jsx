import FormMain from "./FormMain";
import NewCard from "./NewCard";
import TestCard from "./TestCard";

export default function AppMain({ setFromData, stateToggle, currentPost, posts, checked, setCheck }) {

    return (
        <main>
            <div className="container">
                <div className="row mb-4">
                    <FormMain stateToggle={stateToggle} currentPost={currentPost} setFromData={setFromData} />
                    <TestCard currentPost={currentPost} checked={checked} setCheck={setCheck} />
                </div>
                <NewCard posts={posts} />
            </div>
        </main>
    )
}