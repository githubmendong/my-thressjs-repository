import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

function MyElement3D(){

    const refMesh = useRef()
    useFrame((state, delta) =>{
        refMesh.current.rotation.y += delta
    })
    return(
        <>
            <directionalLight position={[1,1,1]}/>
            <mesh ref={refMesh} rotation-x={45*Math.PI/180} rotation-y={45*Math.PI/180}>
                {/*x 축으로 0도*/}
                {/*y 축으로 45도*/}
                {/*r3f는 각도를 라디안이라는 단위로 지정해야한다.*/}

                <boxGeometry/>
                <meshStandardMaterial color="#e67e22"/>
            </mesh>
        </>
    )

}

export default MyElement3D;