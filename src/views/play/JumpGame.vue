<template>
  <div class="w-100% map-class">
    <div id="score">0</div>
    <div id="fail">
      <p>您的分数为 <span id="score2">0</span><a href="javascript:;" class="refresh" title="刷新" @click="refreshPage">刷新</a></p>
      
    </div>
    <div ref="threeCanvas" class="three-canvas"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const threeCanvas = ref(null);


onMounted(() => {
  
  const script = document.createElement('script');
  script.src = "https://www.unpkg.com/three@0.154.0/build/three.js";

  // 当脚本加载完成后执行初始化逻辑
  script.onload = () => {
    const width = threeCanvas.value.clientWidth;;
    const height = threeCanvas.value.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(width, height);
    renderer.setClearColor(0x333333);

    camera.position.set(100, 100, 100);
    camera.lookAt(scene.position);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(40, 100, 60);

    scene.add(directionalLight);

    // document.body.appendChild(renderer.domElement)
    threeCanvas.value.appendChild(renderer.domElement);

    // const axesHelper = new THREE.AxesHelper( 1000 );
    // axesHelper.position.set(0,0,0);
    // scene.add( axesHelper );

    const targetCameraPos = { x: 100, y: 100, z: 100 };

    const cameraFocus = { x: 0, y: 0, z: 0 };
    const targetCameraFocus = { x: 0, y: 0, z: 0 };

    const playerPos = { x: 0, y: 17.5, z: 0 };
    const targetPlayerPos = { x: 0, y: 17.5, z: 0 };

    let player;
    let speed = 0;
    let speedY = 0;

    const currentCubePos = { x: 0, y: 0, z: 0 };
    let direction = 'right';

    let pressed = false;

    function createCube(x, z) {
      const geometry = new THREE.BoxGeometry(30, 20, 30);
      const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = x;
      cube.position.z = z;
      scene.add(cube);
    }

    function create() {


      function createPlayer() {
        const geometry = new THREE.BoxGeometry(5, 15, 5);
        const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
        const player = new THREE.Mesh(geometry, material);
        player.position.x = 0;
        player.position.y = 17.5;
        player.position.z = 0;
        scene.add(player)
        return player;
      }

      player = createPlayer();

      createCube(0, 0);

      document.body.addEventListener('mousedown', () => {
        speed = 0;
        speedY = 0;
        pressed = true;
      });

      document.body.addEventListener('mouseup', () => {
        pressed = false;
      })
    }

    function moveCamera() {
      if (player.position.y > 17.5) {
        if (direction === 'right') {
          camera.position.z -= speed;
          cameraFocus.z -= speed;
        } else {
          camera.position.x -= speed;
          cameraFocus.x -= speed;
        }

        camera.lookAt(cameraFocus.x, cameraFocus.y, cameraFocus.z);
      }
    }

    function playerInCube() {
      if (direction === 'right') {
        if (player.position.z < currentCubePos.z + 15 && player.position.z > currentCubePos.z - 15) {
          return true;
        }
      } else if (direction === 'left') {
        if (player.position.x < currentCubePos.x + 15 && player.position.x > currentCubePos.x - 15) {
          return true;
        }
      }
      return false;
    }

    let score = -1;
    let stopped = true;
    function movePlayer() {
      player.position.y += speedY;

      if (player.position.y < 17.5) {
        player.position.y = 17.5;

        if (stopped === false) {

          if (playerInCube()) {
            score++;
            document.getElementById('score').innerHTML = score;

            const distance = Math.floor(50 + Math.random() * 100);

            const num = Math.random();
            if (num > 0.5) {
              currentCubePos.z -= distance;
              direction = 'right';
            } else {
              currentCubePos.x -= distance;
              direction = 'left';
            }
            createCube(currentCubePos.x, currentCubePos.z);
          } else {
            document.getElementById('fail').style.display = 'block';
            document.getElementById('score2').innerHTML = score;
          }

        }

        stopped = true;
      } else {
        stopped = false;
        if (direction === 'right') {
          player.position.z -= speed;
        } else {
          player.position.x -= speed;
        }
      }
      speedY -= 0.3;
    }

    function speedUp() {
      if (pressed) {
        speed += 0.1;
        speedY += 0.1;

        if (player.scale.y > 0) {
          player.scale.y -= 0.001;
        }
        player.position.y -= 15 - 15 * player.scale.y

        if (player.position.y < 10) {
          player.position.y = 10;
        }
      } else {
        player.scale.y = 1;
      }
    }

    function render() {
      if (!pressed) {
        moveCamera();
        movePlayer();
      }
      speedUp();

      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    create();
    render();
  };

  // 将脚本标签添加到文档头部
  document.head.appendChild(script);
  // 处理窗口调整大小事件
  window.addEventListener('resize', () => {
    const width = threeCanvas.value.clientWidth;
    const height = threeCanvas.value.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
})

const refreshPage = (event) => {
  event.preventDefault(); // 阻止默认行为，防止页面跳转
  window.location.reload(); // 刷新当前页面
};

</script>

<style lang="scss" scoped>
.map-class {
  height: calc(100vh - 64px);
}
.three-canvas{
  width: 100%;
  height: 100vh;
}
.refresh{
  font-size: 60px;
  color: #2546b1
}
#score {
  font-size: 50px;
  color: #fff;
  position: fixed;
  top: 10%;
  left: 10%;
}

#fail {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  font-size: 70px;
  color: #fff;
  padding-left: 40%;
  padding-top: 200px;
  display: none;
}
</style>