'use client';

// every element has a POSITION
// every element has a SIZE (rectangles have Width+Length, circles have Radius, etc... for more complex shapes make other Classes and Functions, draw() functions especially)
// every element must be rendered on-the-go using a RENDER() function

import { useState } from "react";

// elements such as : Character, Scene and more should be dragable and double-clickable to open.

class Vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle {
    position: Vector2;
    size: Vector2;
    color: string;

    constructor(position: Vector2, size: Vector2, color: string) {
        this.position = position;
        this.size = size;
        this.color = color;
    }
    render() {

    }
}

class Circle {
    position: Vector2;
    radius: number;
    color: string;

    constructor(position: Vector2, radius: number, color: string) {
        this.position = position;
        this.radius = radius;
        this.color = color;
    }
    render() {

    }
}

export default function Whiteboard() {
    // Start pos on mouse click
    const [startPos, setStartPos] = useState<Vector2|null>(null);
    // End pos on mouse release
    const [lastPos, setLastPos] = useState<Vector2|null>(null);

    // Stored difference (offset from center (0;0))
    const [difference, setDifference] = useState<Vector2>(new Vector2(0, 0));

    const [scale, setScale] = useState<number>(1);

    const whiteboard = [
        new Rectangle(new Vector2(0, 0), new Vector2(80, 100), "#fd6c9e"),
        new Rectangle(new Vector2(30, 90), new Vector2(240, 20), "#27ADF5"),
        new Circle(new Vector2(0, 0), 80, "#27F538")
    ]

    return <div>
        <div>
            Use this whiteboard to arrange visually the story and make YOUR storytelling better and more coherent!
        </div>

        <div>
            DIFFERENCE (mouse scroll / touch difference) :
        </div>
        <div>
            X:{difference.x}
        </div>
        <div>
            Y:{difference.y}
        </div>

        <div>
            SCALE:{scale}
        </div>

        <div>
            <button onClick={() => setScale(e => e - 0.1)}>LESS</button>
            <br />
            <button onClick={() => setScale(e => e + 0.1)}>MORE</button>
        </div>

        <div className="aspect-[16/9] bg-blue-200 h-[70vh] relative"
        onMouseDown={
            (e: any) => {
                setStartPos(new Vector2(e.clientX, e.clientY));
                setLastPos(null);
            }
        }
        onMouseUp={
            (e: any) => {
                if (lastPos && startPos) {
                    setDifference(new Vector2(
                        difference.x + (lastPos.x - startPos.x) * 1/scale,
                        difference.y + (lastPos.y - startPos.y) * 1/scale
                    ));
                }
                setStartPos(null);
                setLastPos(null);
            }
        }
        onMouseMove={
            (e: any) => {
                const currentPos = new Vector2(e.clientX, e.clientY);

                if (startPos) {
                    setDifference(new Vector2(
                        difference.x + (currentPos.x - startPos.x) * 1/scale,
                        difference.y + (currentPos.y - startPos.y) * 1/scale
                    ));
                }
                setStartPos(currentPos);
                setLastPos(currentPos);
            }
        }>
            {/* LINES and CASES / Grille */}
            {/* DEFAULT theme : BG black / LINES white */}
            <div></div>

            {/* CONTENT */}
            {
                whiteboard.map((e: Rectangle|Circle) => (
                    e instanceof Rectangle ?
                    <div style={{
                        position: 'absolute',
                        left: `${(e.position.x + difference.x) * scale}px`, // add 'difference' = offset from center (0;0)
                        top: `${(e.position.y + difference.y) * scale}px`,
                        width: `${(e.size.x) * scale}px`,
                        height: `${(e.size.y) * scale}px`,
                        backgroundColor: `${e.color}`,
                    }}></div>
                    :
                    // BELOW is the code to make the circle be configured to position itself at its CENTER
                    <div style={{
                        position: 'absolute',
                        left: `${(e.position.x + difference.x - e.radius/2) * scale}px`, // add 'difference' = offset from center (0;0)
                        top: `${(e.position.y + difference.y - e.radius/2) * scale}px`,
                        width: `${(e.radius) * scale}px`,
                        height: `${(e.radius) * scale}px`,
                        borderRadius: '100%',
                        backgroundColor: `${e.color}`,
                    }}></div>
                    
                    // BELOW is the code to make the circle be configured to position itself at the TOP-LEFT
                    // <div style={{
                    //     position: 'absolute',
                    //     left: `${e.position.x + difference.x}px`, // add 'difference' = offset from center (0;0)
                    //     top: `${e.position.y + difference.y}px`,
                    //     width: `${(e.radius) * scale}px`,
                    //     height: `${(e.radius) * scale}px`,
                    //     borderRadius: '100%',
                    //     backgroundColor: `${e.color}`,
                    // }}></div>
                ))
            }
        </div>
    </div>
}