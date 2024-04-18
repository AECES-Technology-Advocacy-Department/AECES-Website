import ExecutiveBoard from "./Body/ExecutiveBoard.tsx"
import Projects from "./Body/Projects.tsx"

function Body() {
    return (
        <>
            <div className="body-container position-relative">
                <Projects /> 
                <ExecutiveBoard />
            </div>
        </>
    )
}

export default Body