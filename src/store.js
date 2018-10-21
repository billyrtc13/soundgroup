/*
    Store
*/

let iData = {}

if (document.querySelector('body>i-data>i')) {
    let objidata = document.querySelector('body>i-data>i')
    if (objidata.getAttribute('bll')) {
        let bll = objidata.getAttribute('bll')
        iData = JSON.parse(bll)
    } else {
        // console.log('sin bll')
    }
} else {
    // console.log('sin i-data')
}

// Instancia de Store
export default {
    state: {
        ancho: 0,
        scrollY: 0,
        usuario: {
            idEnc: iData.idEnc,
            nombre: iData.nombre,
            key: iData.key,
            menu: iData.mcMenu
        },
        mensaje: {
            ver: false,
            texto: '',
            ok: false,
            destino: '/'
        },
        verMenu: false
    },

    mutations: {
        cambiarAcncho (state) {
            state.ancho = window.innerWidth
        },

        cambiarScrollY (state) {
            state.scrollY = window.scrollY
        },

        verOcultarMenu (state) {
            state.verMenu = state.verMenu ? false: true
        },

        asignarMensaje (state, mensaje) {
            state.mensaje = mensaje
        }
    }
}