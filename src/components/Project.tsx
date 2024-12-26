// import React from "react";

//import { ReactNode } from "react";

// interface ProjectProps {
//     projects: Project;
// }

interface Project
{
  name: string, 
  description: string,
  technologies: string[],
}
// export class Project extends React.Component<ProjectProps, void> {
    export default function Project (props: {projects: Project})  {
    // public render() {
//export default function Project(props: { data: Iterable<ReactNode> } ) {
    return (
        <>
            <h4>{props.projects.name}</h4>
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