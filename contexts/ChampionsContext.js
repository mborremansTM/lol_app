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
         imageUri: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg"
    },
    {
         id: "3",
         name: "Aatrox",
         found: false,

    },
    {
         id: "4",
         name: "Warwick",
         found: true,
    },

];


export function ChampionsProvider(props) {
    const [champions, setChampions] = useState(INITIAL_DATA);

    const foundToTrue = useCallback(
            championToTrue => {
                const trueChampion = {...championToTrue, found: true};
                setChampions(champions.map(champion => championToTrue.id === champion.id ? trueChampion : champion))
            },
            [champions, setChampions]
        );



    const api = useMemo(() => ({
        champions, foundToTrue
    }), [
        champions, foundToTrue
    ]);
    return <ChampionsContext.Provider value={api}>
        {props.children}
    </ChampionsContext.Provider>
}

export const useChampionsContext = () => useContext(ChampionsContext);
