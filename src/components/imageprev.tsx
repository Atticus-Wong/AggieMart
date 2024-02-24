import '../styles/imageprev.css'

export default function Image() {
    
    const img1 = "https://as2.ftcdn.net/v2/jpg/00/99/53/31/1000_F_99533164_fpE2O6vEjnXgYhonMyYBGtGUFCLqfTWA.jpg";
    const img2 = "https://www.thepackagingcompany.us/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_80269.jpg";
    const img3 = "https://blognumbers.files.wordpress.com/2010/10/1.jpg";
    const img4 = "https://storage.needpix.com/rsynced_images/one-706897_1280.jpg";
    const img5 = "https://pngimg.com/d/number1_PNG14901.png";
    const img6 = "https://png.pngtree.com/png-clipart/20210411/original/pngtree-number-1-png-image_6212588.jpg";

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
        <div>
            <div className='left'>
                <div className="square">

                    <div className="img">
                        <img className="img_large" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="image goes here"></img>
                        
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