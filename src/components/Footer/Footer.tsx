import { Separator } from '@/components/ui/separator';

const sections = [
    {
        title: 'Product',
        links: [
            { name: 'Overview', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Marketplace', href: '#' },
            { name: 'Features', href: '#' },
            { name: 'Integrations', href: '#' },
            { name: 'Pricing', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { name: 'About', href: '#' },
            { name: 'Team', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Contact', href: '#' },
            { name: 'Privacy', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { name: 'Help', href: '#' },
            { name: 'Sales', href: '#' },
            { name: 'Advertise', href: '#' },
        ],
    },
];

const Footer = () => {
    return (
        <section className="pt-32  pb-5">
            <div className="container">
                <footer>
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        <img
                            src="https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg"
                            alt="logo"
                            className="mb-8 mr-auto h-7 md:mb-0"
                        />
                    </div>
                    <Separator className="my-14" />
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold">{section.title}</h3>
                                <ul className="space-y-4 text-muted-foreground">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="font-medium hover:text-primary"
                                        >
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div>
                            <h3 className="mb-4 font-bold">Legal</h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Term of Services</a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Separator className="my-14" />
                    <p className="text-sm text-muted-foreground">
                        © 2024 Shadcnblocks. All rights reserved.
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Footer;
