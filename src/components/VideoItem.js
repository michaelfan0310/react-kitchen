
function VideoItem(){   

    return(<div>
<video id="video" controls preload="auto">
  <source src="./MichaelBub.mp4" type="video/mp4">
  </source>
  <source src="movie.ogg" type="video/ogg">
  </source>
</video>

</div>
    );
}

export default VideoItem