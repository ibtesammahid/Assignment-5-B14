import React, { use } from 'react';
import type { technologyType } from '../../Types/technologytype';
import ShowcaseTech from './ShowcaseTech';

interface TechnogyProps{
    technologyPromise: Promise<technologyType[]>
}
const Technology = ({technologyPromise}: TechnogyProps) => {
    

    const technologies = use(technologyPromise)
    console.log(technologies);
    return (
        <div>
            <ShowcaseTech technologies = {technologies}/>
        </div>
    );
};

export default Technology;