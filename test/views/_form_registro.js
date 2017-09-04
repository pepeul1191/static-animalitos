QUnit.module( "Llenar Formulario de Registro", {
	beforeEach: function() {
		this.input_nombre_usuario = $("#txtUsuario");
		this.input_correo_usuario = $("#txtCorreo");
		this.id_tabla = "#tablaAlumno";
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