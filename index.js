looker.plugins.visualizations.add({
    id: "image-gallery",
    label: "Image Gallery",
    create: function (element, config) {
      element.innerHTML = `<div id="gallery" style="display: grid; gap: 10px;"></div>`;
    },
    updateAsync: function (data, element, config, queryResponse, details) {
      const gallery = element.querySelector("#gallery");
      const columns = config.style.columns || 3;
      gallery.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  
      gallery.innerHTML = ""; // Clear existing content
  
      data.forEach((row) => {
        const imageUrl = row["Image URL"];
        const altText = row["Alt Text"];
  
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = altText;
        imgElement.style.width = "100%";
  
        gallery.appendChild(imgElement);
      });
    }
  });
  