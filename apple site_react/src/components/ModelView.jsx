import { Html, OrbitControls, View } from "@react-three/drei";
import Lights from "./Lights";
import Loader from "./Loader";
import Iphone from "./Iphone";
import { Suspense } from "react";
import * as THREE from 'three';

const ModelView = ({ index, groupref, gsaptype, controlRef, setRotationstate, size, item }) => {
    return (
        <View
            index={index}
            id={gsaptype}
            className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
        >
            {/* Ambient Light */}
            <ambientLight intensity={0.3} />
            <perspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />

            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationstate(controlRef.current.getAzimuthalAngle())}
            />

            <group ref={groupref} name={`${index === 1} ? 'small' : 'large'`} position={[0, 0, 0]}>
                <Suspense fallback={<Loader />}>
                    <Iphone
                        scale={index === 1 ? [25, 25, 25] : [28, 28, 28]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    );
};

export default ModelView;
