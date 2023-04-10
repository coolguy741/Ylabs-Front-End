import { useEffect, useRef } from 'react';
import * as THREE from 'three';
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
    camera.position.set(-0.08, 0.25, 0.95);

    scene = new THREE.Scene();

    const loader = new GLTFLoader();
    loader.load(
      './object/Ylabs_3D_Object_Logo.glb',
      ( gltf ) => {
        const mesh = gltf.scene.children[1];
        
        mesh.traverse(function(child) {
          if (child instanceof THREE.Mesh) {
            const originalMaterial = child.material;
            const newMaterial = originalMaterial.clone();
            newMaterial.transparent = true;
            newMaterial.opacity = 0.8;
      
            child.material = newMaterial;
          }
        });

        mesh.traverse(function(child) {
          if (child instanceof THREE.Mesh) {
            const originalMaterial = child.material;
            const newMaterial = new THREE.MeshPhysicalMaterial({
              color: originalMaterial.color,
              map: originalMaterial.map,
              transparent: true,
              opacity: 0.85,
              roughness: 0.7,
              metalness: 0,
              envMap: originalMaterial.envMap, // preserve the environment map
              side: originalMaterial.side // preserve the side of the material (front, back, or double-sided)
            });
      
            child.material = newMaterial;
          }
        });

        scene.add( mesh );
        mesh.rotation.y = -0;
        mesh.rotation.x = 0.1;
        const animate = () => {
          requestAnimationFrame( animate );
          renderer.render( scene, camera );
        };

        const handleMouseMove = (event:MouseEvent) => {
          const x = (event.clientX / window.innerWidth) * 2 - 1;
          const y = - (event.clientY / window.innerHeight) * 2 + 1;
          mesh.rotation.y = x * 0.1;
          mesh.rotation.x = 0.1 + y * 0.1;
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

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75)
    const pointLight = new THREE.PointLight(0xffffff, 0.9)
    pointLight.position.set(3.5, 3, 4)
    scene.add(ambientLight, pointLight)

    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}

export default ThreeDLogo;
