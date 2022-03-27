import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const ChampionsContext = createContext();

const INITIAL_DATA = [
    {
        id: "1",
        name: "Amumu",
        found: false,

    },
    {
         id: "2",
         name: "Ashe",
         found: true,
    },

];


export function ChampionsProvider(props) {
    const [champions] = useState(INITIAL_DATA);

    const api = useMemo(() => ({
        champions
    }), [
        champions
    ]);
    return <ChampionsContext.Provider value={api}>
        {props.children}
    </ChampionsContext.Provider>
}

export const useChampionsContext = () => useContext(ChampionsContext);