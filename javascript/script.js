container = document.getElementById('hero');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
camera.position.setZ(30);

//objet 1
const geometry = new THREE.TorusKnotGeometry(10, 2, 500, 1000, 2, 1);
const material = new THREE.MeshStandardMaterial( {color: 0xFFC857});
const torus = new THREE.Mesh(geometry, material);
torus.position.setX(85);
torus.position.setZ(-55);

//objet 2
const geometrytwo = new THREE.TorusKnotGeometry(10, 2, 500, 1000, 2, 3);
const materialtwo = new THREE.MeshStandardMaterial( {color: 0xFFC857});
const torustwo = new THREE.Mesh(geometrytwo, materialtwo);
torustwo.position.setY(0);

//objet3
const geometrythree = new THREE.TorusKnotGeometry(10, 2, 500, 1000, 3, 8);
const materialthree = new THREE.MeshStandardMaterial( {color: 0xFFC857});
const torusthree = new THREE.Mesh(geometrytwo, materialtwo);
torusthree.position.setX(-105);
torusthree.position.setY(-25);
torusthree.position.setZ(-65);

const pointLight = new THREE.PointLight(0xFFFFFF, 2)
pointLight.position.set(5, 5, 5)
const pointLighttwo = new THREE.PointLight(0xFFFFFF, 10)
pointLighttwo.position.set(85, 0, -55)
scene.add(pointLight, pointLighttwo)



scene.add(torus, torustwo, torusthree);

document.addEventListener('mousemove', (event) => {
  const {
    clientX,
    clientY
  } = event
  // console.log(clientX, clientY);
})


function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x = 0.0001;
  torus.rotation.y += 0.0001;
  torus.rotation.z += 0.01;
  torustwo.rotation.x = -0.01;
  torustwo.rotation.y += -0.001;
  torustwo.rotation.z += -0.0001;
  torusthree.rotation.x = -0.001;
  torusthree.rotation.y += 0.001;
  torusthree.rotation.z += -0.01;
  renderer.render (scene, camera);
}

animate()