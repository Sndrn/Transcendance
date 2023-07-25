import * as THREE from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import * as COLLIDER from './addColliders'
import * as TRIGGER from './addTriggers'
import { Box3, Object3D } from 'three';
import eventBus  from './eventBus';

export class CameraControls {

  private camera: THREE.Camera;
  private domElement: HTMLElement;
  public controls: FirstPersonControls;
  private prevPosition: THREE.Vector3;
  private cube!: Object3D;
  private boundingBox: Box3;

  constructor(camera: THREE.Camera, domElement: HTMLElement, cube: Object3D) {
    this.camera = camera;
    this.domElement = domElement;
    this.prevPosition = new THREE.Vector3();

    this.controls = new FirstPersonControls(this.camera, this.domElement);
    this.controls.lookSpeed = 0.4;
    this.controls.movementSpeed = 20;

    this.cube = cube;
    this.boundingBox = new Box3().setFromObject(this.cube);
  }

  public update(deltaTime: number) {

    this.controls.update(deltaTime);
    this.camera.position.y = 1.7;
    this.cube.position.copy(this.camera.position);

    this.boundingBox.setFromObject(this.cube);
    if (
      this.boundingBox.intersectsBox(COLLIDER.Box1)
      || this.boundingBox.intersectsBox(COLLIDER.Box2)
      || this.boundingBox.intersectsBox(COLLIDER.Box3)
      || this.boundingBox.intersectsBox(COLLIDER.Box4)
      || this.boundingBox.intersectsBox(COLLIDER.Box5)
      || this.boundingBox.intersectsBox(COLLIDER.Box6)
      || this.boundingBox.intersectsBox(COLLIDER.Box7)
      || this.boundingBox.intersectsBox(COLLIDER.Box8)
      || this.boundingBox.intersectsBox(COLLIDER.Box9)
      || this.boundingBox.intersectsBox(COLLIDER.Box10)
      || this.boundingBox.intersectsBox(COLLIDER.Box11)
      || this.boundingBox.intersectsBox(COLLIDER.Box12)
      || this.boundingBox.intersectsBox(COLLIDER.Box13)
      || this.boundingBox.intersectsBox(COLLIDER.Box14)
      || this.boundingBox.intersectsBox(COLLIDER.Box15)
      || this.boundingBox.intersectsBox(COLLIDER.Box16)
      || this.boundingBox.intersectsBox(COLLIDER.Box17)
      || this.boundingBox.intersectsBox(COLLIDER.Box18)
      || this.boundingBox.intersectsBox(COLLIDER.Box19)
      || this.boundingBox.intersectsBox(COLLIDER.Box20)
      || this.boundingBox.intersectsBox(COLLIDER.Box21)
      || this.boundingBox.intersectsBox(COLLIDER.Box22)
      || this.boundingBox.intersectsBox(COLLIDER.Box23)
      || this.boundingBox.intersectsBox(COLLIDER.Box24)
      || this.boundingBox.intersectsBox(COLLIDER.Box25)
      || this.boundingBox.intersectsBox(COLLIDER.Box26)
      || this.boundingBox.intersectsBox(COLLIDER.Box27)
      || this.boundingBox.intersectsBox(COLLIDER.Box28)
      || this.boundingBox.intersectsBox(COLLIDER.Box29)
      || this.boundingBox.intersectsBox(COLLIDER.Box30)
      || this.boundingBox.intersectsBox(COLLIDER.Box31)
      || this.boundingBox.intersectsBox(COLLIDER.Box32)
      || this.boundingBox.intersectsBox(COLLIDER.Box33)
      || this.boundingBox.intersectsBox(COLLIDER.Box34)
      || this.boundingBox.intersectsBox(COLLIDER.Box35)) {
      console.log("hit YEAH!");
      this.camera.position.set(this.prevPosition.x, this.prevPosition.y, this.prevPosition.z);
    } 
    else if (this.boundingBox.intersectsBox(TRIGGER.TriggerTickets)) {
        console.log("hit Trigger");
        eventBus.emit('openModal', 'login');
        this.controls.lookSpeed = 0;
      } 
      else {
        this.prevPosition.copy(this.camera.position);
        eventBus.emit('closeModal', 'login');
        this.controls.lookSpeed = 0.4;
      }
    }
  }



