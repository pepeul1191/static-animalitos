QUnit.module( "Llenar Formulario de Registro", {
	beforeEach: function() {
		this.input_nombre_usuario = $("#txtUsuario");
		this.input_correo_usuario = $("#txtCorreo");
		this.input_correo_usuario_repetido = $("#txtCorreoRepetir");
		this.input_correo_usuario_repetido = $("#txtCorreoRepetir");
		this.input_correo_contrasenia = $("#txtContrasenia");
		this.input_correo_contrasenia_repetido = $("#txtContraseniaRepetir");
	}
});

QUnit.test( "Buscar 'nombre de usuario' - Repetido", function( assert ) {
		this.input_nombre_usuario.val('pepe');
		var usuario = new Usuario();
		var formRegistro = new FormRegistroView({model:usuario});
		formRegistro.validarUsuarioRepetido();
		assert.equal((usuario.get("usuario_valido")), false, "Usuario ya existe en el registro de usuarios");
    
        var mensaje_class = this.input_nombre_usuario.parent().hasClass("has-error");
        assert.equal(mensaje_class, true, "Mensaje de error de nombre de usuario repetido tiene clase 'has-error'");
    
        var mensaje_error_generado = this.input_nombre_usuario.parent().find("span").html();
        var mensaje_error_esperado = "El nombre de usuario registrado ya se encuentra en uso";
        assert.equal(mensaje_error_generado, mensaje_error_esperado, "El nombre de usuario registrado ya se encuentra en uso");
});

QUnit.test( "Buscar 'nombre de usuario' - No Repetido", function( assert ) {
		this.input_nombre_usuario.val('pepexd');
		var usuario = new Usuario();
		var formRegistro = new FormRegistroView({model:usuario});
		formRegistro.validarUsuarioRepetido();
		assert.equal((usuario.get("usuario_valido")), true, "Usuario no existe en el registro de usuarios");
    
        var mensaje_class = this.input_nombre_usuario.parent().hasClass("has-error");
        assert.equal(mensaje_class, false, "Mensaje de error de correo de usuario repetido ausente, por tanto no tiene la clase 'has-error'");
    
        var mensaje_error_generado = this.input_nombre_usuario.parent().find("span").html();
        var mensaje_error_esperado = "";
        assert.equal(mensaje_error_generado, mensaje_error_esperado, "No existe mensaje de error de usuario repetido");
});

QUnit.test( "Buscar 'correo de usuario' - Repetido", function( assert ) {
		this.input_correo_usuario.val('jvaldivia@softweb.pe');
		var usuario = new Usuario();
		var formRegistro = new FormRegistroView({model:usuario});
		formRegistro.validarCorreoRepetido();
		assert.equal((usuario.get("correo_valido")), false, "Correo de usuario ya existe en el registro de usuarios");
    
        var mensaje_class = this.input_correo_usuario.parent().hasClass("has-error");
        assert.equal(mensaje_class, true, "Mensaje de error de correo de usuario repetido tiene clase 'has-error'");
    
        var mensaje_error_generado = this.input_correo_usuario.parent().find("span").html();
        var mensaje_error_esperado = "El correo ya se encuentra asociado a un usuario registrado";
        assert.equal(mensaje_error_generado, mensaje_error_esperado, "Mensaje de error de correo de usuario repetido tiene el contenido esperado");
        
});

QUnit.test( "Buscar 'correo de usuario' - No Repetido", function( assert ) {
		this.input_correo_usuario.val('jvaldivia@softweb.pex');
		var usuario = new Usuario();
		var formRegistro = new FormRegistroView({model:usuario});
		formRegistro.validarCorreoRepetido();
		assert.equal((usuario.get("correo_valido")), true, "Correo de usuario no existe en el registro de usuarios");
    
        var mensaje_class = this.input_correo_usuario.parent().hasClass("has-error");
        assert.equal(mensaje_class, false, "Mensaje de error de correo de usuario repetido ausente, por tanto no tiene la clase 'has-error'");
    
        var mensaje_error_generado = this.input_correo_usuario.parent().find("span").html();
        var mensaje_error_esperado = "";
        assert.equal(mensaje_error_generado, mensaje_error_esperado, "No existe mensaje de error de correo de usuario repetido");
});

QUnit.test( "Repetir correo coincide", function( assert ) {
		this.input_correo_usuario_repetido.val('jvaldivia@softweb.pe');
        this.input_correo_usuario_repetido.focusout();
		var usuario = new Usuario();
		var formRegistro = new FormRegistroView({model:usuario});
		formRegistro.validarCorreoIgual();
		assert.equal((usuario.get("correo_valido")), false, "Los correos ingresados no coinciden");
    
       var mensaje_class = this.input_correo_usuario_repetido.parent().hasClass("has-error");
        assert.equal(mensaje_class, true, "Mensaje de error de correo repetido  de usuario tiene clase 'has-error'");
    
        var mensaje_error_generado = this.input_correo_usuario_repetido.parent().find("span").html();
        var mensaje_error_esperado = "El correo ingresado no coincide con el primero";
        assert.equal(mensaje_error_generado, mensaje_error_esperado, "Mensaje de error de correo repetido de usuario repetido no tiene el contenido esperado");
});

QUnit.test( "Repetir correo no coincide", function( assert ) {
		this.input_correo_usuario_repetido.val('jvaldivia@softweb.pex');
        this.input_correo_usuario_repetido.focusout();
		var usuario = new Usuario();
		var formRegistro = new FormRegistroView({model:usuario});
		formRegistro.validarCorreoIgual();
		assert.equal((usuario.get("correo_valido")), true, "Los correos ingresados coinciden");
    
       var mensaje_class = this.input_correo_usuario_repetido.parent().hasClass("has-error");
        assert.equal(mensaje_class, false, "Mensaje de error de correo repetido  de usuario no tiene clase 'has-error'");
    
        var mensaje_error_generado = this.input_correo_usuario_repetido.parent().find("span").html();
        var mensaje_error_esperado = "";
        assert.equal(mensaje_error_generado, mensaje_error_esperado, "No hay mensaje de error de correo repetido de usuario repetido no tiene el contenido esperado");
});

QUnit.test( "Repetir contraseña coincide", function( assert ) {
	this.input_correo_contrasenia.val('123456');
	this.input_correo_contrasenia_repetido.val('123456');
	this.input_correo_contrasenia_repetido.focusout();
	var usuario = new Usuario();
	var formRegistro = new FormRegistroView({model:usuario});
	formRegistro.validarContraseniaIgual();
	assert.equal((usuario.get("contrasenia_valido")), true, "Las contraseñas ingresadas coinciden");

   var mensaje_class = this.input_correo_usuario_repetido.parent().hasClass("has-error");
	assert.equal(mensaje_class, false, "Mensaje de error de contraseña repetida no tiene clase 'has-error'");

	var mensaje_error_generado = this.input_correo_usuario_repetido.parent().find("span").html();
	var mensaje_error_esperado = "";
	assert.equal(mensaje_error_generado, mensaje_error_esperado, "No hay mensaje de error de contraseña repetida, no tiene contenido esperado");
});


QUnit.test( "Repetir contraseña no coincide", function( assert ) {
	//this.input_correo_contrasenia = $("#txtContrasenia");
	//this.input_correo_contrasenia_repetido = $("#txtContraseniaRepetir");
	this.input_correo_contrasenia.val('123456');
	this.input_correo_contrasenia_repetido.val('1234567');
	this.input_correo_contrasenia_repetido.focusout();
	var usuario = new Usuario();
	var formRegistro = new FormRegistroView({model:usuario});
	formRegistro.validarContraseniaIgual();
	assert.equal((usuario.get("contrasenia_valido")), false, "Las contraseñas ingresadas no coinciden");

   var mensaje_class = this.input_correo_contrasenia_repetido.parent().hasClass("has-error");
	assert.equal(mensaje_class, true, "Mensaje de error de contraseña repetida tiene clase 'has-error'");

	var mensaje_error_generado = this.input_correo_contrasenia_repetido.parent().find("span").html();
	var mensaje_error_esperado = "La contraseña ingresada no coincide con la primera";
	assert.equal(mensaje_error_generado, mensaje_error_esperado, "Hay mensaje de error de contraña repetida, tiene contenido esperado");
});