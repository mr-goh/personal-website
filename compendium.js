import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from '../three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / (window.innerHeight), 0.1, 1000 );

const container = document.getElementById('model-container');
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);

container.appendChild(renderer.domElement);


const loader = new GLTFLoader();
let model;

loader.load( 'donut.glb', function ( gltf ) {
    
    model = gltf.scene;
    model.scale.set(12, 12, 12);
    model.rotateX(Math.PI / 5);
	scene.add( model );
    model.position.y -= 1;

}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z = 1;


const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
// controls.maxPolarAngle = Math.PI / 2;

controls.minDistance = 3;
controls.maxDistance = 12;

function animate() {
	requestAnimationFrame( animate );
    if (model) {
        model.rotation.y += 0.005;
    }
    controls.update();
    directionalLight.position.copy(camera.position);
	renderer.render( scene, camera );
}

function onWindowResize() {
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

window.addEventListener('resize', onWindowResize, false);

onWindowResize();


animate();