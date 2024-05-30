
type Props = {
    children?: React.ReactNode;
}

export const  Container:React.FC<Props> = ({children}) => {

    return(
        <div className="container mx-auto max-w-[1200px]">
            {children}
        </div>
    )
}