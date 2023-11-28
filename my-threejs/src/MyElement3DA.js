// import React, {useRef} from "react";
// import {Box, OrbitControls} from "@react-three/drei";
// // import {useFrame} from "@react-three/fiber";
// // import * as THREE from "three"
//
//
// function MyElement3DA() {
//     // const refMesh = useRef();
//     // const radiusTop = 4.1;
//     // const radiusBottom = 4;
//     // const height = 20;
//     // const radialSegments = 50;
//
//     // Drei : R3F 에서 사용할 수 있는 유용한 컴포넌트들을 모아 놓은 라이브러리
//     // npm i @react-three/drei
//
//     return (
//         <>
//             <OrbitControls/>
//
//             <ambientLight intensity={0.1} />
//             <directionalLight position={[1, 1, 1]} intensity={0.5} />
//             {/*<axesHelper scale={10} />*/}
//
//             <mesh>
//                 <boxGeometry/>
//                 <meshStandardMaterial color="#1abc9c"/>
//             </mesh>
//
//             <Box>
//
//
//             </Box>
//
//             {/*<mesh ref={refMesh}>*/}
//             {/*    <cylinderGeometry args={[radiusTop, radiusBottom, height, radialSegments]} />*/}
//             {/*    <meshStandardMaterial color="#808080" />*/}
//             {/*</mesh>*/}
//         </>
//     )
// }
//
// export default MyElement3DA;