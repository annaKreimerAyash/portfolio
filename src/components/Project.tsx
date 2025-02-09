import projectImg from "../images/project-3.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

interface Project {
    name: string,
    description: string,
    technologies: string[],
    // children?: ReactNode
}

export default function Project(props: { projects: Project }) {
    return (
        <>
            <Container>
                <Row>
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
                        <Image src={projectImg} alt="Project 1" fluid />
                    </Col>
                </Row>
            </Container>

        </>
    )
}