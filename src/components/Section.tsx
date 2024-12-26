import classes from "./SectionStyle.module.css";
import projectImg from "../images/project-3.png";
// import githubImg from "../images/github.svg";

//(props: { sectionName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
export default function Section(props: { sectionName: string, children?: JSX.Element | JSX.Element[] }) {
    return (
        <div className={classes.row}>
            <div className={classes['work__box']}>
                <div className={classes['work__text']}>
                    <h3>{props.sectionName}</h3>
                    {props.children}
                </div>
                <div className={classes['work__image-box']}>
                    <img src={projectImg} className={classes['work__image']} alt="Project 1" />
                </div>
            </div>
        </div>
    )
}