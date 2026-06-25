const fs = require('fs');
const path = require('path');

const glbPath = path.join(__dirname, '..', 'public', 'NurseModel.glb');

try {
  const buffer = fs.readFileSync(glbPath);
  // GLB header is 12 bytes
  // Magic: 4 bytes (0x46546C67)
  // Version: 4 bytes
  // Length: 4 bytes
  const magic = buffer.readUInt32LE(0);
  if (magic !== 0x46546C67) {
    console.error('Not a valid GLB file');
    process.exit(1);
  }

  // First chunk is JSON
  const chunkLength = buffer.readUInt32LE(12);
  const chunkType = buffer.readUInt32LE(16);
  if (chunkType !== 0x4E4F534A) {
    console.error('First chunk is not JSON');
    process.exit(1);
  }

  const jsonString = buffer.toString('utf8', 20, 20 + chunkLength);
  const gltf = JSON.parse(jsonString);

  console.log('--- GLB Info ---');
  if (gltf.animations) {
    console.log('Animations found:', gltf.animations.length);
    gltf.animations.forEach((anim, i) => {
      console.log(`[${i}] Name: "${anim.name}"`);
    });
  } else {
    console.log('No animations found in GLB');
  }

  if (gltf.nodes) {
    console.log('Total nodes:', gltf.nodes.length);
  }

  if (gltf.meshes) {
    console.log('Total meshes:', gltf.meshes.length);
  }

} catch (err) {
  console.error('Error reading GLB:', err);
}
