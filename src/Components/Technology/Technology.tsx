import React, { use, type Dispatch, type SetStateAction } from 'react';
import type { technologyType } from '../../Types/technologytype';
import ShowcaseTech from './ShowcaseTech';

interface TechnogyProps{
    technologyPromise: Promise<technologyType[]>;
    stackedTech: technologyType[] ;
    setStackedTech: Dispatch<SetStateAction<technologyType[]>>
}
const Technology = ({ technologyPromise, stackedTech, setStackedTech }: TechnogyProps) => {

    const technologies = use(technologyPromise)
    console.log(technologies);
    return (
        <div>
            <ShowcaseTech technologies = {technologies} stackedTech={stackedTech} setStackedTech={setStackedTech} />
        </div>
    );
};

export default Technology;