import '../styles/imageprev.css'

export default function Image() {
    
    const img1 = "https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-6/430284305_10159796828244249_5584620818985808106_n.jpg?stp=dst-jpg_p960x960&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6pwodmUfNAoAX_GtZiY&_nc_ht=scontent.fsac1-2.fna&oh=00_AfBrLZxHWO3mRb67Y8IkZg5bdQwNR8n-YC6NB_OvmJQ-0A&oe=65F0DD37";
    const img2 = "https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-6/431384314_10159796824564249_8644002607497087591_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cVMdgutSlTUAX9KOJ6o&_nc_ht=scontent.fsac1-2.fna&oh=00_AfBYFqFZtikStngWwgFLi_8R6tOXdWsUXi0f2BA7uySuFA&oe=65F10694";
    const img3 = "https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/428697895_10159796824749249_6645952049023729029_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cnXBU8R76-wAX-W9wcU&_nc_ht=scontent.fsac1-1.fna&oh=00_AfCfNsVGCRKcfNbDfskGR82h4DXphRqDX5g_KbnLsme_Fg&oe=65F10386";
    const img4 = "https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/431263084_10159796824689249_7048038882326672827_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SoXavBulyz4AX-kkbjH&_nc_ht=scontent.fsac1-1.fna&oh=00_AfDCKJkj1R913QKOX2TOxrBI5AXp4Nuu1JSRw4NOxf5pIg&oe=65F04EC6";
    const img5 = "https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-6/428697628_10159796824654249_9179999461864652453_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TiyQBAE9K00AX82aTPx&_nc_ht=scontent.fsac1-2.fna&oh=00_AfADUvQjDu8rFhY7JxmK7BxnB9fxjQ9LtD2s1V_Oa4oJrA&oe=65F07DCE";
    const img6 = "https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/431329473_10159796824519249_6403567664321441478_n.jpg?stp=dst-jpg_p960x960&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Qqlvc7QwKtEAX8P45RM&_nc_ht=scontent.fsac1-1.fna&oh=00_AfBBOHaFcgbeHFTv9zsZ8Qc-YFjyIDYYd-BzUvUMPzDGOg&oe=65F18645";

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
                        <img className="img_large" src="https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-6/430284305_10159796828244249_5584620818985808106_n.jpg?stp=dst-jpg_p960x960&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6pwodmUfNAoAX_GtZiY&_nc_ht=scontent.fsac1-2.fna&oh=00_AfBrLZxHWO3mRb67Y8IkZg5bdQwNR8n-YC6NB_OvmJQ-0A&oe=65F0DD37" alt="image goes here"></img>
                        
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