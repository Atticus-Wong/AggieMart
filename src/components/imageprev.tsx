import '../styles/imageprev.css'

export default function Image() {
    return(
        <div>
            <div className='left'>
                <div className="square">

                    <div className="img">
                        <img className="img_large" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg " alt="image goes here"></img>
                        
                    </div>

                </div>
                <div className='siximg'>
                    <div className="small_img1">
                        </div>
                    <div className="small_img2">
                        </div>
                    <div className="small_img3">
                        </div>
                    <div className="small_img4">
                        </div>
                    <div className="small_img5">
                        </div>
                    <div className="small_img6">
                        </div>
                    {/* <div className="prev_here">
                            <p>Image previews go here</p>
                        </div> */}
                </div>
            </div>
        </div>
    );
}