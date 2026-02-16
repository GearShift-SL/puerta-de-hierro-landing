type SiteConfig = {
    title: string;
    description: string;
    author: string;
    siteUrl: string;
    logo?: string;
    ogImage: string;
    locale: string;
    twitter: {
        site: string;
    };
};

type Link = {
    text: string;
    href: string;
    target?: string;
    };

type Action = {
    href: string;
    text: string;
    icon?: string;
};

type FooterLinkGroup = {
    title: string;
    links: Link[];
};

type SocialLink = {
    ariaLabel: string;
    icon: string;
    href: string;
};

type NavigationConfig = {
    header: {
        links: Link[];
        actions: Action[];
    };
    footer: {
        links: FooterLinkGroup[];
        secondaryLinks: Link[];
        socialLinks: SocialLink[];
        contactDetails: {
            address: string;
            addressLink: string;
            email: string;
        };
        footNote: string;
    };
};

export const SITE = (): SiteConfig => {
    return {
        title: "CLEMENT Puerta de Hierro - Chalets de Gran Lujo en Madrid",
        description:
            "Descubre la magia de los chalets de Gran Lujo en Madrid. Disfruta de una experiencia única en un entorno tranquilo y natural, perfecto para relajarte y disfrutar de la naturaleza.",
        author: "Clement",
        siteUrl: "https://mywebsite.com/",
        ogImage: "/src/assets/images/og-image.jpg", // Needs to be an absolute path /src/...
        locale: "es_ES",
        twitter: { site: "@mywebsite" },
    };
};

export const NAVIGATION = (): NavigationConfig => ({
    header: {
        links: [
            { text: "Introducción", href: "/#introduccion" },
            { text: "La Promoción", href: "/#vista-aerea" },
            { text: "Ubicación", href: "/#ubicacion" },
            { text: "Calidades", href: "/#calidades" },
            { text: "Viviendas", href: "/#viviendas" },
            { text: "Contacto", href: "/#contacto" },
        ],
        actions: [
            {
                href: `/AF_Dossier Puerta de Hierro.pdf`,
                text: "Descargar dossier",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`
            },
            {
                href: `/#contacto`,
                text: "Contacto",
            },
        ],
    },

    footer: {
        links: [
            {
                title: "CLEMENT Puerta de Hierro",
                links: [
                    { text: "Contacto", href: "#contacto" },
                ],
            },
            {
                title: "Clement",
                links: [
                    { text: "Quiénes somos", href: "#nosotros" },
                    { text: "Otras promociones", href: "https://clement.es/", target: "_blank" },
                ],
            },
        ],
        secondaryLinks: [
            { text: "Términos y condiciones", href: `/terms/` },
            { text: "Política de privacidad", href: `/privacy/` },
        ],
        socialLinks: [
            // {
            //     ariaLabel: "X",
            //     icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>`,
            //     href: "https://x.com/mywebsite",
            // },
            // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/mywebsite' },
            // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/mywebsite' },
            // { ariaLabel: "RSS", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rss"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M4 4a16 16 0 0 1 16 16" /><path d="M4 11a9 9 0 0 1 9 9" /></svg>`, href: `/rss.xml` },
        ],
        contactDetails: {
            address: "Calle Santibáñez de Béjar, 7, 28042, Madrid",
            addressLink: "https://maps.app.goo.gl/wXeAWh2rh2ssrLxg9",
            email: "info@clement.es",
        },
        footNote: `
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© ${new Date().getFullYear()} <a href="/" class="hover:underline"
            >${SITE().title}</a
          >
        </span>
          `,
    },
});
