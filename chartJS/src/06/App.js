import React, {useRef} from "react";
import {OrbitControls, Cylinder, Box, PositionalAudio} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";


function BoxComponent_1({ position }) {
    const meshRef = useRef();
    useFrame(({ clock }) => {
        // if (meshRef.current) {
        //     meshRef.current.rotation.y = clock.elapsedTime;
        // }
    });

    return (
        <mesh
            // rotateY={}

            ref={meshRef} position={position} scale={0.1} rotation={[Math.PI / 1, Math.PI / 2, 0]}>
            <boxGeometry args={[30, 30, 80]} />
            <meshStandardMaterial color={"rgb(255,136,136)"} />
        </mesh>
    );
}

function CylinderComponent({position}) {
    const meshRef = useRef();
    useFrame(({clock}) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = -clock.elapsedTime;
        }
    });

    return (
        <Cylinder
            ref={meshRef}
            scale={0.1}
            rotation={[Math.PI / 2, 0, 0]}
            position={position}
            args={[5, 5, 30, 8, 12, false, Math.PI * 0.25, Math.PI * 2.00]}
        >
            <meshPhongMaterial color={"rgb(203,203,203)"}/>
        </Cylinder>
    );
}

function MyElement3D() {
    const cylinderProps = Array(17).fill().map((_, i) => [0.45 + i, 0, 1.5]);

    return (
        <div id={"canvas-container"}>
            <Canvas
                camera={{
                    fov:75,
                    position:[25, 10, 15]
                }}
                style={{display: 'block', width: '998px', height: '100vh', touchAction: 'none'}}>
                <OrbitControls/>

                <axesHelper scale={100}/>
                <ambientLight intensity={0.1}/>
                <directionalLight position={[2, 1, 1]} intensity={0.5}/>
                <pointLight position={[0, 0, 0]}/>
                {cylinderProps.map((position, i) => (
                    <CylinderComponent key={i} position={position} />
                ))}

                <BoxComponent_1 position={[-4, 1.5, 1.5]}/>


            </Canvas>
        </div>
    )
}

export default MyElement3D;
