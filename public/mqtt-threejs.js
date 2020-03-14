let three_view = document.getElementById('three_view');

let renderer = new THREE.WebGLRenderer();
let scene = new THREE.Scene();

let width = window.innerWidth;
let height = window.innerHeight;
let view_angle = 45;
let near = 0.1;
let far = 1000;

let camera = new THREE.PerspectiveCamera(view_angle, width / height, near, far);
camera.position.x = 5;
camera.position.y = 5;
camera.position.z = 5;

renderer.setSize(width, height);
three_view.appendChild(renderer.domElement);

// TEST CUBE
let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshLambertMaterial({
    color: 0xff0000
});
let mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();

const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};

window.onresize = resize;


//Camera setup