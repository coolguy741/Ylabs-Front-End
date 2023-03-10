import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export interface ThreeDLogoProps {
	bgColor: boolean;
}

const ThreeDLogo = ({bgColor}:ThreeDLogoProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  

  useEffect(() => {
    let container: HTMLDivElement;
    let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;

    container = mountRef.current!;
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.001, 10000);
    camera.position.set(-0.03, 0.27, 0.75);

    scene = new THREE.Scene();

    const loader = new GLTFLoader();
    loader.load(
      './object/Ylabs_3D_Object_Logo.glb',
      ( gltf ) => {
        scene.add( gltf.scene );
        gltf.scene.rotation.y = -0.5;
        gltf.scene.rotation.x = 0.1;
        const animate = () => {
          requestAnimationFrame( animate );
          // gltf.scene.rotation.y -= 0.01;
          renderer.render( scene, camera );
        };

        const handleMouseMove = (event:MouseEvent) => {
          const x = (event.clientX / window.innerWidth) * 2 - 1;
          const y = - (event.clientY / window.innerHeight) * 2 + 1;
          gltf.scene.rotation.y = -0.5 + x * 0.1;
          gltf.scene.rotation.x = y * 0.1;
        }

        document.addEventListener('mousemove', handleMouseMove);

        animate();
      },
      ( xhr ) => {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      ( error ) => {
        console.error( error );
      },
    );

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true  });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(0, 0, 0.4);
    light1.target.position.set(0, 0, 0);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(0.2, 0, -0.4);
    light2.target.position.set(0, 0, 0);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 1);
    light3.position.set(-1, 0, 0);
    light3.target.position.set(-0.2, 0, -0.4);
    scene.add(light3);

    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}

export default ThreeDLogo;
