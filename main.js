function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var triangles = [

        //bagian atas
        -0.754,0.754,0.25, -0.254,0.754,0.25, -0.254,-0.754,0.25, -0.754,-0.754,0.25,   //kanan (lebih panjang)
        -0.754,0.754,-1.00, -0.254,0.754,-1.00, -0.254,-0.25,-1.00, -0.754,-0.25,-1.00, //kiri

        -0.754,0.754,0.25, -0.754,0.754,-1.00, -0.254,0.754,-1.00, -0.254,0.754,0.25, //atas
        -0.754,0.754,0.25, -0.754,-0.754,0.25, -0.754,-0.25,-1.00, -0.754,0.754,-1.00, //depan
        -0.254,0.754,0.25, -0.254,-0.754,0.25, -0.254,-0.25,-1.00, -0.254,0.754,-1.00, //belakang
        // -0.254,-0.754,0.25, -0.754,-0.754,0.25, -0.754,-0.25,-1.00, -0.254,-0.25,-1.00, //bawah

        //bagian bawah 
        //selimut
        -0.754,-1.754,0.25, -0.254,-1.754,0.25, -0.254,-0.754,0.25, -0.754,-0.754,0.25, //kanan
        -0.754,-1.754,-1.00, -0.254,-1.754,-1.00, -0.254,-0.25,-1.00, -0.754,-0.25,-1.00, //kiri (lebih panjang)

        -0.754,-1.754,0.25, -0.754,-1.754,-1.00, -0.754,-0.25,-1.00, -0.754,-0.754,0.25, //depan
        -0.254,-1.754,0.25, -0.254,-0.754,0.25, -0.254,-0.25,-1.00, -0.254,-1.754,-1.00, //belakang

        //tutup bawah
        -0.60,-1.67,-0.25, -0.35,-1.67,-0.25, -0.35,-1.67,-0.5, -0.60,-1.67,-0.5, //bawah kotak dalam
        -0.35,-1.67,-0.25, -0.35,-1.67,-0.5, -0.254,-1.754,-1.00, -0.254,-1.754,0.25, //hubungan ke belakang
        -0.60,-1.67,-0.25, -0.60,-1.67,-0.5, -0.754,-1.754,-1.00, -0.754,-1.754,0.25, //hubungan ke depan

        //hubungan ke kiri
        -0.60,-1.67,-0.5, -0.754,-1.754,-1.00, -0.254,-1.754,-1.00,
        -0.35,-1.67,-0.5, -0.254,-1.754,-1.00, -0.754,-1.754,-1.00,
        -0.60,-1.67,-0.5, -0.35,-1.67,-0.5, -0.754,-1.754,-1.00,

        //hubungan ke kanan
        -0.60,-1.67,-0.25, -0.754,-1.754,0.25, -0.254,-1.754,0.25,
        -0.35,-1.67,-0.25, -0.254,-1.754,0.25, -0.754,-1.754,0.25,
        -0.60,-1.67,-0.25, -0.35,-1.67,-0.25, -0.754,-1.754,0.25,
    ];
    
    var colors = [
        //bagian atas
        0,0,0, 0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0, 0,0,0,
        0,0,0, 0,0,0, 0,0,0, 0,0,0,

        //bagian selimut bawah
        0,0,1, 0,0,1, 0,0,1, 0,0,1,
        0,0,1, 0,0,1, 0,0,1, 0,0,1,
        0,0,1, 0,0,1, 0,0,1, 0,0,1,
        0,0,1, 0,0,1, 0,0,1, 0,0,1,

        //kotak dalam bawah
        // 0,0,0, 0,0,0, 0,0,0, 0,0,0,
        // 1,1,1, 1,1,1, 1,1,1, 1,1,1,
        0,0,1, 0,0,1, 0,0,1, 0,0,1,  //blue

        //hubungan kotak ke depan belakang
        0,0,0.7, 0,0,0.7, 0,0,0.7, 0,0,0.7,
        0,0,0.7, 0,0,0.7, 0,0,0.7, 0,0,0.7,

        //hubungan kotak ke kiri
        0,0,0.5, 0,0,0.5, 0,0,0.5,
        0,0,0.5, 0,0,0.5, 0,0,0.5,
        0,0,0.5, 0,0,0.5, 0,0,0.5,
        // 0,0,1, 0,0,1, 0,0,1,
        // 0,0,1, 0,0,1, 0,0,1,
        // 0,0,1, 0,0,1, 0,0,1,

        //hubungan kotak ke kanan
        0,0,0.5, 0,0,0.5, 0,0,0.5,
        0,0,0.5, 0,0,0.5, 0,0,0.5,
        0,0,0.5, 0,0,0.5, 0,0,0.5,
        // 0,0,1, 0,0,1, 0,0,1,
        // 0,0,1, 0,0,1, 0,0,1,
        // 0,0,1, 0,0,1, 0,0,1,

    ];

    var indices = [
        0,1,2, 0,2,3,
        4,5,6, 4,6,7,
        8,9,10, 8,10,11,
        12,13,14, 12,14,15,
        16,17,18, 16,18,19,
        20,21,22, 20,22,23,
        24,25,26, 24,26,27,
        28,29,30, 28,30,31,
        32,33,34, 32,34,35,
        36,37,38, 36,38,39,
        40,41,42, 40,42,43,
        44,45,46, 44,46,47,
        48,49,50, 51,52,53, 54,55,56, 
        57,58,59, 60,61,62, 63,64,65,
        // 66,67,68, 69,70,71,
        // 72,73,74, 75,76,77, 
        // 78,79,80, 81,82,83, 
        // 84,85,86, 87,88,89,
        // 90,91,92, 93,94,95,
        // 96,97,98, 99,100,101,
    ];

    //vertex buffer
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangles), gl.STATIC_DRAW);
    
    //color buffer
    var colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    //index buffer
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    //mengambil dan menyimpan informasi vertex dari html dg document getElementById
    var vertexShaderCode = document.getElementById("vertexShaderCode").text;
    //membuat vertex shader
    var vertexShader = gl.createShader( gl.VERTEX_SHADER );
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    //mengambil dan menyimpan informasi fragment dari html dg document getElementByID
    var fragmentShaderCode = document.getElementById("fragmentShaderCode").text;
    //membuat fragment shader
    var fragmentShader = gl.createShader( gl.FRAGMENT_SHADER );
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    //menambahkan info shader ke package agar bisa dicompile
    var program = gl.createProgram();  
    gl.attachShader(program, vertexShader);   
    gl.attachShader(program, fragmentShader);   
    gl.linkProgram(program);
    gl.useProgram(program);

    //menambahkan vertices ke dalam aPosition dan aColor untuk digambar
    //position
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    var aPosition = gl.getAttribLocation(program, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    //color
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    var aColor = gl.getAttribLocation(program, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aColor);
    
    var Pmatrix = gl.getUniformLocation(program, "uProj");
    var Vmatrix = gl.getUniformLocation(program, "uView");
    var Mmatrix = gl.getUniformLocation(program, "uModel");
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    
    var projmatrix = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        projmatrix,
        glMatrix.glMatrix.toRadian(90),
        1.0,
        0.5,
        10.0
    );
    var modmatrix = glMatrix.mat4.create();
    var viewmatrix = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(
        viewmatrix,
        [-0.2, 0.0, 3.0],    //posisi kamera
        [0.0, 0.0, -2.0],   //kemana kamera menghadap
        [0.0, 1.0, 0.0]     //arah atas kamera
    );

    var freeze = false;
    function onMouseClick(event){
        if(freeze) freeze = false;
        else freeze = true;
    }
    document.addEventListener('click', onMouseClick, false);

    function onKeyDown(event){
        if(event.keyCode == 32) freeze = true;
    }
    function onKeyUp(event){
        if(event.keyCode == 32) freeze = false;
    }
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);
   
    var tetha = glMatrix.glMatrix.toRadian(1);
    var animate = function(){
        if(!freeze){
            glMatrix.mat4.rotate(modmatrix, modmatrix, tetha, [4.0, 1.0, 1.0]);
            // glMatrix.mat4.rotate(modmatrix, modmatrix, tetha, [1.0, 0.0, 0.0]);
        }
        
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);

        gl.clearColor(1.0, 1.0, 1.0, 1.0);
        gl.clearDepth(1.0);

        gl.viewport(0.0, 0.0, canvas.width, canvas.height);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.uniformMatrix4fv(Pmatrix, false, projmatrix);
        gl.uniformMatrix4fv(Vmatrix, false, viewmatrix);
        gl.uniformMatrix4fv(Mmatrix, false, modmatrix);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

        window.requestAnimationFrame(animate);
    }    
    animate(0);    
}