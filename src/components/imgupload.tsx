
export default function ImageUpload() {
    
  const img1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/2048px-Square_gray.svg.png";
  const img2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/2048px-Square_gray.svg.png";
  const img3 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/2048px-Square_gray.svg.png";
  const img4 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/2048px-Square_gray.svg.png";
  const img5 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/2048px-Square_gray.svg.png";
  const img6 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/2048px-Square_gray.svg.png";

  const images = [img1, img2, img3, img4, img5, img6];

  //returns the link to the chosen image from the array. Set the src in the img elements below.
  function loadImage(x: any) {
      return images[x];
  }

  //this changes the large preview image to one from the array of image links.
  function choosePreviewImage(x : number) {

      //sets the src link of the large preview image.
      (document.getElementsByClassName('img_large')[0] as HTMLImageElement).src = images[x];
  }

  return(
      <div className="image-upload-wrapper">
          <div className='left'>
              <div className="square">

                  <div className="img">
                      <img className="img_large" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/2048px-Square_gray.svg.png" alt="image goes here"></img>
                      
                  </div>

              </div>
              <div className='siximg'>

                  {/* 
                  onClick: when the image is clicked
                  choosePreviewImage() will be called
              
                  loadImage() will be called to set the images

                  ()=> means a parameter will be passed into loadImage() and choosePreviewImage()
                  */}
                  <img className="small_img1" src={loadImage(0)} onClick={() => choosePreviewImage(0)} >
                      </img>
                  <img className="small_img1" src={loadImage(1)} onClick={() => choosePreviewImage(1)} >
                      </img>
                  <img className="small_img1" src={loadImage(2)} onClick={() => choosePreviewImage(2)} >
                      </img>
                  <img className="small_img1" src={loadImage(3)} onClick={() => choosePreviewImage(3)} >
                      </img>
                  <img className="small_img1" src={loadImage(4)} onClick={() => choosePreviewImage(4)} >
                      </img>
                  <img className="small_img1" src={loadImage(5)} onClick={() => choosePreviewImage(5)}>
                      </img>
                  {/* <div className="prev_here">
                          <p>Image previews go here</p>
                      </div> */}
              </div>
          </div>
      </div>
  );
}