import React, {useRef} from "react";
import {OrbitControls, Cylinder, Box, PositionalAudio} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";

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
            args={[5, 5, 30, 12, 12, false, Math.PI * 0.25, Math.PI * 2.00]}
        >
            <meshPhongMaterial color={"rgb(203,203,203)"}/>
        </Cylinder>
    );
}

function MyElement3D() {
    const cylinderProps = Array(10).fill().map((_, i) => [0.45 + i, 0, 1.5]);

    return (
        <div id={"canvas-container"}>
            <Canvas style={{display: 'block', width: '998px', height: '100vh', touchAction: 'none'}}>
                <OrbitControls/>

                <axesHelper scale={100}/>
                <ambientLight intensity={0.1}/>
                <directionalLight position={[2, 1, 1]} intensity={0.5}/>
                <pointLight position={[0, 0, 0]}/>
                {cylinderProps.map((position, i) => (
                    <CylinderComponent key={i} position={position} />
                ))}
            </Canvas>
        </div>
    )
}

export default MyElement3D;
