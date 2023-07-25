import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export let fence: THREE.Mesh = new THREE.Mesh();

export function loadGroundObject(scene: THREE.Scene, openModal: () => void, closeModal: () => void): Promise<void | undefined> {
    return new Promise<void | undefined>((resolve) => {
        const loader = new GLTFLoader();

        const totalObjects = 16;
        let loadedObjects = 0;

        const models = [
            { path: 'obj3d/ground_new.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/buildingLight.gltf', position: new THREE.Vector3(0, 0, 0) },

            { path: 'obj3d/afficheFuture.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/affichePong.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/afficheRetro.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/arche.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/tickets.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/fenceEntrance.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/fenceNoEntry.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/lampadaires.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/logo42.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/logoCyber.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/logoLaser.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/logoPong.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/logoResto.gltf', position: new THREE.Vector3(0, 0, 0) },
            { path: 'obj3d/triggersVisual.gltf', position: new THREE.Vector3(0, 0, 0) },

        ];
        models.forEach(model => {
            loader.load(model.path, function (gltf) {
                if (loadedObjects === 0) {
                    openModal();
                    console.log('debut');
                }
                const object = gltf.scene;

                if (object !== undefined) {
                    // Si l'objet est un groupe, vérifiez s'il contient un seul maillage
                    if (object instanceof THREE.Group && object.children.length === 1) {
                        const mesh = object.children[0] as THREE.Mesh;
                        mesh.position.copy(model.position);

                        if (model.path.includes('ground')) {
                            mesh.receiveShadow = true;
                            mesh.position.x = -1.814677357673645
                            mesh.position.y = 0
                            mesh.position.z = -6.4338555335998535
                            console.log("ground ok");
                            scene.add(mesh);
                        } else if (model.path.includes('logoPong')) {
                            mesh.receiveShadow = true;
                            mesh.position.x = -9.323200225830078
                            mesh.position.y = 0
                            mesh.position.z = 0.9919614195823669
                            scene.add(mesh);
                        } else if (model.path.includes('Entrance')) {
                            fence = mesh;
                            fence.castShadow = true;
                            fence.receiveShadow = false;
                            scene.add(fence)
                        }
                        else {
                            mesh.castShadow = true;
                            mesh.receiveShadow = false;
                            console.log(mesh.name);
                            scene.add(mesh);
                            console.log("Ouiiiiii");
                        }
                    }
                }
                loadedObjects++;
                if (loadedObjects === totalObjects) {
                    resolve();
                    closeModal();
                    console.log('fin');
                }
            });
        });
    });
}

