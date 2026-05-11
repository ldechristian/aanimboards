import React, { Usable } from "react";

// function to update the character 2D image / 3D model / 3D pose (add a 3D rendering system as a component)
// function to update the character's details
// function to display the FAMILY_TREE as a component

export default function CharacterAbout({ params }:{ params: Usable<unknown> }) {
    const { id } = React.use(params) as { id: string };
    return <div>
        <div className="aspect-[9/16] w-[24rem] bg-blue-200">
            IMAGE / 3D RENDER (turning around)
        </div>

        <div className="bg-violet-200 w-[48rem]">
            <div>
                NAME / LAST NAME
            </div>
            <div>
                PERSONALITIES (ex: HAPPY (80%))
            </div>
        </div>

        <div className="aspect-[16/9] bg-violet-200 w-[48rem]">
            <div>
                FAMILY TREE (parents and children, plus cousins etc...)
            </div>
        </div>
    </div>;
}