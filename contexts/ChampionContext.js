import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const ChampionContext = createContext();

const INITIAL_DATA = [
    {
        id: "1",
        name: "Amumu",
        found: true,
        imageUri: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
        nickName: "The sad mummy",
        role: "Tank",
        roleUri: "https://static.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png/revision/latest/scale-to-width-down/50?cb=20181117143558",
        info: "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.",

    },
    {
         id: "2",
         name: "Ashe",
         found: true,
         imageUri: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
         nickName: "The frost archer",
         role: "Marksman",
         info: "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.",
         roleUri: "https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png/revision/latest?cb=20181117143555",

    },
    {
         id: "3",
         name: "Aatrox",
         found: true,
         role: "Fighter",
         imageUri:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
         nickName: "The darkin blade",
         roleUri: "https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png/revision/latest/scale-to-width-down/50?cb=20181117143554",
         info: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",

    },
    {
         id: "4",
         name: "Warwick",
         imageUri: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg",
         found: false,
         nickName: "The uncaged wrath of zaun",
         role: "Fighter",
         roleUri: "https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png/revision/latest/scale-to-width-down/50?cb=20181117143554",
         info: "Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. Bursting out of the shadows, he preys upon those criminals who terrorize the city's depths. Warwick is drawn to blood, and driven mad by its scent. None who spill it can escape him.",
         picture1: "https://www.pairidaiza.eu/sites/default/files/styles/poi_banner/public/media/image/Loup-gris_HEADERR.jpg?h=c85e6686&itok=MXXMLt32",
         picture2: "https://static.tvtropes.org/pmwiki/pub/images/0508a_franklab_6891.png",
         picture3: "https://images.ctfassets.net/cnu0m8re1exe/7AEbLz6qcg2qV5SrDinLSH/aaaba02c914757f115dfe5e46822d719/blood.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
         picture4: "https://media.istockphoto.com/photos/wolf-paws-picture-id505709668?k=20&m=505709668&s=170667a&w=0&h=Dj4I0jWKXmUbGXXJQ8UgOTgB9BnHUg-E7fivOuhiJMk=",
    },
    {
            id: "5",
            name: "Ahri",
            found: true,
            imageUri: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
                    nickName: "The nine-tailed fox",
                    role: "Mage",
                    roleUri: "https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Mage_icon.png/revision/latest?cb=20181117143555",
                    info: "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.",


        },
    {
            id: "6",
            name: "Akali",
            found: true,
            info:"Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.",
            role: "Assassin",
            imageUri:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
            nickName: "The rogue assasin",



        },
    {
            id: "7",
            name: "Akshan",
            found: true,
            role: "Marksman",
            nickName: "The rogue sentinel",
            imageUri: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt58b3304a9d38b091/60f5d6e21929bc58854d00a6/072221_AkshanChampionTheme_Banner.jpg",
            roleUri: "https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png/revision/latest?cb=20181117143555",
            info: "Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon, he rights the wrongs of Runeterra's many scoundrels while living by his own moral code: “Don't be an ass.”",


        },

];


export function ChampionProvider(props) {
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
    return <ChampionContext.Provider value={api}>
        {props.children}
    </ChampionContext.Provider>
}

export const useChampionContext = () => useContext(ChampionContext);
