// Registering component in Collider.js
AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 8; i++) {
        var id = `fish${i}`;
  
        var posX = Math.random() * 100 + (-50);      
        var posY = Math.random() * 5 + 5;
        var posZ = Math.random() * 60 + (-40);
  
        var position = { x: posX, y: posY, z: posZ }
  
        this.fishes(id, position);
  
      }
    },
    fishes: function (id,position) {
        const treasureEntity = document.querySelector("#island")
        var fishEl = document.createElement("a-entity");
  
        fishEl.setAttribute("id", id);
        fishEl.setAttribute("position",position);
        fishEl.setAttribute("scale",{ x: 0.4,y: 0.4,z: 0.4 });
  
        fishEl.setAttribute(
        "gltf-model",
        "./assets/fish/scene.gltf"
      );
      
      fishEl.setAttribute("animation-mixer",{});
      treasureEntity.appendChild(fishEl);
  
    }
    
  });
  
  
  