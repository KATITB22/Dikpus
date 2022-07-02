import { LayoutDesktop } from "../layout/LayoutDesktop";
import { LayoutMobile } from "../layout/LayoutMobile";

export const NotFound = () => (
    <>
        <LayoutDesktop secondary>
            <h1 className="mt-48 md:text-6xl lg:text-9xl bold lg:text-zinc-900 lg:font-bold title">
                Diklat Terpusat
            </h1>
            <h1 className="md:text-4xl lg:text-7xl lg:text-zinc-800 lg:font-bold title">
                KAT ITB 2022
            </h1>
            <br />
            <div className="flex flex-col">
                <h2 className="mb-3 md:text-3xl lg:text-5xl lg:text-orange-800 lg:font-bold content">404 Not Found</h2>
            </div>
        </LayoutDesktop>
        <LayoutMobile secondary>
            <h1 className="mt-36 text-5xl md:text-8xl bold text-zinc-900 font-bold title">
                Diklat Terpusat
            </h1>
            <h1 className="text-3xl md:text-6xl text-zinc-800 font-bold title">
                KAT ITB 2022
            </h1>
            <br />
            <div className="flex flex-col">
                <h2 className="mb-3 text-2xl text-orange-800 font-bold content">404 Not Found</h2>
            </div>
        </LayoutMobile>
    </>
);