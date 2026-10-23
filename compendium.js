import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const container = document.getElementById('model-container');

async function showModel() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.domElement.setAttribute('role', 'img');
    renderer.domElement.setAttribute('aria-label', 'A rotating 3D donut with pink icing and sprinkles');
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 3;
    controls.maxDistance = 12;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let model = null;
    let lastTime;

    function animate(time) {
        const delta = lastTime === undefined ? 0 : Math.min((time - lastTime) / 1000, 0.1);
        lastTime = time;
        if (document.hidden) return;
        if (model && !reducedMotion.matches) model.rotation.y += delta * 0.3;
        controls.update();
        directionalLight.position.copy(camera.position);
        renderer.render(scene, camera);
    }

    function resize() {
        const { clientWidth: width, clientHeight: height } = container;
        if (width === 0 || height === 0) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    renderer.setAnimationLoop(animate);

    function dispose() {
        renderer.setAnimationLoop(null);
        observer.disconnect();
        controls.dispose();
        scene.traverse((object) => {
            object.geometry?.dispose();
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            for (const material of materials) {
                if (!material) continue;
                for (const value of Object.values(material)) {
                    if (value?.isTexture) value.dispose();
                }
                material.dispose();
            }
        });
        renderer.dispose();
        window.removeEventListener('pagehide', onPageHide);
        window.removeEventListener('pageshow', onPageShow);
    }

    function onPageHide(event) {
        renderer.setAnimationLoop(null);
        // A page in the back/forward cache will reuse its existing renderer.
        if (!event.persisted) dispose();
    }

    function onPageShow(event) {
        if (!event.persisted) return;
        lastTime = undefined;
        renderer.setAnimationLoop(animate);
    }

    window.addEventListener('pagehide', onPageHide);
    window.addEventListener('pageshow', onPageShow);

    try {
        const gltf = await new GLTFLoader().loadAsync(`${import.meta.env.BASE_URL}donut.glb`);
        model = gltf.scene;
        model.scale.set(12, 12, 12);
        model.rotateX(Math.PI / 5);
        model.position.y -= 1;
        scene.add(model);
    } catch (error) {
        dispose();
        throw error;
    }
}

if (container) {
    showModel().catch((error) => {
        console.error('Unable to display the donut model:', error);
        container.replaceChildren();
        const message = document.createElement('p');
        message.setAttribute('role', 'status');
        message.textContent = 'The 3D model could not be displayed. Please try reloading the page.';
        container.appendChild(message);
    });
}
