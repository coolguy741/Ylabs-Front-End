import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export interface ThreeDLogoProps {
	bgColor: boolean;
}

const ThreeDLogo = ({bgColor}:ThreeDLogoProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let container: HTMLDivElement;
    let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;

    container = mountRef.current!;
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.001, 2);
    camera.position.set(0, 0, 0.3);

    scene = new THREE.Scene();

    const loader = new OBJLoader();
    loader.load(
      './logo3D.obj',
      (object) => {
        const material = new THREE.MeshBasicMaterial({ color: 0x00bfff});
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        object.position.set(-0.015, -0.09, 0);
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error("Error occured");
      }
    );

    renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);
    
    console.log("first children", scene.children);

    const animate = () => {
      requestAnimationFrame(animate);
      // scene.children[0].rotation.x += 0.1;
      // scene.children[0].rotation.y += 0.1;
      
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}

export default ThreeDLogo;
