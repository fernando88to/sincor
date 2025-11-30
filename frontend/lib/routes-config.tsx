type PageRoutesType = {
    title: string;
    items: PageRoutesItemType;
};

type PageRoutesItemType = {
    title: string;
    href: string;
    icon?: string;
    isComing?: boolean;
    items?: PageRoutesItemType;
}[];

export const hasHrefInChildItems = (href: string): boolean => {
    const checkItems = (items: PageRoutesItemType): boolean => {
        for (const item of items) {
            if (item.items) {
                if (item.items.some(subItem => subItem.href === href)) {
                    return true;
                }
                if (checkItems(item.items)) {
                    return true;
                }
            }
        }
        return false;
    };

    return page_routes.some(route => checkItems(route.items));
};


export const page_routes: PageRoutesType[] = [
    {
        title: "Menu",
        items: [
            {
                title: "Dashboard",
                href: "/dashboard/default",
                icon: "PieChart"
            },
            {
                title: "Cadastro",
                href: "/",
                icon: "ClipboardList",
                items: [
                    {title: "Estado", href: "/dashboard/pages/estados/listagem"},
                    {title: "Comarca", href: "/dashboard/pages/comarcas"},
                    {title: "Distritos", href: "/dashboard/pages/distritos"},
                    {title: "Cartórios", href: "/dashboard/pages/cartorios"},
                ]
            },

            {title: "Users", href: "/dashboard/pages/users", icon: "Users"},
            {
                title: "Settings",
                href: "/dashboard/pages/settings",
                icon: "Settings"
            },
            {
                title: "Authentication",
                href: "/",
                icon: "Fingerprint",
                items: [
                    {title: "Login", href: "/login"},
                    {title: "Register", href: "/register"}
                ]
            },
            {
                title: "Error Pages",
                href: "/",
                icon: "Fingerprint",
                items: [
                    {title: "404", href: "/pages/error/404"},
                    {title: "500", href: "/pages/error/500"}
                ]
            }
        ]
    }
];
