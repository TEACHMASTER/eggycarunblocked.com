import React, { Fragment } from 'react';
import {DescSection} from '../data/Data';


const EggyCarDescription: React.FC<{list:DescSection[],end:string}> = ({list,end}) => {
    return (
        <div className=" md:w-3/4 mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md">
            <Fragment>
                {list.map((section: DescSection, index: number) => (
                <section key={index} className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-yellow-600">
                        {section.title}
                    </h2>
                    <p className="text-gray-700">{section.p}</p>
                </section>
                ))}
                <p className="font-semibold text-lg text-center text-yellow-600" aria-label="End of description">
                    {end}
                </p>
            </Fragment>
        </div>
    );
};

export default EggyCarDescription;
