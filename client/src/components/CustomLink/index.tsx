import {Link} from "react-router-dom";
import {FC, ReactNode} from "react";

type Props = {
    to: string,
    children: ReactNode
}

export const CustomLink: FC<Props> = ({to, children}) => {
    return (
        <Link to={to}>
            {children}
        </Link>
    );
}
