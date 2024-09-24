function get_classLoad(duration='più di 10 anni') {
    
    if(duration?.toLocaleLowerCase().includes('più di 10 anni')) return 'Permanente'
    else if(duration?.toLocaleLowerCase().includes('6 mesi - 10 anni')) return 'Lunga durata'
    else if(duration?.toLocaleLowerCase().includes('1 settimana - 6 mesi')) return 'Media durata'
    else if(duration?.toLocaleLowerCase().includes('meno di 1 settimana')) return 'Breve durata'
    else if(duration?.toLocaleLowerCase().includes('istantaneo')) return 'Istantaneo'

}