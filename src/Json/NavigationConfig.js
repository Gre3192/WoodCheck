export const sidebarItems = [
    {
        isLabelDivider: true,
        label: 'Travi'
    },
    {
        icon: '',
        label: "Sezioni Normali",
        toLink: "",
        onClick: () => { },
        isNew: false,
        isPro: false,
        openMode: 'click',
        items: []
    },
    {
        icon: '',
        label: "Spec r",
        toLink: "",
        onClick: () => { },
        isNew: false,
        isPro: false,
        openMode: 'click',
        items: []
    },

];

export const navbarItems = {
    heead: {
        label: 'WoodCheck',
        toLink: '/',
        onclick: () => { }
    },
    items: [
        {
            label: 'Progetto',
            toLink: '/project',
            onclick: () => { }
        },
        {
            label: 'Verifiche SLU',
            toLink: '/checksslu',
            onclick: () => { }
        },
        {
            label: 'Verifiche SLE',
            toLink: '/checkssle',
            onclick: () => { }
        },
        {
            label: 'Verifiche SLU',
            toLink: '/specialBeamsProject',
            onclick: () => { }
        },
        {
            label: 'Verifiche SLU',
            toLink: '/specialBeamsChecksslu',
            onclick: () => { }
        },
    ]
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


