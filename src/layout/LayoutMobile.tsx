import { LayoutProps } from "."

export const LayoutMobile = ({ children, secondary }: LayoutProps) => {
    return (
        <div className={"m-0 p-0 lg:hidden bg-cover bg-no-repeat bg-center bg-local min-h-screen flex flex-col text-center background-portrait" + ((secondary) ? "-2" : "")}>
            <div className="lg:hidden">
                {children}
            </div>
        </div>
    )
}