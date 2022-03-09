import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function addController(camera, renderer){
		const controls = new OrbitControls( camera, renderer.domElement );
		controls.target.set( 0, 100, 0 );
		//controls.enableDamping = true;
		controls.tick = () => controls.update();
		return controls;
}

export { addController }
