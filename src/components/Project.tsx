interface Project {
    name: string,
    description: string,
    technologies: string[],
    // children?: ReactNode
}

export default function Project(props: { projects: Project }) {
    return (
        <>
            <h4>{props.projects.name}</h4>
            <h4>{props.projects.name}</h4>
            <p>{props.projects.description}</p>
            <ul>
                {props.projects.technologies.map((tech, j) => (
                    <li key={j}>{tech}</li>
                ))}
            </ul>
        </>
    )
}