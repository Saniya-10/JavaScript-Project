import React from "react";
function Loginpage(){
    return(
    <div class="container p-5" id="root" style={{ maxWidth: "350px", margin: "3 auto" }}>
        <h1 style={{textAlign: 'center'}}>Sign Up</h1>
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" id="username" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="pass" class="form-label">Password</label>
            <input type="password" id="pass" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="pass" class="form-label">Confirm Password</label>
            <input type="password" id="pass" class="form-control"/>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="remember"/>
            <label class="form-check-label" for="remember">Remember me</label>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">E mail</label>
            <input type="email" id="uemail" class="form-control"/>
        </div>
        <div class="d-grid gap-2">
            <button type="button" class="btn btn-primary" id="butt">Sign Up</button>
        </div>
    </div>

)}

export default Loginpage;