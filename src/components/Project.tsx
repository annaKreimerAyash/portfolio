import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import "../images/projects/project-3.png";

/* const imgProjects = Object.values(import.meta.glob<string>('../images/projects/*.{png,jpg,jpeg,PNG,JPEG,svg}', { eager: true, query: '?url', import: 'default' }));
const imgProjectsKeys = Object.keys(import.meta.glob<string>('../images/projects/*.{png,jpg,jpeg,PNG,JPEG,svg}', { eager: true, query: '?url', import: 'default' }));
const gallery: { photo: string; key: string; }[] = [];
imgProjects.map((image, j) => (
    gallery.push({ "photo": image, "key": imgProjectsKeys[j] })
)) */


interface Project {
    name: string,
    description: string,
    technologies: string[],
    photo: string
    // children?: ReactNode
}

export default function Project(props: { projects: Project }) {
    return (
        <>
            <Col>
                <h4>{props.projects.name}</h4>
                <p>{props.projects.description}</p>
                <ul>
                    {props.projects.technologies.map((tech, j) => (
                        <li key={j}>{tech}</li>
                    ))}
                </ul>
            </Col>
            <Col>
                <Image src={props.projects.photo} fluid />
            </Col>
        </>
    )
}