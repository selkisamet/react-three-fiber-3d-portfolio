import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF("/models/react.glb");
    const reactRef = useRef();

    useGSAP(() => {
        gsap.to(reactRef.current.position, {
            y: reactRef.current.position.y + 5,
            duration: 1.5,
            repeat: -1,
            yoyo: true
        });
    });

    return (
        <Float floatIntensity={10}>
            <group {...props} scale={0.3}>
                <mesh
                    geometry={nodes["React-Logo_Material002_0"].geometry}
                    material={materials["Material.002"]}
                    position={[0, 0.079, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.40, 0.40, 0.5]}
                    ref={reactRef}
                />
            </group>
        </Float>
    )
}

useGLTF.preload("/models/react.glb");

export default ReactLogo;