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

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    const pointLight = new THREE.PointLight(0xffffff, 0.5)
    pointLight.position.set(2, 3, 4)
    scene.add(ambientLight, pointLight)

    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}

export default ThreeDLogo;
