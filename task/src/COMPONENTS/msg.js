const Msg = () => {
    return (
        <div className="row">
            <div className="col-5 bg-dark vh-100">
                <h1 className="text-white">dihufihvldd</h1>
            </div>

            <div className="chat_section my_bg px-5 col-7 vh-100">
                {/* <div className=" px-5 w-100 bg-light">
                    <div className="bg-dark col-2">
                        <img className="user_2_img rounded" src="./Images/mcu1.jpg" />
                    </div>
                    <div className="col-5 ">
                        <h5>User 2 Name</h5>
                    </div>

                </div> */}
                <div class="px-3 bg-white rounded nav rounded-pill mt-2">
                    <div class="p-2">
                        {/* <a class="nav-link active" aria-current="page" href="#">Active</a> */}
                        <img className="user_2_img rounded-circle" src="./Images/mcu1.jpg" />

                    </div>
                    <div class="p-2">
                        {/* <a class="nav-link" href="#">Link</a> */}
                        <p className="m-0" >User 2 Name</p>
                        <p className="m-0" ><spam>online</spam> <spam></spam></p>
                    </div>
                    <div class="  ms-auto">
                        {/* <a class="nav-link" href="#">Link</a> */}
                        <ul className="mt-3">
                            <li className="d-inline mx-2"><span class=" material-symbols-outlined">call</span></li>
                            <li className="d-inline mx-2"><span class=" material-symbols-outlined">videocam</span></li>
                            <li className="d-inline mx-2"><span class=" material-symbols-outlined">more_horiz</span></li>
                        </ul>
                    </div>

                </div>


                <div className="my-2 rounded chat-box bg-white w-100">
                    {/* <h1>sdauhjf</h1> */}
                    <div className="">
                        <p className="">User Input</p>
                    </div>
                </div>

                <div className=" p-2 rounded-pill  bg-white w-100">
                    {/* <h1>sdauhjf</h1> */}
                    <div class="input-group rounded">
                        <input type="text" class="form-control" placeholder="Enter Your Message"/>
                            <button class=" rounded-circle  btn my_bg"><span class="m-1 material-symbols-outlined">send</span></button>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Msg;