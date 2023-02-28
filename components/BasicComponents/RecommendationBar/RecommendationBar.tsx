'use client';

import RecommendationGroup from "./RecommendationGroup";
import dw from '../../../public/dw.jpg';

export default function RecommendationBar() {

    const data = 
    [
        {
            src: dw,
            alt: 'fish picture',
            fish: 'steelhead',
            fishNumber: 1,
            catches: 100,
            bait: 'bead',
            water: 'Niagara River',
            userName: 'Ejswarrior',
        },
    ]


    return(
        <div>
                <RecommendationGroup data={data}/>
        </div>
    )
}