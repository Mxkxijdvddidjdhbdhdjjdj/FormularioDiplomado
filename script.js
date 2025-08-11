// ===== DATOS DE DIPLOMADOS =====
const diplomadosPorCarrera = {
    'criminalistica': [
        { nombre: 'FENÓMENOS CADAVÉRICOS', docente: 'CINTHIA CIBELLY', horario: '1:45PM A 5:45PM', salon: 'Aula 604' }
    ],
    'cocina': [
        { nombre: 'PANADERÍA Y REPOSTERÍA', docente: 'TOMÁS CASTELLAR', horario: '1:45PM A 5:45PM', salon: 'Aula 2D' }
    ],
    'seguridad_industrial': [
        { nombre: 'BRIGADISTA DE EMERGENCIA Y PRIMEROS AUXILIOS', docente: 'OSWALDO CALLE', horario: '1:45PM A 5:45PM', salon: 'Aula 103' },
        { nombre: 'BRIGADISTA DE EMERGENCIA Y PRIMEROS AUXILIOS', docente: 'OSWALDO CALLE', horario: '6:00PM A 9:00PM', salon: 'Aula 703' }
    ],
    'logistica_portuaria': [
        { nombre: 'OPERACIÓN SEGURA EN LOGÍSTICA Y EQUIPOS PORTUARIOS', docente: 'OMAR BUENDÍA', horario: '1:45PM A 5:45PM', salon: 'Aula 6A' },
        { nombre: 'OPERACIÓN SEGURA EN LOGÍSTICA Y EQUIPOS PORTUARIOS', docente: 'OMAR BUENDÍA', horario: '6:00PM A 9:00PM', salon: 'Aula 6A' }
    ],
    'farmacia': [
        { nombre: 'TECNOVIGILANCIA Y REACTIVOVIGILANCIA', docente: 'YESENIA BRAVO', horario: '1:45PM A 5:45PM', salon: 'Aula 3B' },
        { nombre: 'TECNOVIGILANCIA Y REACTIVOVIGILANCIA', docente: 'YESENIA BRAVO', horario: '6:00PM A 9:00PM', salon: 'Aula 3B' }
    ],
    'cosmetologia': [
        { nombre: 'MICROBIOMA CUTÁNEO Y SALUD DE LA PIEL', docente: 'ESTIVEN GARRIDO', horario: '1:45PM A 5:45PM', salon: 'Laboratorio de Cosmetología' }
    ],
    'veterinaria': [
        { nombre: 'FLUIDOTERAPIA EN ANIMALES DOMÉSTICOS', docente: 'YEINI SÁNCHEZ', horario: '1:45PM A 5:45PM', salon: 'Por definir' }
    ],
    'diseño_sistemas': [
        { nombre: 'MARKETING DIGITAL CON ÉNFASIS EN E-COMMERCE', docente: 'JORGE TAJÁN', horario: '1:45PM A 5:45PM', salon: 'Sala de Sistemas' },
        { nombre: 'MARKETING DIGITAL CON ÉNFASIS EN E-COMMERCE', docente: 'REYNALDO', horario: '6:00PM A 9:00PM', salon: 'Sala de Diseño' },
        { nombre: 'ANÁLISIS DE DATOS CON PYTHON Y EXCEL', docente: 'JORGE TAJÁN', horario: '6:00PM A 9:00PM', salon: 'Sala de Sistemas' }
    ],
    'hoteleria_turismo': [
        { nombre: 'LENGUAJE DE SEÑAS', docente: 'MARLON CUADRO', horario: '1:45PM A 5:45PM', salon: 'Aula 104' },
        { nombre: 'LENGUAJE DE SEÑAS', docente: 'MARLON CUADRO', horario: '6:00PM A 9:00PM', salon: 'Aula 2D' }
    ],
    'administracion_salud': [
        { nombre: 'PROCESOS DE ADMISIÓN Y FACTURACIÓN EN SERVICIOS DE SALUD', docente: 'ANA CECILIA SABALZA', horario: '1:45PM A 5:45PM', salon: 'Aula 6B' },
        { nombre: 'PROCESOS DE ADMISIÓN Y FACTURACIÓN EN SERVICIOS DE SALUD', docente: 'NARLYS CASTELLÓN', horario: '6:00PM A 9:00PM', salon: 'Aula 2E' }
    ],
    'administracion_empresas': [
        { nombre: 'ALTA GERENCIA', docente: 'YEISON ANILLO', horario: '1:45PM A 5:45PM', salon: 'Aula 4C' },
        { nombre: 'ALTA GERENCIA', docente: 'YEISON ANILLO', horario: '6:00PM A 9:00PM', salon: 'Aula 801' }
    ],
    'mecanica_diesel': [
        { nombre: 'DIAGNÓSTICO EN SISTEMA DE INYECCIÓN ELECTRÓNICA MOTORES DIESEL', docente: 'HERNANDO VEGA', horario: '6:00PM A 9:00PM', salon: 'Aula 6A' }
    ],
    'electronica': [
        { nombre: 'ANÁLISIS DE DATOS CON PYTHON Y EXCEL', docente: 'JORGE TAJÁN', horario: '6:00PM A 9:00PM', salon: 'Sala de Sistemas' }
    ]
};

// ===== ELEMENTOS DEL DOM =====
let carreraSelect, horarioSelect, diplomadoSelect;
let documentoInput, telefonoInput, emailInput, nombresInput;
let horarioHint, diplomadoHint, diplomadoInfo, successMessage;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
});

function initializeElements() {
    // Selects
    carreraSelect = document.getElementById('carrera');
    horarioSelect = document.getElementById('horario');
    diplomadoSelect = document.getElementById('diplomado');
    
    // Inputs
    documentoInput = document.getElementById('documento');
    telefonoInput = document.getElementById('telefono');
    emailInput = document.getElementById('email');
    nombresInput = document.getElementById('nombres');
    
    // Elementos de información
    horarioHint = document.getElementById('horario-hint');
    diplomadoHint = document.getElementById('diplomado-hint');
    diplomadoInfo = document.getElementById('diplomado-info');
    successMessage = document.getElementById('successMessage');
}

function setupEventListeners() {
    // Eventos de selects
    carreraSelect.addEventListener('change', mostrarHorariosDisponibles);
    horarioSelect.addEventListener('change', filtrarPorHorario);
    diplomadoSelect.addEventListener('change', mostrarHorario);
    
    // Eventos de validación
    documentoInput.addEventListener('input', handleDocumentoInput);
    telefonoInput.addEventListener('input', handleTelefonoInput);
    emailInput.addEventListener('input', validarEmail);
    emailInput.addEventListener('blur', validarEmail);
    nombresInput.addEventListener('input', handleNombresInput);
    
    // Evento del formulario
    document.getElementById('diplomadoForm').addEventListener('submit', handleFormSubmit);
}

// ===== MANEJO DE INPUTS =====
function handleDocumentoInput() {
    documentoInput.value = documentoInput.value.replace(/[^0-9]/g, '');
    validarDocumento();
}

function handleTelefonoInput() {
    telefonoInput.value = telefonoInput.value.replace(/[^0-9]/g, '');
    validarTelefono();
}

function handleNombresInput() {
    // Permite letras, espacios, acentos y caracteres especiales del español
    nombresInput.value = nombresInput.value.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\u0020\']/g, '');
    validarNombres();
}

// ===== FUNCIONES DE VALIDACIÓN =====
function validarNombres() {
    const errorText = document.getElementById('nombres-error');
    const nombres = nombresInput.value.trim();
    
    if (nombres.length > 0 && nombres.length < 3) {
        nombresInput.classList.add('error');
        errorText.style.display = 'block';
        return false;
    } else {
        nombresInput.classList.remove('error');
        errorText.style.display = 'none';
        return true;
    }
}

function validarDocumento() {
    const errorText = document.getElementById('documento-error');
    const documento = documentoInput.value.trim();
    
    if (documento.length > 0 && documento.length < 7) {
        documentoInput.classList.add('error');
        errorText.style.display = 'block';
        return false;
    } else {
        documentoInput.classList.remove('error');
        errorText.style.display = 'none';
        return true;
    }
}

function validarTelefono() {
    const errorText = document.getElementById('telefono-error');
    const telefono = telefonoInput.value.trim();
    
    if (telefono.length > 0 && telefono.length !== 10) {
        telefonoInput.classList.add('error');
        errorText.style.display = 'block';
        return false;
    } else {
        telefonoInput.classList.remove('error');
        errorText.style.display = 'none';
        return true;
    }
}

function validarEmail() {
    const errorText = document.getElementById('email-error');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.length > 0 && !emailRegex.test(email)) {
        emailInput.classList.add('error');
        errorText.style.display = 'block';
        return false;
    } else {
        emailInput.classList.remove('error');
        errorText.style.display = 'none';
        return true;
    }
}

// ===== FUNCIONES DE SELECTS DEPENDIENTES =====
function mostrarHorariosDisponibles() {
    const carreraSeleccionada = carreraSelect.value;
    
    // Limpiar selecciones dependientes
    resetHorarioSelect();
    resetDiplomadoSelect();
    
    if (carreraSeleccionada && diplomadosPorCarrera[carreraSeleccionada]) {
        const diplomados = diplomadosPorCarrera[carreraSeleccionada];
        const horariosDisponibles = [...new Set(diplomados.map(d => d.horario))];
        
        horariosDisponibles.forEach(horario => {
            const option = document.createElement('option');
            option.value = horario;
            option.textContent = `HORARIO ${horario}`;
            horarioSelect.appendChild(option);
        });
        
        horarioSelect.disabled = false;
        horarioHint.style.display = 'none';
        diplomadoHint.textContent = 'Seleccione un horario para ver los diplomados disponibles';
    } else {
        horarioSelect.disabled = true;
        horarioHint.style.display = 'block';
        horarioHint.textContent = 'Seleccione una carrera para ver los horarios disponibles';
    }
}

function filtrarPorHorario() {
    const carreraSeleccionada = carreraSelect.value;
    const horarioSeleccionado = horarioSelect.value;
    
    resetDiplomadoSelect();
    
    if (carreraSeleccionada && horarioSeleccionado && diplomadosPorCarrera[carreraSeleccionada]) {
        const diplomados = diplomadosPorCarrera[carreraSeleccionada];
        const diplomadosFiltrados = diplomados.filter(diplomado => diplomado.horario === horarioSeleccionado);
        
        if (diplomadosFiltrados.length > 0) {
            diplomadosFiltrados.forEach((diplomado) => {
                const option = document.createElement('option');
                option.value = `${carreraSeleccionada}_${diplomados.indexOf(diplomado)}`;
                option.textContent = diplomado.nombre;
                diplomadoSelect.appendChild(option);
            });
            diplomadoSelect.disabled = false;
            diplomadoHint.style.display = 'none';
        } else {
            diplomadoSelect.innerHTML = '<option value="">No hay diplomados en este horario</option>';
            diplomadoSelect.disabled = true;
            diplomadoHint.style.display = 'block';
            diplomadoHint.textContent = 'No hay diplomados disponibles en este horario';
        }
    } else {
        diplomadoSelect.disabled = true;
        diplomadoHint.style.display = 'block';
        diplomadoHint.textContent = 'Seleccione carrera y horario para ver los diplomados disponibles';
    }
}

function mostrarHorario() {
    const diplomadoSeleccionado = diplomadoSelect.value;
    const horarioDetails = document.getElementById('horario-details');
    
    if (diplomadoSeleccionado) {
        // Encontrar el último _ para dividir correctamente carrera e índice
        const ultimoGuionBajo = diplomadoSeleccionado.lastIndexOf('_');
        const carrera = diplomadoSeleccionado.substring(0, ultimoGuionBajo);
        const index = diplomadoSeleccionado.substring(ultimoGuionBajo + 1);
        const diplomado = diplomadosPorCarrera[carrera][parseInt(index)];
        
        horarioDetails.innerHTML = `
            <p><strong>Docente:</strong> ${diplomado.docente}</p>
            <p><strong>Horario:</strong> ${diplomado.horario}</p>
            <p><strong>Salón:</strong> ${diplomado.salon}</p>
            <p><strong>Fecha de inicio:</strong> 16 de Mayo 2025</p>
        `;
        
        diplomadoInfo.style.display = 'block';
    } else {
        diplomadoInfo.style.display = 'none';
    }
}

// ===== FUNCIONES AUXILIARES =====
function resetHorarioSelect() {
    horarioSelect.innerHTML = '<option value="">Seleccione un horario</option>';
    horarioSelect.disabled = true;
}

function resetDiplomadoSelect() {
    diplomadoSelect.innerHTML = '<option value="">Primero seleccione el horario</option>';
    diplomadoSelect.disabled = true;
    diplomadoInfo.style.display = 'none';
}

function resetForm() {
    document.getElementById('diplomadoForm').reset();
    resetHorarioSelect();
    resetDiplomadoSelect();
    horarioHint.style.display = 'block';
    
    // Limpiar errores
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.classList.remove('error'));
    
    const errorTexts = document.querySelectorAll('.error-text');
    errorTexts.forEach(el => el.style.display = 'none');
}

// ===== MANEJO DEL FORMULARIO =====
function handleFormSubmit(e) {
    e.preventDefault();
    
    const nombres = nombresInput.value.trim();
    const documento = documentoInput.value.trim();
    const telefono = telefonoInput.value.trim();
    const email = emailInput.value.trim();
    const carrera = carreraSelect.value;
    const horario = horarioSelect.value;
    const diplomado = diplomadoSelect.value;
    const terminos = document.getElementById('terminos').checked;
    
    // Validar todos los campos
    let esValido = true;
    
    if (!validarNombres() || nombres.length < 3) {
        esValido = false;
    }
    
    if (!validarDocumento() || documento.length < 7) {
        esValido = false;
    }
    
    if (!validarTelefono() || telefono.length !== 10) {
        esValido = false;
    }
    
    if (!validarEmail() || !email) {
        esValido = false;
    }
    
    // Validar campos requeridos
    if (!nombres || !documento || !telefono || !email || !carrera || !horario || !diplomado) {
        alert('Por favor complete todos los campos requeridos');
        return;
    }
    
    // Validar términos y condiciones
    if (!terminos) {
        alert('Debe aceptar los términos y condiciones para continuar');
        return;
    }
    
    if (!esValido) {
        alert('Por favor corrija los errores en el formulario antes de continuar');
        return;
    }
    
    // Mostrar mensaje de éxito
    showSuccessMessage();
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
        resetForm();
        successMessage.style.display = 'none';
    }, 3000);
}

function showSuccessMessage() {
    successMessage.style.display = 'block';
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}