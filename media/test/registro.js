QUnit.module( "Llenar Formulario de Registro", {
	beforeEach: function() {
		this.input_nombre_usuario = $("#txtUsuario");
		this.id_tabla = "#tablaAlumno";
	}
});

QUnit.test( "Buscar 'nombre de usuario' - Repetido", function( assert ) {
		this.input_nombre_usuario.val('pepe');
		var usuario = new Usuario();
		var formRegistro = new FormRegistroView({model:usuario});
		formRegistro.validarUsuarioRepetido();
		assert.equal((usuario.get("usuario_valido")), false);
});

QUnit.test( "Buscar 'nombre de usuario' - No Repetido", function( assert ) {
		this.input_nombre_usuario.val('pepexd');
		var usuario = new Usuario();
		var formRegistro = new FormRegistroView({model:usuario});
		formRegistro.validarUsuarioRepetido();
		assert.equal((usuario.get("usuario_valido")), true);
});