import { World }  from './src/world/world.js';

async function  main(){
		//get container
		const container = document.querySelector('#scene-container');
		// create world
		const world = new World(container);
		// render world
		world.start();
		// load async models
		await world.init();
}

main().catch( err => {
		console.log(err);
})

/*

let camera, scene, renderer, stats;

const clock = new THREE.Clock();

let mixer;

init();
animate();


function init_lights(){
		var lights = []
		// hemi light?
		var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
		hemiLight.position.set( 0, 200, 0 );
		// add to lights
		lights.push(hemiLight)
		// dir lights ?
		var dirLight = new THREE.DirectionalLight( 0xffffff );
		dirLight.position.set( 0, 200, 100 );
		dirLight.castShadow = true;
		dirLight.shadow.camera.top = 180;
		dirLight.shadow.camera.bottom = - 100;
		dirLight.shadow.camera.left = - 120;
		dirLight.shadow.camera.right = 120;
		// add to lights
		lights.push(dirLight)
		// return lights
		return lights
}


function init_ground(){
		// ground
		const mesh = new THREE.Mesh( 
				new THREE.PlaneGeometry( 2000, 2000 ), 
				new THREE.MeshPhongMaterial( {
						color: 0x999999, depthWrite: false 
				} ) );
		mesh.rotation.x = - Math.PI / 2;
		mesh.receiveShadow = true;
		return mesh
}


function init_grid(){
		const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
		grid.material.opacity = 0.2;
		grid.material.transparent = true;
		return grid;
}


function init_renderer(){
		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.shadowMap.enabled = true;
		return renderer
}


function init_controls(camera, renderer){
		const controls = new OrbitControls( camera, renderer.domElement );
		controls.target.set( 0, 100, 0 );
		controls.update();
		return controls;
}


/*
function init() {


		document.body.appendChild( container );

		// create camera
		camera = init_camera();
		
		// create scene
		scene = init_Scene();

		// add lights
		const lights = init_lights();
		lights.forEach( light => scene.add(light) );
		
		// add a helper fot he light? wat?
		scene.add( new THREE.CameraHelper( lights[1].shadow.camera ) );

		// add ground obj
		const ground = init_ground();
		scene.add( ground );

		const grid = init_grid();
		scene.add( grid );

		// model
		const loader = new FBXLoader();
		loader.load( 'resources/models/Samba Dancing.fbx', function ( object ) {

				mixer = new THREE.AnimationMixer( object );

				const action = mixer.clipAction( object.animations[ 0 ] );
				action.play();

				object.traverse( function ( child ) {
						if ( child.isMesh ) {
								child.castShadow = true;
								child.receiveShadow = true;
						}
				} );

				scene.add( object );

		} );

		// make render
		renderer =  init_renderer();
		container.appendChild( renderer.domElement );

		// make controllers
		init_controls(camera, renderer);

		// add an event litener
		window.addEventListener( 'resize', onWindowResize );

		// stats
		stats = new Stats();
		container.appendChild( stats.dom );


}
*/

/*

function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

}
*/

/*
function animate() {

		requestAnimationFrame( animate );

		const delta = clock.getDelta();

		if ( mixer ) mixer.update( delta );

		renderer.render( scene, camera );

		stats.update();

}
*/


/*class BasicCharacterControls {*/
  /*constructor(params) {*/
    /*this._Init(params);*/
  /*}*/

  /*_Init(params) {*/
    /*this._params = params;*/
    /*this._move = {*/
      /*forward: false,*/
      /*backward: false,*/
      /*left: false,*/
      /*right: false,*/
    /*};*/
    /*this._decceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0);*/
    /*this._acceleration = new THREE.Vector3(1, 0.25, 50.0);*/
    /*this._velocity = new THREE.Vector3(0, 0, 0);*/

    /*document.addEventListener('keydown', (e) => this._onKeyDown(e), false);*/
    /*document.addEventListener('keyup', (e) => this._onKeyUp(e), false);*/
  /*}*/

  /*_onKeyDown(event) {*/
    /*switch (event.keyCode) {*/
      /*case 87: // w*/
        /*this._move.forward = true;*/
        /*break;*/
      /*case 65: // a*/
        /*this._move.left = true;*/
        /*break;*/
      /*case 83: // s*/
        /*this._move.backward = true;*/
        /*break;*/
      /*case 68: // d*/
        /*this._move.right = true;*/
        /*break;*/
      /*case 38: // up*/
      /*case 37: // left*/
      /*case 40: // down*/
      /*case 39: // right*/
        /*break;*/
    /*}*/
  /*}*/

  /*_onKeyUp(event) {*/
    /*switch(event.keyCode) {*/
      /*case 87: // w*/
        /*this._move.forward = false;*/
        /*break;*/
      /*case 65: // a*/
        /*this._move.left = false;*/
        /*break;*/
      /*case 83: // s*/
        /*this._move.backward = false;*/
        /*break;*/
      /*case 68: // d*/
        /*this._move.right = false;*/
        /*break;*/
      /*case 38: // up*/
      /*case 37: // left*/
      /*case 40: // down*/
      /*case 39: // right*/
        /*break;*/
    /*}*/
  /*}*/

  /*Update(timeInSeconds) {*/
    /*const velocity = this._velocity;*/
    /*const frameDecceleration = new THREE.Vector3(*/
        /*velocity.x * this._decceleration.x,*/
        /*velocity.y * this._decceleration.y,*/
        /*velocity.z * this._decceleration.z*/
    /*);*/
    /*frameDecceleration.multiplyScalar(timeInSeconds);*/
    /*frameDecceleration.z = Math.sign(frameDecceleration.z) * Math.min(*/
        /*Math.abs(frameDecceleration.z), Math.abs(velocity.z));*/

    /*velocity.add(frameDecceleration);*/

    /*const controlObject = this._params.target;*/
    /*const _Q = new THREE.Quaternion();*/
    /*const _A = new THREE.Vector3();*/
    /*const _R = controlObject.quaternion.clone();*/

    /*if (this._move.forward) {*/
      /*velocity.z += this._acceleration.z * timeInSeconds;*/
    /*}*/
    /*if (this._move.backward) {*/
      /*velocity.z -= this._acceleration.z * timeInSeconds;*/
    /*}*/
    /*if (this._move.left) {*/
      /*_A.set(0, 1, 0);*/
      /*_Q.setFromAxisAngle(_A, Math.PI * timeInSeconds * this._acceleration.y);*/
      /*_R.multiply(_Q);*/
    /*}*/
    /*if (this._move.right) {*/
      /*_A.set(0, 1, 0);*/
      /*_Q.setFromAxisAngle(_A, -Math.PI * timeInSeconds * this._acceleration.y);*/
      /*_R.multiply(_Q);*/
    /*}*/

    /*controlObject.quaternion.copy(_R);*/

    /*const oldPosition = new THREE.Vector3();*/
    /*oldPosition.copy(controlObject.position);*/

    /*const forward = new THREE.Vector3(0, 0, 1);*/
    /*forward.applyQuaternion(controlObject.quaternion);*/
    /*forward.normalize();*/

    /*const sideways = new THREE.Vector3(1, 0, 0);*/
    /*sideways.applyQuaternion(controlObject.quaternion);*/
    /*sideways.normalize();*/

    /*sideways.multiplyScalar(velocity.x * timeInSeconds);*/
    /*forward.multiplyScalar(velocity.z * timeInSeconds);*/

    /*controlObject.position.add(forward);*/
    /*controlObject.position.add(sideways);*/

    /*oldPosition.copy(controlObject.position);*/
  /*}*/
/*}*/


/*class MyWorld {*/
		/*[> this class loads the world and all the functions it needs <]*/

  /*constructor() {*/

    /*this._renderer = new THREE.WebGLRenderer({ antialias: true, });*/

    /*this._renderer.shadowMap.enabled = true;*/
    /*this._renderer.shadowMap.type = THREE.PCFSoftShadowMap;*/
    /*this._renderer.setPixelRatio(window.devicePixelRatio);*/
    /*this._renderer.setSize(window.innerWidth, window.innerHeight);*/

    /*document.body.appendChild(this._renderer.domElement);*/

    /*window.addEventListener('resize', () => {*/
      /*this._OnWindowResize();*/
    /*}, false);*/

    /*const fov = 60;*/
    /*const aspect = 1920 / 1080;*/
    /*const near = 1.0;*/
    /*const far = 1000.0;*/
    /*this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);*/
    /*this._camera.position.set(75, 20, 0);*/

    /*this._scene = new THREE.Scene();*/

    /*let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);*/
    /*light.position.set(20, 100, 10);*/
    /*light.target.position.set(0, 0, 0);*/
    /*light.castShadow = true;*/
    /*light.shadow.bias = -0.001;*/
    /*light.shadow.mapSize.width = 2048;*/
    /*light.shadow.mapSize.height = 2048;*/
    /*light.shadow.camera.near = 0.1;*/
    /*light.shadow.camera.far = 500.0;*/
    /*light.shadow.camera.near = 0.5;*/
    /*light.shadow.camera.far = 500.0;*/
    /*light.shadow.camera.left = 100;*/
    /*light.shadow.camera.right = -100;*/
    /*light.shadow.camera.top = 100;*/
    /*light.shadow.camera.bottom = -100;*/
    /*this._scene.add(light);*/

    /*light = new THREE.AmbientLight(0xFFFFFF, 4.0);*/
    /*this._scene.add(light);*/

    /*const controls = new OrbitControls(*/
      /*this._camera, this._renderer.domElement);*/
    /*controls.target.set(0, 20, 0);*/
    /*controls.update();*/

    /*const loader = new THREE.CubeTextureLoader();*/
    /*const texture = loader.load([*/
        /*'./resources/posx.jpg',*/
				/*'./resources/negx.jpg',*/
        /*'./resources/posy.jpg',*/
        /*'./resources/negy.jpg',*/
        /*'./resources/posz.jpg',*/
        /*'./resources/negz.jpg',*/
    /*]);*/
    /*this._scene.background = texture;*/

    /*const plane = new THREE.Mesh(*/
        /*new THREE.PlaneGeometry(100, 100, 10, 10),*/
        /*new THREE.MeshStandardMaterial({*/
            /*color: 0x202020,*/
          /*}));*/
    /*plane.castShadow = false;*/
    /*plane.receiveShadow = true;*/
    /*plane.rotation.x = -Math.PI / 2;*/
    /*this._scene.add(plane);*/

    /*this._mixers = [];*/
    /*this._previousRAF = null;*/

    /*//this._LoadAnimatedModel();*/
			/*//*/
    /*this._LoadAnimatedModelAndPlay(*/
         /*'./resources/dancer/', 'girl.fbx', 'dance.fbx', new THREE.Vector3(0, -1.5, 5));*/
    /*this._LoadAnimatedModelAndPlay(*/
         /*'./resources/dancer/', 'dancer.fbx', 'Silly Dancing.fbx', new THREE.Vector3(12, 0, -10));*/
    /*this._LoadAnimatedModelAndPlay(*/
         /*'./resources/dancer/', 'dancer.fbx', 'Silly Dancing.fbx', new THREE.Vector3(-12, 0, -10));*/

    /*this._RAF();*/
  /*}*/

  /*_LoadAnimatedModel() {*/
    /*const loader = new FBXLoader();*/
    /*loader.setPath('./resources/zombie/');*/
    /*loader.load('mremireh_o_desbiens.fbx', (fbx) => {*/
      /*fbx.scale.setScalar(0.1);*/
      /*fbx.traverse(c => {*/
        /*c.castShadow = true;*/
      /*});*/

      /*const params = {*/
        /*target: fbx,*/
        /*camera: this._camera,*/
      /*}*/
      /*this._controls = new BasicCharacterControls(params);*/

      /*const anim = new FBXLoader();*/
      /*anim.setPath('./resources/zombie/');*/
      /*anim.load('walk.fbx', (anim) => {*/
        /*const m = new THREE.AnimationMixer(fbx);*/
        /*this._mixers.push(m);*/
        /*const idle = m.clipAction(anim.animations[0]);*/
        /*idle.play();*/
      /*});*/
      /*this._scene.add(fbx);*/
    /*});*/
  /*}*/

  /*_LoadAnimatedModelAndPlay(path, modelFile, animFile, offset) {*/
    /*const loader = new FBXLoader();*/
    /*loader.setPath(path);*/
    /*loader.load(modelFile, (fbx) => {*/
      /*fbx.scale.setScalar(0.1);*/
      /*fbx.traverse(c => {*/
        /*c.castShadow = true;*/
      /*});*/
      /*fbx.position.copy(offset);*/

      /*const anim = new FBXLoader();*/
      /*anim.setPath(path);*/
      /*anim.load(animFile, (anim) => {*/
        /*const m = new THREE.AnimationMixer(fbx);*/
        /*this._mixers.push(m);*/
        /*const idle = m.clipAction(anim.animations[0]);*/
        /*idle.play();*/
      /*});*/
      /*this._scene.add(fbx);*/
    /*});*/
  /*}*/

  /*_LoadModel() {*/
    /*const loader = new GLTFLoader();*/
    /*loader.load('./resources/thing.glb', (gltf) => {*/
      /*gltf.scene.traverse(c => {*/
        /*c.castShadow = true;*/
      /*});*/
      /*this._scene.add(gltf.scene);*/
    /*});*/
  /*}*/

  /*_OnWindowResize() {*/
    /*this._camera.aspect = window.innerWidth / window.innerHeight;*/
    /*this._camera.updateProjectionMatrix();*/
    /*this._renderer.setSize(window.innerWidth, window.innerHeight);*/
  /*}*/

  /*_RAF() {*/
    /*requestAnimationFrame((t) => {*/
      /*if (this._previousRAF === null) {*/
        /*this._previousRAF = t;*/
      /*}*/

      /*this._RAF();*/

      /*this._renderer.render(this._scene, this._camera);*/
      /*this._Step(t - this._previousRAF);*/
      /*this._previousRAF = t;*/
    /*});*/
  /*}*/

  /*_Step(timeElapsed) {*/
    /*const timeElapsedS = timeElapsed * 0.001;*/
    /*if (this._mixers) {*/
      /*this._mixers.map(m => m.update(timeElapsedS));*/
    /*}*/

    /*if (this._controls) {*/
      /*this._controls.Update(timeElapsedS);*/
    /*}*/
  /*}*/
/*}*/



/*class LoadWorld {*/
		/*[> this class loads the world and all the functions it needs <]*/

  /*constructor() {*/
    /*this._renderer = new THREE.WebGLRenderer({ antialias: true, });*/

    /*this._renderer.shadowMap.enabled = true;*/
    /*this._renderer.shadowMap.type = THREE.PCFSoftShadowMap;*/
    /*this._renderer.setPixelRatio(window.devicePixelRatio);*/
    /*this._renderer.setSize(window.innerWidth, window.innerHeight);*/

    /*document.body.appendChild(this._renderer.domElement);*/

    /*window.addEventListener('resize', () => {*/
      /*this._OnWindowResize();*/
    /*}, false);*/

    /*const fov = 60;*/
    /*const aspect = 1920 / 1080;*/
    /*const near = 1.0;*/
    /*const far = 1000.0;*/
    /*this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);*/
    /*this._camera.position.set(75, 20, 0);*/

    /*this._scene = new THREE.Scene();*/

    /*let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);*/
    /*light.position.set(20, 100, 10);*/
    /*light.target.position.set(0, 0, 0);*/
    /*light.castShadow = true;*/
    /*light.shadow.bias = -0.001;*/
    /*light.shadow.mapSize.width = 2048;*/
    /*light.shadow.mapSize.height = 2048;*/
    /*light.shadow.camera.near = 0.1;*/
    /*light.shadow.camera.far = 500.0;*/
    /*light.shadow.camera.near = 0.5;*/
    /*light.shadow.camera.far = 500.0;*/
    /*light.shadow.camera.left = 100;*/
    /*light.shadow.camera.right = -100;*/
    /*light.shadow.camera.top = 100;*/
    /*light.shadow.camera.bottom = -100;*/
    /*this._scene.add(light);*/

    /*//light = new THREE.AmbientLight(0xFFFFFF, 4.0);*/
    /*//this._scene.add(light);*/

    /*const controls = new OrbitControls(*/
      /*this._camera, this._renderer.domElement);*/
    /*controls.target.set(0, 20, 0);*/
    /*controls.update();*/

    /*const loader = new THREE.CubeTextureLoader();*/
    /*const texture = loader.load([*/
        /*'./resources/posx.jpg',*/
				/*'./resources/negx.jpg',*/
        /*'./resources/posy.jpg',*/
        /*'./resources/negy.jpg',*/
        /*'./resources/posz.jpg',*/
        /*'./resources/negz.jpg',*/
    /*]);*/
    /*this._scene.background = texture;*/

    /*const plane = new THREE.Mesh(*/
        /*new THREE.PlaneGeometry(100, 100, 10, 10),*/
        /*new THREE.MeshStandardMaterial({*/
            /*color: 0x202020,*/
          /*}));*/
    /*plane.castShadow = false;*/
    /*plane.receiveShadow = true;*/
    /*plane.rotation.x = -Math.PI / 2;*/
    /*this._scene.add(plane);*/

    /*this._mixers = [];*/
    /*this._previousRAF = null;*/

    /*//this._LoadAnimatedModel();*/
			/*//*/
    /*this._LoadAnimatedModelAndPlay(*/
         /*'./resources/dancer/', 'girl.fbx', 'dance.fbx', new THREE.Vector3(0, -1.5, 5));*/
    /*this._LoadAnimatedModelAndPlay(*/
         /*'./resources/dancer/', 'dancer.fbx', 'Silly Dancing.fbx', new THREE.Vector3(12, 0, -10));*/
    /*this._LoadAnimatedModelAndPlay(*/
         /*'./resources/dancer/', 'dancer.fbx', 'Silly Dancing.fbx', new THREE.Vector3(-12, 0, -10));*/

    /*this._RAF();*/
  /*}*/

  /*_LoadAnimatedModel() {*/
    /*const loader = new FBXLoader();*/
    /*loader.setPath('./resources/zombie/');*/
    /*loader.load('mremireh_o_desbiens.fbx', (fbx) => {*/
      /*fbx.scale.setScalar(0.1);*/
      /*fbx.traverse(c => {*/
        /*c.castShadow = true;*/
      /*});*/

      /*const params = {*/
        /*target: fbx,*/
        /*camera: this._camera,*/
      /*}*/
      /*this._controls = new BasicCharacterControls(params);*/

      /*const anim = new FBXLoader();*/
      /*anim.setPath('./resources/zombie/');*/
      /*anim.load('walk.fbx', (anim) => {*/
        /*const m = new THREE.AnimationMixer(fbx);*/
        /*this._mixers.push(m);*/
        /*const idle = m.clipAction(anim.animations[0]);*/
        /*idle.play();*/
      /*});*/
      /*this._scene.add(fbx);*/
    /*});*/
  /*}*/

  /*_LoadAnimatedModelAndPlay(path, modelFile, animFile, offset) {*/
    /*const loader = new FBXLoader();*/
    /*loader.setPath(path);*/
    /*loader.load(modelFile, (fbx) => {*/
      /*fbx.scale.setScalar(0.1);*/
      /*fbx.traverse(c => {*/
        /*c.castShadow = true;*/
      /*});*/
      /*fbx.position.copy(offset);*/

      /*const anim = new FBXLoader();*/
      /*anim.setPath(path);*/
      /*anim.load(animFile, (anim) => {*/
        /*const m = new THREE.AnimationMixer(fbx);*/
        /*this._mixers.push(m);*/
        /*const idle = m.clipAction(anim.animations[0]);*/
        /*idle.play();*/
      /*});*/
      /*this._scene.add(fbx);*/
    /*});*/
  /*}*/

  /*_LoadModel() {*/
    /*const loader = new GLTFLoader();*/
    /*loader.load('./resources/thing.glb', (gltf) => {*/
      /*gltf.scene.traverse(c => {*/
        /*c.castShadow = true;*/
      /*});*/
      /*this._scene.add(gltf.scene);*/
    /*});*/
  /*}*/

  /*_OnWindowResize() {*/
    /*this._camera.aspect = window.innerWidth / window.innerHeight;*/
    /*this._camera.updateProjectionMatrix();*/
    /*this._renderer.setSize(window.innerWidth, window.innerHeight);*/
  /*}*/

  /*_RAF() {*/
    /*requestAnimationFrame((t) => {*/
      /*if (this._previousRAF === null) {*/
        /*this._previousRAF = t;*/
      /*}*/

      /*this._RAF();*/

      /*this._renderer.render(this._scene, this._camera);*/
      /*this._Step(t - this._previousRAF);*/
      /*this._previousRAF = t;*/
    /*});*/
  /*}*/

  /*_Step(timeElapsed) {*/
    /*const timeElapsedS = timeElapsed * 0.001;*/
    /*if (this._mixers) {*/
      /*this._mixers.map(m => m.update(timeElapsedS));*/
    /*}*/

    /*if (this._controls) {*/
      /*this._controls.Update(timeElapsedS);*/
    /*}*/
  /*}*/
/*}*/


/*let _APP = null;*/

/*window.addEventListener('DOMContentLoaded', () => {*/
  /*_APP = new LoadWorld();*/
/*});*/


 

