//#include <mud/frame.h>
#include <frame/Api.h>
#include <gfx-pbr/Api.h>

#include <xx_three/xx_three.h>

using namespace mud;

//<script src="js/postprocessing/HalftonePass.js"></script>
//
//<script src="js/shaders/HalftoneShader.js"></script>
//<script src="js/shaders/DepthLimitedBlurShader.js"></script>
//<script src="js/shaders/UnpackDepthRGBAShader.js"></script>

void xx_effect_rgb_halftone(Shell& app, Widget& parent, Dockbar& dockbar, bool init)
{
	UNUSED(dockbar);
	SceneViewer& viewer = ui::scene_viewer(parent);

#if 0
	wrapper = document.createElement( 'div' );
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	clock = new THREE.Clock();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 12;
	rotationSpeed = Math.PI / 64;
	stats = new Stats();
	wrapper.appendChild( renderer.domElement );
	wrapper.appendChild( stats.dom );
	document.body.appendChild( wrapper );

	// camera controls
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.target.set( 0, 0, 0 );
	controls.update();

	// scene
	var scene, group, mat, floor, light;

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x444444 );
	group = new THREE.Group();
	floor = new THREE.Mesh( new THREE.BoxBufferGeometry( 100, 1, 100 ), new THREE.MeshPhongMaterial( {} ) );
	floor.position.y = - 10;
	light = new THREE.PointLight( 0xffffff, 1.0, 50, 2 );
	light.position.y = 2;
	group.add( floor, light );
	scene.add( group );

	mat = new THREE.ShaderMaterial( {

		uniforms: {},

		vertexShader: [
			"varying vec2 vUV;",
			"varying vec3 vNormal;",

			"void main() {",

			"vUV = uv;",
			"vNormal = vec3( normal );",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

			"}"
		].join( "\n" ),

		fragmentShader: [
			"varying vec2 vUV;",
			"varying vec3 vNormal;",

			"void main() {",

			"vec4 c = vec4( abs( vNormal ) + vec3( vUV, 0.0 ), 0.0 );",
			"gl_FragColor = c;",

			"}"
		].join( "\n" )
	} );

	for ( var i = 0; i < 50; ++ i ) {

		// fill scene with coloured cubes
		var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 2, 2, 2 ), mat );
		mesh.position.set( Math.random() * 16 - 8, Math.random() * 16 - 8, Math.random() * 16 - 8 );
		mesh.rotation.set( Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2 );
		group.add( mesh );

	}

	// post-processing
	var composer, renderPass, halftonePass, params;

	composer = new THREE.EffectComposer( renderer );
	renderPass = new THREE.RenderPass( scene, camera );
	params = {
		shape: 1,
		radius: 4,
		rotateR: Math.PI / 12,
		rotateB: Math.PI / 12 * 2,
		rotateG: Math.PI / 12 * 3,
		scatter: 0,
		blending: 1,
		blendingMode: 1,
		greyscale: false,
		disable: false
	};
	halftonePass = new THREE.HalftonePass( window.innerWidth, window.innerHeight, params );
	halftonePass.renderToScreen = true;
	composer.addPass( renderPass );
	composer.addPass( halftonePass );

	window.onresize = function () {

		// resize composer
		renderer.setSize( window.innerWidth, window.innerHeight );
		composer.setSize( window.innerWidth, window.innerHeight );
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

	};

	// GUI
	var controller, gui, onGUIChange;

	controller = {
		radius: halftonePass.uniforms[ "radius" ].value,
		rotateR: halftonePass.uniforms[ "rotateR" ].value / ( Math.PI / 180 ),
		rotateG: halftonePass.uniforms[ "rotateG" ].value / ( Math.PI / 180 ),
		rotateB: halftonePass.uniforms[ "rotateB" ].value / ( Math.PI / 180 ),
		scatter: halftonePass.uniforms[ "scatter" ].value,
		shape: halftonePass.uniforms[ "shape" ].value,
		greyscale: halftonePass.uniforms[ "greyscale" ].value,
		blending: halftonePass.uniforms[ "blending" ].value,
		blendingMode: halftonePass.uniforms[ "blendingMode" ].value,
		disable: halftonePass.uniforms[ "disable" ].value
	};

	onGUIChange = function () {

		// update uniforms
		halftonePass.uniforms[ "radius" ].value = controller.radius;
		halftonePass.uniforms[ "rotateR" ].value = controller.rotateR * ( Math.PI / 180 );
		halftonePass.uniforms[ "rotateG" ].value = controller.rotateG * ( Math.PI / 180 );
		halftonePass.uniforms[ "rotateB" ].value = controller.rotateB * ( Math.PI / 180 );
		halftonePass.uniforms[ "scatter" ].value = controller.scatter;
		halftonePass.uniforms[ "shape" ].value = controller.shape;
		halftonePass.uniforms[ "greyscale" ].value = controller.greyscale;
		halftonePass.uniforms[ "blending" ].value = controller.blending;
		halftonePass.uniforms[ "blendingMode" ].value = controller.blendingMode;
		halftonePass.uniforms[ "disable" ].value = controller.disable;

	};

	gui = new dat.GUI();
	gui.add( controller, 'shape', { 'Dot': 1, 'Ellipse': 2, 'Line': 3, 'Square': 4 } ).onChange( onGUIChange );
	gui.add( controller, 'radius', 1, 25 ).onChange( onGUIChange );
	gui.add( controller, 'rotateR', 0, 90 ).onChange( onGUIChange );
	gui.add( controller, 'rotateG', 0, 90 ).onChange( onGUIChange );
	gui.add( controller, 'rotateB', 0, 90 ).onChange( onGUIChange );
	gui.add( controller, 'scatter', 0, 1, 0.01 ).onChange( onGUIChange );
	gui.add( controller, 'greyscale' ).onChange( onGUIChange );
	gui.add( controller, 'blending', 0, 1, 0.01 ).onChange( onGUIChange );
	gui.add( controller, 'blendingMode', { 'Linear': 1, 'Multiply': 2, 'Add': 3, 'Lighter': 4, 'Darker': 5 } ).onChange( onGUIChange );
	gui.add( controller, 'disable' ).onChange( onGUIChange );

	function loop() {

		// demo loop
		var delta = clock.getDelta();
		requestAnimationFrame( loop );
		stats.update();
		group.rotation.y += delta * rotationSpeed;
		composer.render( delta );

	}

	loop();
#endif
}
