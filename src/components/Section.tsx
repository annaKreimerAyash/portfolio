import classes from "./SectionStyle.module.css";
import projectImg from "../images/project-3.png";
import { ReactNode } from "react";
// import githubImg from "../images/github.svg";


// interface Props {
//     children?: ReactNode
// }

// const Button1 = ({ children, ...props }: Props) => (
//     <Button {...props}>{children}</Button>
// );

// const Button1: FC<Props> = ({ children, ...props }) => (
//     <Button {...props}>{children}</Button>
// );

//export default function Section(props: { sectionName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    export default function Section(props: { sectionName: string, children: Iterable<ReactNode>}) {
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