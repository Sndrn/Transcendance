import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export let Box1: THREE.Box3 = new THREE.Box3();
export let Box2: THREE.Box3 = new THREE.Box3();
export let Box3: THREE.Box3 = new THREE.Box3();
export let Box4: THREE.Box3 = new THREE.Box3();
export let Box5: THREE.Box3 = new THREE.Box3();
export let Box6: THREE.Box3 = new THREE.Box3();
export let Box7: THREE.Box3 = new THREE.Box3();
export let Box8: THREE.Box3 = new THREE.Box3();
export let Box9: THREE.Box3 = new THREE.Box3();
export let Box10: THREE.Box3 = new THREE.Box3();
export let Box11: THREE.Box3 = new THREE.Box3();
export let Box12: THREE.Box3 = new THREE.Box3();
export let Box13: THREE.Box3 = new THREE.Box3();
export let Box14: THREE.Box3 = new THREE.Box3();
export let Box15: THREE.Box3 = new THREE.Box3();
export let Box16: THREE.Box3 = new THREE.Box3();
export let Box17: THREE.Box3 = new THREE.Box3();
export let Box18: THREE.Box3 = new THREE.Box3();
export let Box19: THREE.Box3 = new THREE.Box3();
export let Box20: THREE.Box3 = new THREE.Box3();
export let Box21: THREE.Box3 = new THREE.Box3();
export let Box22: THREE.Box3 = new THREE.Box3();
export let Box23: THREE.Box3 = new THREE.Box3();
export let Box24: THREE.Box3 = new THREE.Box3();
export let Box25: THREE.Box3 = new THREE.Box3();
export let Box26: THREE.Box3 = new THREE.Box3();
export let Box27: THREE.Box3 = new THREE.Box3();
export let Box28: THREE.Box3 = new THREE.Box3();
export let Box29: THREE.Box3 = new THREE.Box3();
export let Box30: THREE.Box3 = new THREE.Box3();
export let Box31: THREE.Box3 = new THREE.Box3();
export let Box32: THREE.Box3 = new THREE.Box3();
export let Box33: THREE.Box3 = new THREE.Box3();
export let Box34: THREE.Box3 = new THREE.Box3();
export let Box35: THREE.Box3 = new THREE.Box3();

export function loadColliders(scene: THREE.Scene) {
    const loader = new GLTFLoader();

    const colliders = [
        { path: 'colliders/collider1u.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider2u.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider3u.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider4u.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider5u.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider6u.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider7u.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider8u.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider9u.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider10.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider11.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider12.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider13.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider14.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider15.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider16.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider17.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider18.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider19.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider20.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider21.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider22.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider23.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider24.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider25.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider26.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider27.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider28.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider29.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider30.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider31.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider32.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider33.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider34.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'colliders/collider35.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
    ];
    colliders.forEach(collider => {
        loader.load(collider.path, function (gltf) {
            const colliderObject = gltf.scene;
            colliderObject.position.copy(collider.position);
            let col = colliderObject;
            col.visible = false;
            // let box: THREE.Box3 = new THREE.Box3;
            if (collider.path.includes('collider1u')) {
                Box1.setFromObject(col);
                const helper = new THREE.Box3Helper(Box1);
                scene.add(helper);
            }
            else if (collider.path.includes('collider2u')) {
                Box2.setFromObject(col);
                const helper = new THREE.Box3Helper(Box2);
                scene.add(helper);
            }
            else if (collider.path.includes('collider3u')) {
                Box3.setFromObject(col);
                const helper = new THREE.Box3Helper(Box3);
                scene.add(helper);
            }
            else if (collider.path.includes('collider4u')) {
                Box4.setFromObject(col);
                const helper = new THREE.Box3Helper(Box4);
                scene.add(helper);
            }
            else if (collider.path.includes('collider5u')) {
                Box5.setFromObject(col);
                const helper = new THREE.Box3Helper(Box5);
                scene.add(helper);
            }
            else if (collider.path.includes('collider6u')) {
                Box6.setFromObject(col);
                const helper = new THREE.Box3Helper(Box6);
                scene.add(helper);
            }
            else if (collider.path.includes('collider7u')) {
                Box7.setFromObject(col);
                const helper = new THREE.Box3Helper(Box7);
                scene.add(helper);
            }
            else if (collider.path.includes('collider8u')) {
                Box8.setFromObject(col);
                const helper = new THREE.Box3Helper(Box8);
                scene.add(helper);
            }
            else if (collider.path.includes('collider9u')) {
                Box9.setFromObject(col);
                const helper = new THREE.Box3Helper(Box9);
                scene.add(helper);
            }
            else if (collider.path.includes('collider10')) {
                Box10.setFromObject(col);
                const helper = new THREE.Box3Helper(Box10);
                scene.add(helper);
            }
            else if (collider.path.includes('collider11')) {
                Box11.setFromObject(col);
                const helper = new THREE.Box3Helper(Box11);
                scene.add(helper);
            }
            else if (collider.path.includes('collider12')) {
                Box12.setFromObject(col);
                const helper = new THREE.Box3Helper(Box12);
                scene.add(helper);
            }
            else if (collider.path.includes('collider13')) {
                Box13.setFromObject(col);
                const helper = new THREE.Box3Helper(Box13);
                scene.add(helper);
            }
            else if (collider.path.includes('collider14')) {
                Box14.setFromObject(col);
                const helper = new THREE.Box3Helper(Box14);
                scene.add(helper);
            }
            else if (collider.path.includes('collider15')) {
                Box15.setFromObject(col);
                const helper = new THREE.Box3Helper(Box15);
                scene.add(helper);
            }
            else if (collider.path.includes('collider16')) {
                Box16.setFromObject(col);
                const helper = new THREE.Box3Helper(Box16);
                scene.add(helper);
            }
            else if (collider.path.includes('collider17')) {
                Box17.setFromObject(col);
                const helper = new THREE.Box3Helper(Box17);
                scene.add(helper);
            } else if (collider.path.includes('collider18')) {
                Box18.setFromObject(col);
                const helper = new THREE.Box3Helper(Box18);
                scene.add(helper);
            } else if (collider.path.includes('collider19')) {
                Box19.setFromObject(col);
                const helper = new THREE.Box3Helper(Box19);
                scene.add(helper);
            } else if (collider.path.includes('collider20')) {
                Box20.setFromObject(col);
                const helper = new THREE.Box3Helper(Box20);
                scene.add(helper);
            } else if (collider.path.includes('collider21')) {
                Box21.setFromObject(col);
                const helper = new THREE.Box3Helper(Box21);
                scene.add(helper);
            } else if (collider.path.includes('collider22')) {
                Box22.setFromObject(col);
                const helper = new THREE.Box3Helper(Box22);
                scene.add(helper);
            } else if (collider.path.includes('collider23')) {
                Box23.setFromObject(col);
                const helper = new THREE.Box3Helper(Box23);
                scene.add(helper);
            } else if (collider.path.includes('collider24')) {
                Box24.setFromObject(col);
                const helper = new THREE.Box3Helper(Box24);
                scene.add(helper);
            } else if (collider.path.includes('collider25')) {
                Box25.setFromObject(col);
                const helper = new THREE.Box3Helper(Box25);
                scene.add(helper);
            } else if (collider.path.includes('collider26')) {
                Box26.setFromObject(col);
                const helper = new THREE.Box3Helper(Box26);
                scene.add(helper);
            } else if (collider.path.includes('collider27')) {
                Box27.setFromObject(col);
                const helper = new THREE.Box3Helper(Box27);
                scene.add(helper);
            } else if (collider.path.includes('collider28')) {
                Box28.setFromObject(col);
                const helper = new THREE.Box3Helper(Box28);
                scene.add(helper);
            } else if (collider.path.includes('collider29')) {
                Box29.setFromObject(col);
                const helper = new THREE.Box3Helper(Box29);
                scene.add(helper);
            } else if (collider.path.includes('collider30')) {
                Box30.setFromObject(col);
                const helper = new THREE.Box3Helper(Box30);
                scene.add(helper);
            } else if (collider.path.includes('collider31')) {
                Box31.setFromObject(col);
                const helper = new THREE.Box3Helper(Box31);
                scene.add(helper);
            } else if (collider.path.includes('collider32')) {
                Box32.setFromObject(col);
                const helper = new THREE.Box3Helper(Box32);
                scene.add(helper);
            } else if (collider.path.includes('collider33')) {
                Box33.setFromObject(col);
                const helper = new THREE.Box3Helper(Box33);
                scene.add(helper);
            } else if (collider.path.includes('collider34')) {
                Box34.setFromObject(col);
                const helper = new THREE.Box3Helper(Box34);
                scene.add(helper);
            } else if (collider.path.includes('collider35')) {
                Box35.setFromObject(col);
                const helper = new THREE.Box3Helper(Box35);
                scene.add(helper);
            }
            // scene.add(col);
        })
    })
}