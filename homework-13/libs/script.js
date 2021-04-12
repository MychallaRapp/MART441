var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var cube1, cube2;

function createBox()
{
  var geomentry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({color: 0x324ca8});
  cube1 = new THREE.Mesh(geometry, material);
  cube1.position.set(25, 0, 0);
  scene.add(cube1);
  cube1.scale.x = 10;
  cube1.scale.y = 10;
  cube1.scale.z = 10;
  animate ();
}

function animate()
{
  requestAnimationFrame(animate);
  cube1.rotation.x += 0.1;
  cube1.rotation.y += 0.1;
  createBox2();
  renderer.render(scene,camera);
}

function createBox2()
{
  var geomentry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({color: 'red'});
  cube1 = new THREE.Mesh(geometry, material);
  cube2.position.set(5, 0);
  scene.add(cube1);
  cube2.scale.x = 10;
  cube2.scale.y = 10;
  cube2.scale.z = 10;
  animate2 ();
}

function animate2()
{
  requestAnimationFrame(animate2);
  cube2.rotation.x += 0.1;
  cube2.rotation.y += 0.1;
}

function getScene()
{
  var scene = new THREE.Scene();
  scene.background = new THREE.Color('lavender');
  return scene;
}

function getCamera()
{
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 90, -10);
  return camera;
}

function getLight(scene)
{
  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(20,50,20);
  scene.add(light);
  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  return light;
}

function getRenderer()
{
  var renderer = new THREE.WEBGLRenderer({antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.getSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  return renderer;
}

function getControls(camera, renderer)
{
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.2;
  controls.panSpeed = 0.3;
  return controls;
}

function loadModels()
{
  var loader = new THREE.OBJLoader();
  loader.load('libs/emerald.obj', function (object)
  {
    object.rotation.z = Math.PI;
    scene.add(object);
  });
}

function render()
{
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
}

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
var game1 = createBox();

loadModel()

render();
