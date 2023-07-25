import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export let Trigger42: THREE.Box3 = new THREE.Box3();
export let TriggerCyber: THREE.Box3 = new THREE.Box3();
export let TriggerInfo: THREE.Box3 = new THREE.Box3();
export let TriggerPong: THREE.Box3 = new THREE.Box3();
export let TriggerTickets: THREE.Box3 = new THREE.Box3();


export function loadTriggers(scene: THREE.Scene) {
    const loader = new GLTFLoader();

    const triggers = [
        { path: 'triggers/trigger42.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'triggers/triggerCyber.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'triggers/triggerInfo.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'triggers/triggerPong.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
        { path: 'triggers/triggerTickets.gltf', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0, 'XYZ') },
    ];

    triggers.forEach(trigger => {
        loader.load(trigger.path, function (gltf) {
            const triggerObject = gltf.scene;
            triggerObject.position.copy(trigger.position);
            let trig = triggerObject;
            trig.visible = false;
            if (trigger.path.includes('42')) {
                Trigger42.setFromObject(trig);
                const helper = new THREE.Box3Helper(Trigger42);
                scene.add(helper);
            }
            else if (trigger.path.includes('Cyber')) {
                TriggerCyber.setFromObject(trig);
                const helper = new THREE.Box3Helper(TriggerCyber);
                scene.add(helper);
            }
            else if (trigger.path.includes('Info')) {
                TriggerInfo.setFromObject(trig);
                const helper = new THREE.Box3Helper(TriggerInfo);
                scene.add(helper);
            }
            else if (trigger.path.includes('Pong')) {
                TriggerPong.setFromObject(trig);
                const helper = new THREE.Box3Helper(TriggerPong);
                scene.add(helper);
            }
            else if (trigger.path.includes('Tickets')) {
                TriggerTickets.setFromObject(trig);
                const helper = new THREE.Box3Helper(TriggerTickets);
                scene.add(helper);
            }
        })
    })

}