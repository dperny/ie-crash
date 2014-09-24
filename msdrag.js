function DragBlock(imagesrc) {
  // get a reference to the current object so we can
  // pass this object into closures
  self = this;
  // the src of this image
  self.imgsrc = imagesrc;
  // jquery object representing the master image
  self.tag = $("<img src='" + this.imgsrc + "' />");
  self.depth = 0;

  self.tag.draggable({
    drag: function() {
      newTag = $("<img src='" + self.imgsrc + "' />");
      newTag.css({"position": "absolute"});
      newTag.css(self.tag.css(["left", "top"]));
      newTag.css({"z-index": self.depth});
      self.depth = self.depth + 1;
      self.tag.css({"z-index": self.depth});
      $("body").append(newTag);
    }
  });
  
  /* TODO: for testing, add 
   * filter: blur(10px);
   * to the tag onclick, remove on release
  this.tag.mousedown(function() {
    if(!$(this).hasClass("blur")) {
      $(this).addClass("blur");
    }
  });

  this.tag.mouseup(function() {
    // console.log("mouseup");
    if($(this).hasClass("blur")) {
      $(this).removeClass("blur");
    } 
  });
  */
}

// main function, runs on start
$(document).ready(function() {
  var block = new DragBlock("image.gif");
  $("body").append(block.tag);
});
