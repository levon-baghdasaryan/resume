$("#clone_aparat2").on("click",function () {
    $('.clon_here').append(addEducation());
});

function addEducation() {
    return `
        <div class="clon">
            <div class="start_header">
                <div class="header_inputs">
                    <h2>Tell us about your education</h2>
                    <p>Tell us about any colleges, vocational programs, or training courses you took. Even if you didn’t finish, it’s important to list them.</p>

                    <div class="job_area">
                        <form class="form_header">
                            <div class="name">
                                <div class="first_name">
                                    <label>School Name</label>
                                    <input type="text" placeholder="N 80 school">
                                </div>
                                <div class="first_name">
                                    <label>School Location</label>
                                    <input type="text" placeholder="New York">
                                </div>
                            </div>

                            <div class="address_input">
                                <label>Degree</label>
                                <select>
                                    <option value="">Select</option>
                                    <option value="">...</option>
                                    <option value="">.....</option>
                                    <option value="">......</option>
                                </select>
                            </div>
                            <div class="graduation">
                                <div class="study">
                                    <label>Field Of Study</label>
                                    <input type="text" placeholder="">
                                </div>
                                <div class="graduation_year">
                                    <label>Graduation Year</label>
                                    <select>
                                        <option value="">1970</option>
                                        <option value="">1971</option>
                                        <option value="">1972</option>
                                        <option value="">1973</option>
                                        <option value="">1974</option>
                                        <option value="">1975</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div class="add_description" id="add_desc">
                            <p>
                                <span id="plus">+</span>
                                Add a description</p>
                        </div>
                        <div class="textarea_desc hidden" id="add_textarea">
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
                <div class="tips">

                    <div class="dropdown show">
                        <div class="customer btn dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                            <img src="assets/images/customer-service.png">
                        </div>
                        <div class="dropdown-menu dropdown-menu-right show">
                            <h4>TIPS</h4>
                            <ul>
                                <li>
                                    <p>Include up to 10 years of recent work experience,
                                        beginning with your current or most recent employer.</p>
                                </li>
                                <li>
                                    <p>Use bullets to list your major accomplishments and experience
                                        so employers can easily scan your resume.</p>
                                </li>
                                <li>
                                    <p>If you have relevant work experience from more than 10 years ago,
                                        we recommend adding a separate section called Previous Work Experience.</p>
                                </li>
                            </ul>
                        </div>



                    </div>
                </div>
            </div>
            <div class="preview-wrapper">                    
                <div class="preview" >
                    <p class="preview-resume" data-toggle="modal" data-target="#exampleModalCenter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <defs><style>.a{fill:#18358a;}</style></defs><g transform="translate(10.554 9.374)">
                                <path class="a" d="M278.4,247.557a3.532,3.532,0,0,0-.376-4.549,3.641,3.641,0,0,0-5.009,0,3.536,3.536,0,0,0,4.549,5.384l3.024,2.953.835-.835Z" transform="translate(-271.979 -242.01)"/>
                            </g><g transform="translate(10.603 0.346)"><path class="a" d="M272,8.789v4.416h4.377Z" transform="translate(-272 -8.789)"/>
                            </g><path class="a" d="M14.108,17.618A4.637,4.637,0,0,1,10.8,16.243a4.649,4.649,0,0,1,4.476-7.8V5.9H9.431V0H0V20H15.277V17.452A4.661,4.661,0,0,1,14.108,17.618ZM2.338,7.07H10.6V8.242H2.338Zm5.924,8.2H2.338V14.1H8.262Zm0-2.344H2.338V11.758H8.262Zm0-2.344H2.338V9.414H8.262Z"/></svg>Preview Resume</p>
                </div>
            </div>
        </div>
    `;
}