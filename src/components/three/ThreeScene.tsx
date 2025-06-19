import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  console.log('ThreeScene component initialized');
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
    // Create a group to hold all objects
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);
    
    // Create a sphere wireframe
    const sphereGeometry = new THREE.IcosahedronGeometry(21, 3);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x6D28D9,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    networkGroup.add(sphereMesh);
    
    // Create nodes at each vertex
    const positions = sphereGeometry.attributes.position;
    const nodeGeometry = new THREE.BoxGeometry(0.02, 0.02, 0.02);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    
    const nodes = new THREE.Group();
    networkGroup.add(nodes);
    
    // Store vertex positions for later use
    const vertexPositions: THREE.Vector3[] = [];
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(x, y, z);
      nodes.add(node);
      
      vertexPositions.push(new THREE.Vector3(x, y, z));
    }
    
    // Create additional connections between nodes
    const connectionsMaterial = new THREE.LineBasicMaterial({
      color: 0xA78BFA,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });
    
    const connectionsGroup = new THREE.Group();
    networkGroup.add(connectionsGroup);
    
    const createConnections = () => {
      // Clear previous connections
      while(connectionsGroup.children.length > 0) {
        connectionsGroup.remove(connectionsGroup.children[0]);
      }
      
      const connectionCount = 30;
      
      for (let i = 0; i < connectionCount; i++) {
        // Pick two random vertices
        const index1 = Math.floor(Math.random() * vertexPositions.length);
        const index2 = Math.floor(Math.random() * vertexPositions.length);
        
        // Don't connect a vertex to itself
        if (index1 !== index2) {
          const point1 = vertexPositions[index1];
          const point2 = vertexPositions[index2];
          
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([point1, point2]);
          const line = new THREE.Line(lineGeometry, connectionsMaterial);
          connectionsGroup.add(line);
        }
      }
    };
    
    // Initial connections
    createConnections();
    
    // Add pulsing inner sphere for glow effect
    const glowGeometry = new THREE.SphereGeometry(0, 35, 35);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x6D28D9,
      transparent: true,
      opacity: 0,
      side: THREE.BackSide
    });
    
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    networkGroup.add(glowMesh);
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      frame += 0.01;
      
      // Continuous rotation on multiple axes
      networkGroup.rotation.y += 0.002;
      networkGroup.rotation.x = Math.sin(frame * 0.5) * 0.3;
      networkGroup.rotation.z = Math.cos(frame * 0.3) * 0.2;
      
      // Pulse the glow
      const pulseScale = 1 + Math.sin(frame * 2) * 0.05;
      glowMesh.scale.set(pulseScale, pulseScale, pulseScale);
      
      // Occasionally update connections
      if (Math.floor(frame * 100) % 100 === 0) {
        createConnections();
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      
      // Dispose of geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className || ''}`}
    />
  );
};

export default ThreeScene;