//import { ReactNode } from "react";

export default function Project(props: { data: string  }) {
    return (
        <>
            <h4>{props.data}</h4>
            {/* <h4>{props.data.name}</h4>
            <p>{data.description}</p>
            <ul>
                {data.technologies.map((tech, j) => (
                    <li key={j}>{tech}</li>
                ))}
            </ul> */}
        </>
    )
}