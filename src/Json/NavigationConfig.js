export const sidebarItems = [
    {
        isLabelDivider: true,
        label: 'Combinazioni di carico'
    },
    {
        icon: '',
        label: "Combinazioni SLU",
        toLink: "/loadCombination",
        onClick: () => { },
        isNew: false,
        isPro: false,
        openMode: 'click',
        items: []
    },
    {
        icon: '',
        label: "Combinazioni SLE",
        toLink: "/loadCombination",
        onClick: () => { },
        isNew: false,
        isPro: false,
        openMode: 'click',
        items: []
    },
    {
        isLabelDivider: true,
        label: 'Progetto e Verifica'
    },
    {
        icon: '',
        label: "Sezioni Normali",
        toLink: "/SezioniNormali",
        onClick: () => { },
        isNew: false,
        isPro: false,
        openMode: 'click',
        items: []
    },
    {
        icon: '',
        label: "Travi Speciali",
        toLink: "/specialBeamsProject",
        onClick: () => { },
        isNew: false,
        isPro: false,
        openMode: 'click',
        items: []
    },
    {
        icon: '',
        label: "Intagli",
        toLink: "",
        onClick: () => { },
        isNew: false,
        isPro: false,
        openMode: 'click',
        items: []
    },
    {
        isLabelDivider: true,
        label: 'Collegamenti'
    },

];

export const navbarItems = {
    heead: {
        label: 'UniStruct',
        toLink: '/',
        onclick: () => { }
    },
    items: []
}

export const breadCrumbsItems = {
    divider: '/',
    labels: [
        {
            label: 'Home',
            toLink: '/'
        },
        {
            label: 'Dashboard',
            toLink: '/'
        },
        {
            label: 'Setting',
            toLink: '/'
        },
        {
            label: 'Verifiche',
            toLink: '/'
        }
    ]
}


