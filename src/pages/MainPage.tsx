import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DesktopButton, MobileButton } from '../components/Button';
import { LayoutDesktop } from '../layout/LayoutDesktop';
import { LayoutMobile } from '../layout/LayoutMobile';
import Service from '../service/link-group';

export const MainPage = () => {
    let { slugParams } = useParams();
    const navigation = useNavigate();
    const [links, setLinks] = useState([]);
    const [section, setSection] = useState('Link Penting');

    useEffect(() => {
        if (!slugParams) {
            slugParams = 'public';
        }
        Service.getLinks(slugParams, (res) => {
            setLinks(res.links);
            setSection(res.section);
        }, () => navigation('../404'));
    }, []);

    return (
        <>
            <LayoutDesktop secondary>
                <h1 className="mt-32 md:text-6xl lg:text-9xl bold lg:text-zinc-900 lg:font-bold title">
                    Diklat Terpusat
                </h1>
                <h1 className="md:text-4xl lg:text-7xl lg:text-zinc-800 lg:font-bold title">
                    KAT ITB 2022
                </h1>
                <br />
                <div className="flex flex-col">
                    <h2 className="mb-3 md:text-3xl lg:text-5xl lg:text-zinc-300 lg:font-bold content">{section}</h2>
                </div>
                <div className="flex flex-col overflow-y-scroll max-h-[52vh]">
                    {links && links.map((each: any) => (
                        <DesktopButton content={each.display_text} onClick={() => { window.location.href = each.url; }} />
                    ))}
                    {links.length === 0 && <h2 className="md:text-2xl lg:text-4xl lg:text-zinc-300 content">- No Data -</h2>}
                </div>
                <div className='absolute bottom-10 w-[100%] flex flex-col content-end text-center text-white content'>
                    <p>Dikpus Website ©2022. Created by IT KAT'22.</p>
                    <p>Not a <b>FINAL WEBSITE</b> for KAT ITB 2022. Purposely made only for <b>DIKPUS ITB 2022</b>.</p>
                </div>
            </LayoutDesktop>
            <LayoutMobile secondary>
                <h1 className="mt-24 text-5xl md:text-8xl bold text-zinc-900 font-bold title">
                    Diklat Terpusat
                </h1>
                <h1 className="text-3xl md:text-6xl text-zinc-800 font-bold title">
                    KAT ITB 2022
                </h1>
                <br />
                <div className="flex flex-col">
                    <h2 className="mb-3 text-2xl text-zinc-300 font-bold content">{section}</h2>
                </div>
                <div className="flex flex-col overflow-y-scroll max-h-[65vh]">
                    {links && links.map((each: any) => (
                        <MobileButton content={each.display_text} onClick={() => { window.location.href = each.url; }} />
                    ))}
                    {links.length === 0 && <h2 className="text-2xl text-zinc-300 content">- No Data -</h2>}
                </div>
                <div className='absolute bottom-10 w-[100%] flex flex-col content-end text-center text-white content text-sm'>
                    <p>Dikpus Website ©2022. Created by IT KAT'22.</p>
                    <p>Not a <b>FINAL WEBSITE</b> for KAT ITB 2022.</p>
                    <p>Purposely made only for <b>DIKPUS ITB 2022</b>.</p>
                </div>
            </LayoutMobile>
        </>
    );
};