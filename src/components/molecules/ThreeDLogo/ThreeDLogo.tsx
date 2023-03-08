import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export interface ThreeDLogoProps {
	bgColor: boolean;
}

const ThreeDLogo = ({bgColor}:ThreeDLogoProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   let container: HTMLDivElement;
  //   let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;

  //   container = mountRef.current!;
  //   camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.001, 2);
  //   camera.position.set(0, 0, 0.3);

  //   scene = new THREE.Scene();

  //   const loader = new OBJLoader();
  //   loader.load(
  //     './object/YLabs.obj',
  //     (object) => {
  //       // const texture = new THREE.TextureLoader().load('./texture/logo_texture.png');
  //       object.traverse((child) => {
  //         if (child instanceof THREE.Mesh) {
  //           // child.material.map = texture;
  //           // child.material.emissive = new THREE.Color(0xffffff);
  //           // child.material.emissiveIntensity = 0.3;
  //           // child.material.emissive.map = texture;
  //         }
  //       });
  //       //set the pivote point
  //       const pivot = new THREE.Object3D();
  //       pivot.position.set(0, 0, 0);
  //       scene.add(pivot);

  //       // Move the object to the pivot point
  //       object.position.set(0, 0, 0);
  //       pivot.add(object);

  //       const animate = () => {
  //         requestAnimationFrame(animate);
  //         object.rotation.y += 0.02;
  //         renderer.render(scene, camera);
  //       };
    
  //       animate();
  //     },
  //     (xhr) => {
  //       console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  //     },
  //     (error) => {
  //       console.error("Error occured");
  //     }
  //   );

  //   const light1 = new THREE.DirectionalLight(0xffffff, 1);
  //   light1.position.set(0, 0.3, 0);
  //   light1.target.position.set(0, 0, 0);
  //   scene.add(light1);

  //   const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
  //   light2.position.set(0.1, 0, 1);
  //   light2.target.position.set(0, 0, 0);
  //   scene.add(light2);

  //   const light3 = new THREE.DirectionalLight(0xffffff, 0.5);
  //   light3.position.set(-1, 0, 0);
  //   light3.target.position.set(0, 0, 0);
  //   scene.add(light3);

  //   renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true  });
  //   renderer.setSize(container.clientWidth, container.clientHeight);
  //   renderer.setPixelRatio(window.devicePixelRatio);

  //   container.appendChild(renderer.domElement);
    
  //   console.log("first children", scene.children);

  //   return () => {
  //     container.removeChild(renderer.domElement);
  //     renderer.dispose();
  //   };
  // }, []);

    useEffect(() => {
      let container: HTMLDivElement;
      let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;

      container = mountRef.current!;
      camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.001, 10000);
      camera.position.set(0, 0.3, 0.95);

      scene = new THREE.Scene();

      const loader = new GLTFLoader();
      loader.load(
        './object/Ylabs_3D_Object_Logo.glb',
        ( gltf ) => {
          scene.add( gltf.scene );
          const animate = () => {
            requestAnimationFrame( animate );
            gltf.scene.rotation.y -= 0.01;
            renderer.render( scene, camera );
          };
    
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
