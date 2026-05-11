import React, { Usable } from "react";

export default function ScenePreview({ params }:{ params: Usable<unknown> }) {
    const { id } = React.use(params) as { id: string };

    return <div>
        <div>
            Characters featured
            (MARK CLEARLY which characters are NEW / INTRODUCED)
        </div>

        <div>
            Places featured
            (MARK CLEARLY which places are NEW / INTRODUCED)
        </div>

        <div>
            display the script's scene part here.
        </div>
        <div>
            CLEARLY display the dialogues and which character is talking (or voice-actor)
        </div>
    </div>;
}