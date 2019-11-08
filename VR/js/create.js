
var container, controls;
var camera, scene, renderer;
init();
animate();


function init() {
        container = document.createElement( 'div' );
        document.body.appendChild( container );
        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 10 );
        camera.position.z = 2;
        controls = new THREE.TrackballControls( camera );
        scene = new THREE.Scene();
        scene.add( new THREE.HemisphereLight() );
        var directionalLight = new THREE.DirectionalLight( 0xffeedd );
        directionalLight.position.set( 0, 0, 2 );
        scene.add( directionalLight );
        var loader = new THREE.TDSLoader( );
        loader.setPath( './' );
        loader.load( './bunny.3ds', function ( object ) {
                object.traverse( function ( child ) {
                } );
                scene.add( object );
        });
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );
        window.addEventListener( 'resize', resize, false );
}
function resize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
        controls.update();
        renderer.render( scene, camera );
        requestAnimationFrame( animate );
}
