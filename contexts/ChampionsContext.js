import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const ChampionsContext = createContext();

const INITIAL_DATA = [
    {
        id: "1",
        name: "Amumu",
        found: true,

    },
    {
         id: "2",
         name: "Ashe",
         found: true,
         imageUri: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
         nickName: "The frost archer",
    },
    {
         id: "3",
         name: "Aatrox",
         found: true,

    },
    {
         id: "4",
         name: "Warwick",
         imageUri: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg",
         found: false,
         nickName: "The uncaged wrath of zaun",
         role: "Fighter",
         roleUri: "https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png/revision/latest/scale-to-width-down/96?cb=20181117143554",
         info: "Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. Bursting out of the shadows, he preys upon those criminals who terrorize the city's depths. Warwick is drawn to blood, and driven mad by its scent. None who spill it can escape him.",
         picture1: "https://www.pairidaiza.eu/sites/default/files/styles/poi_banner/public/media/image/Loup-gris_HEADERR.jpg?h=c85e6686&itok=MXXMLt32",
         picture2: "https://static.tvtropes.org/pmwiki/pub/images/0508a_franklab_6891.png",
         picture3: "https://images.ctfassets.net/cnu0m8re1exe/7AEbLz6qcg2qV5SrDinLSH/aaaba02c914757f115dfe5e46822d719/blood.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
         picture4: "https://media.istockphoto.com/photos/wolf-paws-picture-id505709668?k=20&m=505709668&s=170667a&w=0&h=Dj4I0jWKXmUbGXXJQ8UgOTgB9BnHUg-E7fivOuhiJMk=",
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
