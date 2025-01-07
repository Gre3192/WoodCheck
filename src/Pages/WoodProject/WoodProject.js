import { useRecoilState, useSetRecoilState } from 'recoil';
import { sectionPropAtom } from '../../Atom/sectionPropAtom';
import { sectionGeometryMassAtom } from '../../Atom/sectionGeometryMassAtom';
import Selector from "../../Components/ElementUI/Selector"
import InputBox from "../../Components/ElementUI/InpuBox"
import { useEffect } from "react"
import AutoCompleteInput from "../../Components/ElementUI/AutoCompleteInput"
import woodPropertiesObj from "../../Json/woodPropretiesObj"
import Latex from "react-latex-next"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import BeamSvgSwitcher from "../../Components/SvgComponent/BeamSvgSwitcher"
import getGeometryMass from '../../Utils/getGeometryMass';
import BernoulliDiagram from '../../Components/SvgComponent/BernoulliDiagramSvg';
import NedPositivo from '../../Assets/NedPositivo.svg';
import MedzPositivo from '../../Assets/MedzPositivo.svg';
import MedyPositivo from '../../Assets/MedyPositivo.svg';
import VedzPositivo from '../../Assets/VedzPositivo.svg';
import VedyPositivo from '../../Assets/VedyPositivo.svg';
import MedtorPositivo from '../../Assets/MedtorPositivo.svg';
import ActionSectionDraw from '../../Components/SvgComponent/ActionSectionDraw';



export default function WoodProject() {

    const [sectionProp, setSectionProp] = useRecoilState(sectionPropAtom);
    const setSectionGeometryMass = useSetRecoilState(sectionGeometryMassAtom);


    const handleDurationClass = (item) => {
        setSectionProp((prevState) => ({
            ...prevState,
            durationClass: item,
        }));
    };

    const handleServiceClass = (item) => {
        setSectionProp((prevState) => ({
            ...prevState,
            serviceClass: item,
        }));
    };

    const handleDimension = (e) => {

        const { name, value } = e.target;
        const numericValue = value == '' ? null : parseFloat(value);
        setSectionProp((prevState) => ({
            ...prevState,
            geometry: {
                ...prevState.geometry,
                [name]: {
                    ...prevState.geometry[name],
                    value: numericValue,
                }
            },
        }));
    };

    const handleDimensionUom = (e) => {
        const { name, value } = e.target;
        setSectionProp((prevState) => ({
            ...prevState,
            geometry: {
                ...prevState.geometry,
                [name]: {
                    ...prevState.geometry[name],
                    uom: value,
                }
            }
        }));
    };

    const handleShape = (e) => {

        const name = e.currentTarget.getAttribute('name');
        const value = e.currentTarget.getAttribute('value');
        setSectionProp((prevState) => ({
            ...prevState,
            geometry: {
                ...prevState.geometry,
                [name]: value
            }
        }));
    }

    const handleWoodClass = (e) => {
        setSectionProp((prevState) => ({
            ...prevState,
            mechanics: {
                sectionName: e?.name,
                treeClass: e?.treeClass,
                woodType: e?.woodType,
                fmk: e?.fmk,
                ft0k: e?.ft0k,
                ft90k: e?.ft90k,
                fc0k: e?.fc0k,
                fc90k: e?.fc90k,
                fvk: e?.fvk,
                frk: e?.frk,
                E0_mean: e?.E0_mean,
                E0_05: e?.E0_05,
                E90_mean: e?.E90_mean,
                E90_05: e?.E90_05,
                G_mean: e?.G_mean,
                G_05: e?.G_05,
                Gr_mean: e?.Gr_mean,
                Gr_05: e?.Gr_05,
                rho_k: e?.rho_k,
                rho_mean: e?.rho_mean
            }
        }
        ))
    }

    const handleActingLoad = (e) => {
        const { name, value } = e.target;
        const numericValue = value == '' ? null : parseFloat(value);
        setSectionProp((prevState) => ({
            ...prevState,
            actingLoad: {
                ...prevState.actingLoad,
                [name]: {
                    ...prevState.actingLoad[name],
                    value: numericValue,
                }
            }
        }));
    };

    const handleActingLoadUom = (e) => {
        const { name, value } = e.target;
        setSectionProp((prevState) => ({
            ...prevState,
            actingLoad: {
                ...prevState.actingLoad,
                [name]: {
                    ...prevState.actingLoad[name],
                    uom: value,
                }
            }
        }));
    };

    const handleBeta = (e) => {

        const name = e.currentTarget.getAttribute('name');
        const value = e.currentTarget.getAttribute('value');
        setSectionProp((prevState) => ({
            ...prevState,
            geometry: {
                ...prevState.geometry,
                [name]: value,
            }
        }));

    };

    const durationClasses = [
        {
            label: 'Durata permanente',
            value: 'Permanente',
            description: 'più di 10 anni',
            loadType: 'Il peso proprio e i carichi non rimovibili durante il normale esercizio della struttura',
        },
        {
            label: 'Lunga durata',
            value: 'Lunga',
            description: '6 mesi - 10 anni',
            loadType: 'I carichi permanenti suscettibili di cambiamenti durante il normale esercizio della struttura e i sovraccarichi variabili relativi a magazzini e depositi',
        },
        {
            label: 'Media durata',
            value: 'Media',
            description: '1 settimana - 6 mesi',
            loadType: 'I sovraccarichi variabili di abitazione e di uffici in generale; Il sovraccarico da neve riferito al suolo qsk, calcolato in uno specifico sito ad una altitudine superiori o uguali a 1000 m',
        },
        {
            label: 'Breve durata',
            value: 'Breve',
            description: 'meno di 1 settimana',
            loadType: 'Il sovraccarico da neve riferito al suolo qsk, calcolato in uno specifico sito ad una altitudine inferiori a 1000 m',
        },
        {
            label: 'Istantaneo',
            value: 'istantaneo',
            description: 'Istantaneo',
            loadType: "L'azione del vento e le azioni eccezionali",
        },
    ];

    const serviceClasses = [
        {
            label: 'Classe 1',
            value: '1',
            description: "È caratterizzata da un'umidità del materiale in equilibrio con l'ambiente a una temperatura di 20 °C e un'umidità relativa dell'aria circostante che non superi il 65%, se non per poche settimane all'anno.",
            places: "Ambiente al chiuso, riscaldato d'inverno.",
        },
        {
            label: 'Classe 2',
            value: '2',
            description: "È caratterizzata da un'umidità del materiale in equilibrio con l'ambiente a una temperatura di 20 °C e un'umidità relativa dell'aria circostante che superi l'85% solo per poche settimane all'anno.",
            places: "Ambiente al chiuso, anche non riscaldato d'inverno; Ambiente all'aperto ma non direttamente esposto alle intemperie.",
        },
        {
            label: 'Classe 3',
            value: '3',
            description: "È caratterizzata da umidità più elevata di quella della classe di servizio 2.",
            places: "Ambiente in cui le strutture sono direttamente esposte alle intemperie o frequentemente sottoposte ad inumidimento o immerse.",
        },
    ];

    useEffect(() => {
        setSectionGeometryMass(getGeometryMass(
            sectionProp.geometry.shape,
            sectionProp.geometry.b,
            sectionProp.geometry.h,
            sectionProp.geometry.r,
        ))
    }, [
        sectionProp.geometry?.shape,
        sectionProp.geometry?.b,
        sectionProp.geometry?.h,
        sectionProp.geometry?.r
    ]);

    return (

        <>
            <div className="flex justify-between">

                {/* Sidebar Pannelli */}
                <div>
                    <TabGroup >
                        <TabList className={'-mb-[2px] flex'}>
                            <Tab
                                key={"Sezione"}
                                className="rounded-lg py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:border-t-2 data-[selected]:border-x-2 data-[selected]:rounded-bl-none data-[selected]:rounded-br-none data-[selected]:bg-gray-100"
                            >
                                {"Sezione"}
                            </Tab>
                            <Tab
                                key={"Trave"}
                                className="rounded-lg py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:border-t-2 data-[selected]:border-x-2 data-[selected]:rounded-bl-none data-[selected]:rounded-br-none data-[selected]:bg-gray-100"
                            >
                                {"Trave"}
                            </Tab>
                        </TabList>
                        <TabPanels>

                            {/* Pannello Sezione */}
                            <TabPanel>
                                <div className="flex flex-col gap-14 border-2 rounded-md p-5">

                                    <div className="flex flex-col gap-5">
                                        <Selector
                                            label={"Durata del carico"}
                                            listItem={durationClasses}
                                            handleCheck={handleDurationClass}
                                            value={sectionProp.durationClass}
                                        />
                                        <Selector
                                            label={"Classe di servizio"}
                                            listItem={serviceClasses}
                                            handleCheck={handleServiceClass}
                                            value={sectionProp.serviceClass}
                                        />
                                    </div>

                                    <div>
                                        <AutoCompleteInput
                                            label={"Classe legno"}
                                            listItem={woodPropertiesObj}
                                            onChange={handleWoodClass}
                                            displayValue={sectionProp.mechanics.sectionName}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col">
                                            <p className="block text-sm/6 font-medium text-gray-900 mb-2">Forma sezione</p>
                                            <div className="flex gap-5">
                                                <button name={"shape"} value={"rectangular"} onClick={handleShape} className={'rounded-md'}><BeamSvgSwitcher imageKey={'SezRettangolo'} /></button>
                                                <button name={"shape"} value={"circle"} onClick={handleShape} className={"rounded-md"}><BeamSvgSwitcher imageKey={'SezCerchio'} /></button>
                                            </div>
                                        </div>
                                        {
                                            sectionProp?.geometry?.shape === "circle" ?
                                                <>
                                                    <InputBox
                                                        label={"Raggio"}
                                                        type={"number"}
                                                        keyObjName={"r"}
                                                        onInputChange={handleDimension}
                                                        onSelectChange={handleDimensionUom}
                                                        displayValue={sectionProp.geometry.r.value}
                                                        selectList={['mm', 'cm', 'm']}
                                                        displayValueSelector={sectionProp.geometry.r.uom}
                                                    />
                                                </>
                                                :
                                                <>
                                                    <InputBox
                                                        label={"Base"}
                                                        type={"number"}
                                                        keyObjName={"b"}
                                                        onInputChange={handleDimension}
                                                        onSelectChange={handleDimensionUom}
                                                        displayValue={sectionProp.geometry.b.value}
                                                        selectList={['mm', 'cm', 'm']}
                                                        displayValueSelector={sectionProp.geometry.b.uom}
                                                    />
                                                    <InputBox
                                                        label={"Altezza"}
                                                        type={"number"}
                                                        keyObjName={"h"}
                                                        onInputChange={handleDimension}
                                                        onSelectChange={handleDimensionUom}
                                                        displayValue={sectionProp.geometry.h.value}
                                                        displayValueSelector={sectionProp.geometry.h.uom}
                                                        selectList={['mm', 'cm', 'm']}
                                                    />
                                                </>
                                        }
                                    </div>

                                </div>
                            </TabPanel>


                            {/* Pannello Trave */}
                            <TabPanel>
                                <div className="flex flex-col gap-6 border-2 rounded-md p-5">

                                    <InputBox
                                        label={"Lunghezza"}
                                        type={"number"}
                                        keyObjName={"l"}
                                        onInputChange={handleDimension}
                                        onSelectChange={handleDimensionUom}
                                        displayValue={sectionProp.geometry.l.value}
                                        selectList={['mm', 'cm', 'm']}
                                        displayValueSelector={sectionProp.geometry.l.uom}
                                    />
                                    <div>
                                        <div htmlFor="price" className="block text-sm/6 font-medium text-gray-900 mb-2">
                                            Lunghezza di libera inflessione
                                        </div>
                                        <TabGroup className={'relative'}>
                                            <TabList className={'flex'}>
                                                <Tab
                                                    key={"Asse Y"}
                                                    className="rounded-lg py-1 w-full text-sm/6 font-semibold text-black focus:outline-none data-[selected]:border-2 data-[selected]:bg-gray-100"
                                                >
                                                    {"Asse Y"}
                                                </Tab>
                                                <Tab
                                                    key={"Asse Z"}
                                                    className="rounded-lg py-1 w-full text-sm/6 font-semibold text-black focus:outline-none data-[selected]:border-2 data-[selected]:bg-gray-100"
                                                >
                                                    {"Asse Z"}
                                                </Tab>
                                            </TabList>
                                            <TabPanels className={'mt-3'}>
                                                <TabPanel>
                                                    <div className='flex flex-col gap-3'>
                                                        <button name={"beta_y"} value={2} onClick={handleBeta} className='px-3 py-2 border-2 rounded-md  w-56'><BeamSvgSwitcher imageKey={'Incastro'} /></button>
                                                        <button name={"beta_y"} value={0.5} onClick={handleBeta} className='px-3 py-2 border-2 rounded-md w-56'><BeamSvgSwitcher imageKey={'Incastro_Incastro'} /></button>
                                                        <button name={"beta_y"} value={1 / Math.sqrt(2)} onClick={handleBeta} className='px-3 py-2 border-2 rounded-md w-56'><BeamSvgSwitcher imageKey={'Incastro_Cerniera'} /></button>
                                                        <button name={"beta_y"} value={1} onClick={handleBeta} className='px-3 py-2 border-2 rounded-md w-56'><BeamSvgSwitcher imageKey={'Cerniera_Cerniera'} /></button>
                                                        <button name={"beta_y"} value={1} onClick={handleBeta} className='px-3 py-2 border-2 rounded-md w-56'><BeamSvgSwitcher imageKey={'Incastro_Pattino'} /></button>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className='flex flex-col gap-3'>
                                                        <button name={"beta_z"} value={2} onClick={handleBeta} className='px-3 py-2 border-2 rounded-md w-56'><BeamSvgSwitcher imageKey={'Incastro'} /></button>
                                                        <button name={"beta_z"} value={0.5} onClick={handleBeta} className='px-3 py-2 border-2 rounded-md w-56'><BeamSvgSwitcher imageKey={'Incastro_Incastro'} /></button>
                                                        <button name={"beta_z"} value={1 / Math.sqrt(2)} onClick={handleBeta} className='px-3 py-2 border-2 rounded-md w-56'><BeamSvgSwitcher imageKey={'Incastro_Cerniera'} /></button>
                                                        <button name={"beta_z"} value={1} onClick={handleBeta} className='px-3 py-2 border-2 rounded-md w-56'><BeamSvgSwitcher imageKey={'Cerniera_Cerniera'} /></button>
                                                        <button name={"beta_z"} value={1} onClick={handleBeta} className='px-3 py-2 border-2 rounded-md w-56'><BeamSvgSwitcher imageKey={'Incastro_Pattino'} /></button>
                                                    </div>
                                                </TabPanel>
                                            </TabPanels>
                                        </TabGroup>
                                    </div>
                                </div>
                            </TabPanel>

                        </TabPanels>
                    </TabGroup>
                </div>

                {/* <div className='flex justify-center w-full'> */}
                    {/* <SectionSvg />
                    <BernoulliDiagram /> */}
                    <ActionSectionDraw shape={sectionProp?.geometry?.shape} forces={sectionProp?.actingLoad}/>
                {/* </div> */}

                {/* Sidebar Carichi agenti*/}
                <div>
                    <div className="block text-sm/6 font-medium text-gray-900 mb-2">
                        Carichi agenti
                    </div>
                    <div className="flex flex-col gap-5 border-2 p-5 rounded-md bg-white shadow-2xl">

                        <InputBox
                            label={ 
                                <div className='flex justify-between items-center'>
                                    <Latex>{`$N_{Ed}$`}</Latex>
                                    <img src={NedPositivo}></img>
                                </div>
                            }
                            type={"number"}
                            keyObjName={"Ned"}
                            onInputChange={handleActingLoad}
                            onSelectChange={handleActingLoadUom}
                            displayValue={sectionProp.actingLoad.Ned.value}
                            selectList={['kN', 'N']}
                            displayValueSelector={sectionProp?.actingLoad?.Ned?.uom}
                        />
                        <InputBox
                            label={
                                <div className='flex justify-between items-center'>
                                    <Latex>{`$V_{Ed,z}$`}</Latex>
                                    <img src={VedzPositivo}></img>
                                </div>
                            }
                            type={"number"}
                            keyObjName={"Ved_z"}
                            onInputChange={handleActingLoad}
                            onSelectChange={handleActingLoadUom}
                            displayValue={sectionProp.actingLoad.Ved_z.value}
                            selectList={['kN', 'N']}
                            displayValueSelector={sectionProp.actingLoad.Ved_z.uom}
                        />
                        <InputBox
                            label={
                                <div className='flex justify-between items-center'>
                                    <Latex>{`$V_{Ed,y}$`}</Latex>
                                    <img src={VedyPositivo}></img>
                                </div>
                            }
                            type={"number"}
                            keyObjName={"Ved_y"}
                            onInputChange={handleActingLoad}
                            onSelectChange={handleActingLoadUom}
                            displayValue={sectionProp.actingLoad.Ved_y.value}
                            selectList={['kN', 'N']}
                            displayValueSelector={sectionProp.actingLoad.Ved_y.uom}
                        />
                        <InputBox
                            label={
                                <div className='flex justify-between items-center'>
                                    <Latex>{`$M_{Ed,z}$`}</Latex>
                                    <img src={MedzPositivo}></img>
                                </div>
                            }
                            type={"number"}
                            keyObjName={"Med_z"}
                            onInputChange={handleActingLoad}
                            onSelectChange={handleActingLoadUom}
                            displayValue={sectionProp.actingLoad.Med_z.value}
                            selectList={['kNm', 'kNcm', 'kNmm', 'Nm', 'Ncm', 'Nmm']}
                            displayValueSelector={sectionProp.actingLoad.Med_z.uom}
                        />
                        <InputBox
                            label={
                                <div className='flex justify-between items-center'>
                                    <Latex>{`$M_{Ed,y}$`}</Latex>
                                    <img src={MedyPositivo}></img>
                                </div>
                            }
                            type={"number"}
                            keyObjName={"Med_y"}
                            onInputChange={handleActingLoad}
                            onSelectChange={handleActingLoadUom}
                            displayValue={sectionProp.actingLoad.Med_y.value}
                            selectList={['kNm', 'kNcm', 'kNmm', 'Nm', 'Ncm', 'Nmm']}
                            displayValueSelector={sectionProp.actingLoad.Med_y.uom}
                        />
                        <InputBox
                            label={
                                <div className='flex justify-between items-center'>
                                    <Latex>{`$M_{Ed,tor}$`}</Latex>
                                    <img src={MedtorPositivo}></img>
                                </div>
                            }
                            type={"number"}
                            keyObjName={"Med_tor"}
                            onInputChange={handleActingLoad}
                            onSelectChange={handleActingLoadUom}
                            displayValue={sectionProp.actingLoad.Med_tor.value}
                            selectList={['kNm', 'kNcm', 'kNmm', 'Nm', 'Ncm', 'Nmm']}
                            displayValueSelector={sectionProp.actingLoad.Med_tor.uom}
                        />
                    </div>
                </div>
            </div>
        </>
    )


}