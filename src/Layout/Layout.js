import React, { useState, useRef, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';



const sidebarItems = [
    {
        isLabelDivider: true,
        label: 'Default'
    },
    {
        icon: <Icons icon={'point'} />,
        label: "ClickLabel",
        toLink: "",
        onClick: () => { },
        isNew: true,
        isPro: false,
        openMode: 'click',
        items: [
            {
                icon: <Icons icon={'point'} />,
                label: "ClickLabel",
                toLink: "",
                onClick: () => { },
                isNew: false,
                isPro: true,
                openMode: 'click',
                items: []
            },
            {
                icon: <Icons icon={'point'} />,
                label: "ClickLabel",
                toLink: "",
                onClick: () => { },
                isNew: true,
                isPro: false,
                openMode: 'click',
                items: [
                    {
                        icon: <Icons icon={'point'} />,
                        label: "ClickLabel",
                        toLink: "",
                        onClick: () => { },
                        isNew: true,
                        isPro: false,
                        openMode: 'click',
                        items: []
                    },
                    {
                        icon: <Icons icon={'point'} />,
                        label: "ClickLabel",
                        toLink: "",
                        onClick: () => { },
                        isNew: false,
                        isPro: true,
                        openMode: 'click',
                        items: []
                    },
                ]
            },
            {
                icon: <Icons icon={'point'} />,
                label: "ClickLabel",
                toLink: "",
                onClick: () => { },
                isNew: false,
                isPro: false,
                openMode: 'click',
                items: []
            },
        ]
    },
    {
        icon: <Icons icon={'point'} />,
        label: "HoverLabel",
        toLink: "",
        onClick: () => { },
        isNew: false,
        isPro: false,
        openMode: 'hover',
        items: [
            {
                icon: <Icons icon={'point'} />,
                label: "HoverLabel",
                toLink: "",
                onClick: () => { },
                isNew: false,
                isPro: false,
                openMode: 'hover',
                items: [
                    {
                        icon: <Icons icon={'point'} />,
                        label: "HoverLabel",
                        toLink: "",
                        onClick: () => { },
                        isNew: false,
                        isPro: false,
                        openMode: 'hover',
                        items: [
                            {
                                icon: <Icons icon={'point'} />,
                                label: "HoverLabel",
                                toLink: "",
                                onClick: () => { },
                                isNew: false,
                                isPro: false,
                                openMode: 'hover',
                                items: []
                            },
                        ]
                    },
                    {
                        icon: <Icons icon={'point'} />,
                        label: "HoverLabel",
                        toLink: "",
                        onClick: () => { },
                        isNew: false,
                        isPro: false,
                        openMode: 'hover',
                        items: []
                    },
                ]
            },
            {
                icon: <Icons icon={'point'} />,
                label: "HoverLabel",
                toLink: "",
                onClick: () => { },
                isNew: false,
                isPro: false,
                openMode: 'hover',
                items: []
            },
            {
                icon: <Icons icon={'point'} />,
                label: "HoverLabel",
                toLink: "",
                onClick: () => { },
                isNew: false,
                isPro: false,
                openMode: 'hover',
                items: []
            },
        ]
    },
];

const navbarItems = {
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

const breadCrumbsItems = {
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


Layout.defaultProps = {
    sidebarItems,
    navbarItems,
    breadCrumbsItems
};

export default function Layout({
    sidebarItems,
    navbarItems,
    breadCrumbsItems,
    isVisibleNavbar = true,
    isVisibleSidebar = true,
    isVisibleBreadCrumbs = true
}) {

    const [isSidebarLeftOpen, setIsSidebarLeftOpen] = useState(true);
    const [isSidebarRightOpen, setIsSidebarRightOpen] = useState(false);
    const [isSidebarLeftHidden, setIsSidebarLeftHidden] = useState(false);
    const [sidebarLeftHoverEnabled, setSidebarLeftHoverEnabled] = useState(false);
    const [breadCrumbsHoverEnabled, setBreadCrumbsHoverEnabled] = useState(false);
    const [isLightMode, setIsLightMode] = useState(true)
    const [isBreadCrumbsOpen, setIsBreadCrumbsOpen] = useState(false)



    const toggleSidebarHidden = () => {
        setIsSidebarLeftHidden(!isSidebarLeftHidden);
    };

    const toggleSidebarVisibility = () => {
        setIsSidebarLeftHidden(!isSidebarLeftHidden);
        setIsSidebarLeftOpen(!isSidebarLeftHidden);
        setSidebarLeftHoverEnabled(false);
    };

    const toggleHoverMode = () => {
        setIsSidebarLeftHidden(false);
        setIsSidebarLeftOpen(!isSidebarLeftOpen);
        setSidebarLeftHoverEnabled(!sidebarLeftHoverEnabled);
    };

    return (
        <div className="h-screen flex">
            {isVisibleSidebar &&
                <SidebarLeft
                    sidebarItems={sidebarItems}
                    isOpen={isSidebarLeftOpen}
                    setIsOpen={toggleHoverMode}
                    hoverEnabled={sidebarLeftHoverEnabled}
                    toggleSidebarVisibility={toggleSidebarVisibility}
                    toggleHoverMode={toggleHoverMode}
                    isSidebarHidden={isSidebarLeftHidden}
                />
            }
            <SidebarRight
                setIsSidebarRightOpen={setIsSidebarRightOpen}
                isSidebarRightOpen={isSidebarRightOpen}
                isBreadCrumbsOpen={isBreadCrumbsOpen}
                setIsBreadCrumbsOpen={setIsBreadCrumbsOpen}
                isVisibleBreadCrumbs={isVisibleBreadCrumbs}
                isLightMode={isLightMode}
                setIsLightMode={setIsLightMode}
            />
            <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarLeftOpen && !isSidebarLeftHidden ? 'ml-64' : isSidebarLeftHidden ? '' : 'ml-16'}`}>
                <div className="flex h-16 flex-col drop-shadow-lg z-10">
                    {isVisibleNavbar &&
                        <Navbar
                            navbarItems={navbarItems}
                            toggleSidebarHidden={toggleSidebarHidden}
                            isSidebarHidden={isSidebarLeftHidden}
                            isBreadCrumbsOpen={isBreadCrumbsOpen}
                            setIsBreadCrumbsOpen={setIsBreadCrumbsOpen}
                            isVisibleSidebar={isVisibleSidebar}
                            setIsSidebarRightOpen={setIsSidebarRightOpen}
                            isSidebarRightOpen={isSidebarRightOpen}
                        />}
                    {isVisibleBreadCrumbs &&
                        <BreadCrumbs
                            breadCrumbsItems={breadCrumbsItems}
                            isBreadCrumbsOpen={isBreadCrumbsOpen}
                            setIsBreadCrumbsOpen={setIsBreadCrumbsOpen}
                            breadCrumbsHoverEnabled={breadCrumbsHoverEnabled}
                            setBreadCrumbsHoverEnabled={setBreadCrumbsHoverEnabled}
                        />
                    }
                </div>
                <div className="p-4 h-full overflow-auto bg-[#F3F4F7]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

function Navbar({ isSidebarRightOpen, setIsSidebarRightOpen, toggleSidebarHidden, isSidebarHidden, isLightMode, setIsLightMode, isVisibleSidebar, navbarItems }) {
    return (
        <div className="bg-white text-black border-b p-4 flex z-20 items-center justify-between">

            {/* Lato Sinistro */}
            <div className='items-center flex'>
                {isVisibleSidebar ?
                    <button onClick={toggleSidebarHidden} className={`mr-4 text-white transition-transform duration-200 transform hover:scale-110`}>
                        <Icons icon={!isSidebarHidden ? 'sidebarClosedIcon' : 'sidebarOpenedIcon'} />
                    </button>
                    : null}
                <Link to={navbarItems.heead.toLink} onClick={navbarItems.heead.onClick} className="font-bold text-lg">{navbarItems.heead.label}</Link>
                <div className='ml-4 flex gap-4'>
                    {navbarItems.items.map((item, index) => {
                        return (
                            <Link to={item.toLink} onClick={item.onClick} key={index} className='text-gray-500 duration-300 hover:text-black hover:scale-105'>
                                {item.label}
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* Lato Destro */}
            <div className='items-center flex'>
                <button onClick={() => setIsSidebarRightOpen(!isSidebarRightOpen)} className={`transition-transform duration-500 transform hover:scale-110 hover:-rotate-180`}>
                    <Icons icon={'cog'} />
                </button>
                <hr className="w-px bg-gray-300 h-7 mx-3" />
                <button className='transition-transform duration-200 transform hover:scale-110 '>
                    <Icons icon={'app'} />
                </button>
            </div>
        </div>
    );
};

function SidebarLeft({ isOpen, hoverEnabled, toggleHoverMode, isSidebarHidden, sidebarItems }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`fixed z-30 bg-gray-800 text-white h-full flex flex-col transition-all duration-300 
            ${isOpen && !isSidebarHidden ? 'w-64' : hoverEnabled && !isSidebarHidden ? 'w-16 hover:w-64' : 'overflow-hidden w-0'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* Logo */}
            <div className='text-black border-b border-gray-500 h-16 p-4 flex-shrink-0'>

            </div>

            {/* Lista centrale scrollabile */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar mt-2">
                <ul>
                    {sidebarItems.map((item, index) => {

                        return (
                            <SidebarItem key={index} item={item} isSidebarOpen={isOpen} isSidebarHovered={isHovered} />
                        )
                    })}
                </ul>
            </div>

            {/* Bottoni in basso per switchare il pin della Sidebar */}
            <div className={`flex w-full justify-end border-t py-4 px-5 border-gray-500 flex-shrink-0`}>
                <button onClick={toggleHoverMode} className={`text-white flex    duration-200  hover:scale-110`}>
                    <Icons icon={!isOpen ? 'clipped' : 'notClipped'} className='w-full' />
                </button>
            </div>
        </div>
    );
}

function SidebarRight({ setIsSidebarRightOpen, isSidebarRightOpen, isBreadCrumbsOpen, setIsBreadCrumbsOpen, isVisibleBreadCrumbs, isLightMode, setIsLightMode }) {

    return (
        <div className={`fixed right-0 z-30 bg-gray-800 text-white h-full justify-start flex flex-col transition-all duration-300 ${isSidebarRightOpen ? 'w-64' : 'overflow-hidden w-0'}`}>

            <div className=' text-white flex justify-between items-center font-bold border-b border-gray-500 h-16 p-4'>
                <div className=' text-white font-bold'>Impostazioni</div>
                <button onClick={() => setIsSidebarRightOpen(false)} className='hover:scale-110 duration-300'>
                    <Icons icon={'cross'} />
                </button>
            </div>
            {/* <div className='flex flex-col gap-3 p-4'> */}
            <div className="flex flex-col gap-3 p-4 overflow-y-auto overflow-x-hidden min-h-0 custom-scrollbar">

                {/* Toggle BreadCrumbs */}
                {isVisibleBreadCrumbs ?
                    <div className='flex gap-2 items-center'>
                        <ToggleButton enabled={isBreadCrumbsOpen} setEnabled={setIsBreadCrumbsOpen} />
                        <div>BreadCrumbs</div>
                    </div> : null
                }
                {/* Toggle LightMode */}
                <div className='flex gap-2 items-center'>
                    <ToggleButton enabled={isLightMode} setEnabled={setIsLightMode} />
                    <div className='flex gap-2'>
                        DarkMode <Icons icon={'moon'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

function BreadCrumbs({ isBreadCrumbsOpen, breadCrumbsItems, setBreadCrumbsHoverEnabled, breadCrumbsHoverEnabled }) {

    return (
        <div className={`bg-white justify-between z-10 border-b px-4 py-2 flex items-center text-[#505050] transition-all duration-300 ease-in-out transform ${isBreadCrumbsOpen ? "translate-y-0 opacity-100 h-auto" : "-translate-y-10 opacity-0 h-0 overflow-hidden"}`}>
            <div className='flex gap-1'>
                {breadCrumbsItems.labels.map((item, index) => {
                    return (
                        <div key={index} className='flex gap-1'>
                            {(index != 0 ? breadCrumbsItems.divider : '')}
                            <Link to={item.toLink} className='text-gray-500 hover:text-black duration-300'>
                                {item.label}
                            </Link>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => setBreadCrumbsHoverEnabled(!breadCrumbsHoverEnabled)} className={`text-white flex ${!breadCrumbsHoverEnabled ? 'justify-center' : 'justify-end'} transition-transform duration-300 transform scale-75 hover:scale-90`}>
                <Icons icon={!breadCrumbsHoverEnabled ? 'clipped' : 'notClipped'} />
            </button>
        </div>
    );
}

function Icons({ icon, className = '' }) {

    const iconsMap = {
        sidebarClosedIcon: (
            <svg className='borser' width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.821 10.5L11.8195 11.3737C12.0273 11.5555 12.0484 11.8714 11.8665 12.0792C11.6847 12.2871 11.3688 12.3081 11.161 12.1263L9.161 10.3763C9.0525 10.2813 8.9902 10.1442 8.9902 9.99999C8.9902 9.85581 9.0525 9.71865 9.161 9.62371L11.161 7.87371C11.3688 7.69186 11.6847 7.71292 11.8665 7.92074C12.0484 8.12856 12.0273 8.44444 11.8195 8.62628L10.8209 9.5H14.5C14.7761 9.5 15 9.72386 15 10C15 10.2761 14.7761 10.5 14.5 10.5H10.821ZM4 16C2.8954 16 2 15.1046 2 14V6C2 4.89543 2.8954 4 4 4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4ZM3 14C3 14.5523 3.4477 15 4 15H7V5H4C3.4477 5 3 5.44772 3 6V14ZM8 5V15H16C16.5523 15 17 14.5523 17 14V6C17 5.44771 16.5523 5 16 5H8Z" fill="#505050" />
            </svg>
        ),
        sidebarOpenedIcon: (
            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.179 10.5L12.1805 11.3737C11.9727 11.5556 11.9516 11.8714 12.1335 12.0793C12.3153 12.2871 12.6312 12.3081 12.839 12.1263L14.839 10.3763C14.9475 10.2814 15.0098 10.1442 15.0098 10C15.0098 9.85583 14.9475 9.71866 14.839 9.62372L12.839 7.87372C12.6312 7.69188 12.3153 7.71294 12.1335 7.92075C11.9516 8.12857 11.9727 8.44445 12.1805 8.62629L13.1791 9.50001H9.5C9.22386 9.50001 9 9.72387 9 10C9 10.2762 9.22386 10.5 9.5 10.5H13.179ZM2 14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4H4C2.89543 4 2 4.89543 2 6V14ZM4 15C3.44771 15 3 14.5523 3 14V6C3 5.44772 3.44771 5 4 5H7V15H4ZM8 15V5H16C16.5523 5 17 5.44771 17 6V14C17 14.5523 16.5523 15 16 15H8Z" fill="#505050" />
            </svg>
        ),
        notClipped: (
            <svg fill="none" width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.896 7.60309L4.01834 8.75415C3.35177 9.02078 3.17498 9.88209 3.68262 10.3897L6.29289 13L3 16.2929V17H3.70711L7 13.7071L9.61027 16.3174C10.1179 16.825 10.9792 16.6482 11.2459 15.9817L12.3969 13.104L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L2.85355 2.14645ZM11.6276 12.3347L10.3174 15.6103L4.38973 9.68263L7.66531 8.3724L11.6276 12.3347ZM12.9565 10.7127C12.9294 10.7263 12.9026 10.7403 12.8761 10.7548L13.6202 11.4989L16.8622 9.87793C18.0832 9.26743 18.3473 7.64015 17.382 6.67486L13.3251 2.61804C12.3599 1.65275 10.7326 1.91683 10.1221 3.13783L8.5011 6.37977L9.24523 7.1239C9.25971 7.09739 9.27373 7.07059 9.28728 7.04349L11.0165 3.58504C11.3218 2.97454 12.1354 2.8425 12.618 3.32514L16.6749 7.38197C17.1575 7.86461 17.0255 8.67826 16.415 8.98351L12.9565 10.7127Z" fill="#ff0000" />
            </svg>
        ),
        clipped: (
            <svg fill="none" width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1221 3.13782C10.7326 1.91683 12.3599 1.65275 13.3251 2.61804L17.382 6.67486C18.3472 7.64015 18.0832 9.26743 16.8622 9.87793L13.4037 11.6072C13.0751 11.7715 12.8183 12.0506 12.6818 12.3917L11.2459 15.9817C10.9792 16.6482 10.1179 16.825 9.61027 16.3174L7 13.7071L3.70711 17H3V16.2929L6.29289 13L3.68262 10.3897C3.17498 9.88209 3.35177 9.02078 4.01834 8.75415L7.60829 7.31817C7.94939 7.18173 8.22855 6.92486 8.39285 6.59628L10.1221 3.13782ZM12.618 3.32514C12.1354 2.8425 11.3217 2.97454 11.0165 3.58504L9.28727 7.04349C9.01345 7.59113 8.54818 8.01925 7.97968 8.24665L4.38973 9.68263L10.3174 15.6103L11.7534 12.0203C11.9808 11.4518 12.4089 10.9866 12.9565 10.7127L16.415 8.9835C17.0255 8.67826 17.1575 7.86461 16.6749 7.38197L12.618 3.32514Z" fill="#ff0000" />
            </svg>
        ),
        app: (
            <svg fill="none" width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 11C8.32843 11 9 11.6716 9 12.5V16.5C9 17.3284 8.32843 18 7.5 18H3.5C2.67157 18 2 17.3284 2 16.5V12.5C2 11.6716 2.67157 11 3.5 11H7.5ZM16.5 11C17.3284 11 18 11.6716 18 12.5V16.5C18 17.3284 17.3284 18 16.5 18H12.5C11.6716 18 11 17.3284 11 16.5V12.5C11 11.6716 11.6716 11 12.5 11H16.5ZM7.5 12H3.5C3.22386 12 3 12.2239 3 12.5V16.5C3 16.7761 3.22386 17 3.5 17H7.5C7.77614 17 8 16.7761 8 16.5V12.5C8 12.2239 7.77614 12 7.5 12ZM16.5 12H12.5C12.2239 12 12 12.2239 12 12.5V16.5C12 16.7761 12.2239 17 12.5 17H16.5C16.7761 17 17 16.7761 17 16.5V12.5C17 12.2239 16.7761 12 16.5 12ZM7.5 2C8.32843 2 9 2.67157 9 3.5V7.5C9 8.32843 8.32843 9 7.5 9H3.5C2.67157 9 2 8.32843 2 7.5V3.5C2 2.67157 2.67157 2 3.5 2H7.5ZM16.5 2C17.3284 2 18 2.67157 18 3.5V7.5C18 8.32843 17.3284 9 16.5 9H12.5C11.6716 9 11 8.32843 11 7.5V3.5C11 2.67157 11.6716 2 12.5 2H16.5ZM7.5 3H3.5C3.22386 3 3 3.22386 3 3.5V7.5C3 7.77614 3.22386 8 3.5 8H7.5C7.77614 8 8 7.77614 8 7.5V3.5C8 3.22386 7.77614 3 7.5 3ZM16.5 3H12.5C12.2239 3 12 3.22386 12 3.5V7.5C12 7.77614 12.2239 8 12.5 8H16.5C16.7761 8 17 7.77614 17 7.5V3.5C17 3.22386 16.7761 3 16.5 3Z" fill="#505050" />
            </svg>
        ),
        sun: (
            <svg class="feather feather-sun" fill="none" width="20" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" /><line x1="12" x2="12" y1="1" y2="3" /><line x1="12" x2="12" y1="21" y2="23" /><line x1="4.22" x2="5.64" y1="4.22" y2="5.64" /><line x1="18.36" x2="19.78" y1="18.36" y2="19.78" /><line x1="1" x2="3" y1="12" y2="12" /><line x1="21" x2="23" y1="12" y2="12" /><line x1="4.22" x2="5.64" y1="19.78" y2="18.36" /><line x1="18.36" x2="19.78" y1="5.64" y2="4.22" /></svg>
        ),
        moon: (
            <svg fill="none" width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4932 13.4972C13.5653 16.8362 9.2957 17.9803 5.95663 16.0525C5.20013 15.6157 4.54451 15.052 4.01047 14.3891C6.8412 13.302 8.56844 11.9686 9.60339 9.99298C10.651 7.99322 10.9395 5.83231 10.3628 3.08368C11.2605 3.20197 12.1328 3.49586 12.9378 3.96066C16.2769 5.88847 17.421 10.1581 15.4932 13.4972ZM5.45663 16.9185C9.27399 19.1225 14.1552 17.8145 16.3592 13.9972C18.5631 10.1798 17.2552 5.29859 13.4378 3.09464C12.3371 2.45912 11.1233 2.10222 9.88082 2.03556C9.4801 2.01406 9.17217 2.38526 9.26732 2.77511C9.95545 5.59444 9.70125 7.65125 8.71759 9.52893C7.78322 11.3125 6.17301 12.5595 3.16661 13.6355C2.79667 13.7679 2.65251 14.2148 2.87537 14.5384C3.54192 15.5064 4.41706 16.3183 5.45663 16.9185Z" fill="#FFFFFF" />
            </svg>
        ),
        cog: (
            <svg fill="none" width="25" height="25" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M5.944 0.5L5.858 0.936707L5.52901 2.53467C5.00301 2.73554 4.526 3.02037 4.095 3.35815L2.487 2.8205L2.05501 2.68658L1.83101 3.07233L0.723999 4.9231L0.5 5.3089L0.828003 5.5957L2.07201 6.65399C2.02701 6.93081 1.96901 7.20461 1.96901 7.49542C1.96901 7.78623 2.02701 8.0601 2.07201 8.33691L0.828003 9.3952L0.5 9.68201L0.723999 10.0677L1.83101 11.9186L2.05501 12.3053L2.487 12.1704L4.095 11.6328C4.526 11.9705 5.00301 12.2553 5.52901 12.4562L5.858 14.0541L5.944 14.4909H9.05501L9.142 14.0541L9.47 12.4562C9.996 12.2553 10.473 11.9705 10.904 11.6328L12.512 12.1704L12.944 12.3053L13.169 11.9186L14.275 10.0677L14.5 9.68201L14.171 9.3952L12.927 8.33691C12.973 8.0601 13.03 7.78623 13.03 7.49542C13.03 7.20461 12.973 6.93081 12.927 6.65399L14.171 5.5957L14.5 5.3089L14.275 4.9231L13.169 3.07233L12.944 2.68658L12.512 2.8205L10.904 3.35815C10.473 3.02037 9.996 2.73554 9.47 2.53467L9.142 0.936707L9.05501 0.5H5.944Z" fill-rule="evenodd" stroke="black" stroke-linecap="square" stroke-linejoin="round" /><path clip-rule="evenodd" d="M9.49963 7.49542C9.49963 8.5987 8.60363 9.49414 7.49963 9.49414C6.39563 9.49414 5.49963 8.5987 5.49963 7.49542C5.49963 6.39214 6.39563 5.49677 7.49963 5.49677C8.60363 5.49677 9.49963 6.39214 9.49963 7.49542Z" fill-rule="evenodd" stroke="#212121" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
        ),
        cross: (
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,13.4142136 L8.70710678,16.7071068 L7.29289322,15.2928932 L10.5857864,12 L7.29289322,8.70710678 L8.70710678,7.29289322 L12,10.5857864 L15.2928932,7.29289322 L16.7071068,8.70710678 L13.4142136,12 L16.7071068,15.2928932 L15.2928932,16.7071068 L12,13.4142136 Z" fill='#FFFFFF' />
            </svg>
        ),
        arrow: (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8527 7.64582C16.0484 7.84073 16.0489 8.15731 15.854 8.35292L10.389 13.8374C10.1741 14.0531 9.82477 14.0531 9.60982 13.8374L4.14484 8.35292C3.94993 8.15731 3.95049 7.84073 4.1461 7.64582C4.34171 7.4509 4.65829 7.45147 4.85321 7.64708L9.99942 12.8117L15.1456 7.64708C15.3406 7.45147 15.6571 7.4509 15.8527 7.64582Z" fill="#ffffff" />
            </svg>
        ),
        hoverSidebar: (
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 4C5.22386 4 5 4.22386 5 4.5C5 4.77614 5.22386 5 5.5 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H5.5ZM2.5 9C2.22386 9 2 9.22386 2 9.5C2 9.77614 2.22386 10 2.5 10H13.5C13.7761 10 14 9.77614 14 9.5C14 9.22386 13.7761 9 13.5 9H2.5ZM7 14.5C7 14.2239 7.22386 14 7.5 14H13.5C13.7761 14 14 14.2239 14 14.5C14 14.7761 13.7761 15 13.5 15H7.5C7.22386 15 7 14.7761 7 14.5ZM16.4532 7.73647C16.2579 7.54121 15.9413 7.54121 15.7461 7.73647C15.5508 7.93174 15.5508 8.24832 15.7461 8.44358L16.8067 9.50424L15.7461 10.5649C15.5508 10.7602 15.5508 11.0767 15.7461 11.272C15.9413 11.4673 16.2579 11.4673 16.4532 11.272L17.8674 9.85779C18.0626 9.66253 18.0626 9.34595 17.8674 9.15069L16.4532 7.73647Z" fill="#ffffff" />
            </svg>
        ),
        point: (
            <svg fill="none" width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" fill="#ffffff" />
            </svg>
        ),
    };
    return <div className={`flex justify-center items-center ${className}`}>{iconsMap[icon]}</div>;
}

function ToggleButton({ enabled, setEnabled }) {
    return (
        <button
            onClick={() => setEnabled(!enabled)}
            className={`relative w-10 h-5 flex items-center px-1 rounded-full transition-all duration-300 
                   ${enabled ? "bg-blue-500" : "bg-gray-300"}`}
        >
            <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300
                      ${enabled ? "translate-x-4" : "translate-x-0"}`}
            />
        </button>
    );
}

function SidebarItem({ item, isSidebarOpen, isSidebarHovered }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const contentRef = useRef(null);
    const timeoutRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");
    const hasChildren = item.items && item.items.length > 0;
    const openMode = item.openMode || "click"; // Default: click


    const toggleMenu = () => {
        if (openMode === "click") {
            setIsOpen((prev) => !prev);
        }
    };

    const handleMouseEnter = () => {
        if (openMode === "hover") {
            clearTimeout(timeoutRef.current);
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (openMode === "hover") {
            timeoutRef.current = setTimeout(() => setIsHovered(false), 25);
        }
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setTimeout(() => {
                let totalHeight = contentRef.current.scrollHeight;

                // Sommiamo le altezze dei figli aperti
                const children = contentRef.current.querySelectorAll("ul");
                children.forEach(child => {
                    totalHeight += child.scrollHeight;
                });

                setMaxHeight(`${totalHeight}px`);
            }, 50); // Delay per garantire il rendering completo
        } else {
            setMaxHeight("0px");
        }
    }, [isOpen]);

    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Voce principale */}
            <Link
                to={item.toLink}
                className={`flex ${(isSidebarOpen || isSidebarHovered) ? 'justify-between' : 'justify-center '}  items-center px-2 py-3 cursor-pointer select-none 
                    ${item.isLabelDivider ? 'cursor-default uppercase font-bold text-[#75797F] text-sm' : 'duration-300 hover:bg-gray-700 rounded-lg'}`}
                onClick={toggleMenu}
            >
                <div className="flex gap-2 items-center">
                    <div className='w-full flaex justify-center'>
                        {item.isLabelDivider ? null : item.icon ? item.icon : <Icons icon={'point'} />}
                    </div>
                    {
                        (isSidebarOpen || isSidebarHovered) &&
                        <div className="flex gap-2 items-center">
                            {item.label}
                            {item.isNew && <div className="bg-[#3093F2] rounded-lg text-xs px-2">NEW</div>}
                            {item.isPro && <div className="bg-[#DF4646] rounded-lg text-xs px-2">PRO</div>}
                        </div>
                    }

                </div>
                {hasChildren && (isSidebarOpen || isSidebarHovered) && (
                    <Icons icon={openMode === "hover" ? 'hoverSidebar' : 'arrow'} className={`duration-300 transform ${isOpen || isHovered ? "rotate-180" : ""}`} />
                )}
            </Link>

            {/* Modalità "click": menu a tendina */}
            {hasChildren && openMode === "click" && (isSidebarOpen || isSidebarHovered) && (
                <ul
                    ref={contentRef}
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out pl-2  `}
                    style={{ maxHeight }}
                >
                    {item.items.map((subItem, subIndex) => (
                        <div className={`border-l-2 border-gray-500 ${subIndex === 0 ? 'border-t-2 rounded-tl-lg' : ''}`}>
                            <SidebarItem key={subIndex} item={subItem} isSidebarOpen={isSidebarOpen} isSidebarHovered={isSidebarHovered} />
                        </div>
                    ))}
                </ul>
            )}

            {/* Modalità "hover": finestra laterale esterna */}
            {hasChildren && openMode === "hover" && (isSidebarOpen || isSidebarHovered) && (
                <div
                    className={`absolute left-full -translate-y-12 bg-gray-800 border border-gray-600 rounded-lg shadow-lg min-w-[200px] 
                        transition-opacity duration-500 ease-in-out 
                        ${isHovered ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                >
                    {item.items.map((subItem, subIndex) => (
                        <SidebarItem key={subIndex} item={subItem} isSidebarOpen={isSidebarOpen} isSidebarHovered={isSidebarHovered} />
                    ))}
                </div>
            )}
        </li>
    );
};
