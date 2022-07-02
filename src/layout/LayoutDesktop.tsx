import { LayoutProps } from "."

export const LayoutDesktop = ({ children, secondary }: LayoutProps) => {
    return (
        <div className={"m-0 p-0 lg:bg-cover lg:bg-no-repeat lg:bg-center lg:bg-local lg:min-h-screen lg:flex lg:flex-col lg:justify-start lg:text-center background" + ((secondary) ? "-2" : "")}>
            <div className="hidden lg:block">
                {children}
            </div>
        </div>
    )
}