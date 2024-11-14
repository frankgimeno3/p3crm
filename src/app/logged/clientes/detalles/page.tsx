"use client"
import PostAuthNav from '@/app/0components/ui-components/logged/PostAuthNav';
import React, { FC } from 'react';

interface DetallesClienteProps {

}

const DetallesCliente: FC<DetallesClienteProps> = ({ }) => {
    return (
        <div>
            <div className='flex flex-col min-h-screen'>
                <PostAuthNav />
                <p>Esta es la ficha de cliente</p>
                {/* información general */}
                <p>Código</p> <p>Tipo de cliente</p><p>Inactivo? (si lo está, el resto está en gris)</p>
                <p>Nombre fiscal</p>
                <p>Nombre comercial</p>
                <p>Agente</p> <p>Subcategorías asignadas por el agente (sirve para filtrar)</p>
                {/* información dirección */}
                <p>País</p>
                <p>Domicilio principal (funciona algorítmicamnte).</p>
                <p>Botón de otras direcciones (puede haber link de otras cuentas)</p>
                <p>Aquí hablar con montse para gestionar el tema de los envíos más adelante</p>
                {/* información de contacto */}
                <p>Email genérico</p><p>Comentario del email</p>
                <p>Teléfono genérico</p><p>Comentario del teléfono</p>
                <p>Página web</p>
                <p>BOTÓN "TODOS LOS CONTACTOS"</p>
                <div>
                    <p>ES DESPLEGABLE Y EDITABLE</p>
                    <p>Pueden ser personas, departamentos, instituciones...</p>
                    <div>
                        <p>NOMBRE DEL CONTACTO</p>
                        <p>Apellidos del contacto</p>
                        <p>Cargo del contacto</p>
                        <p>Sigue trabajando en la empresa?</p>
                        <p>email del contacto</p>
                        <p>Comentarios del contacto</p>
                        <div>
                            <p>TELÉFONOS/MAILS ADICIONALES</p>
                            <p>Forma de contacto</p> <p>Valor</p>
                            <p>Comentarios adicionales</p>
                        </div>
                    </div>
                </div>
                {/* otros datos */}
                <p>Fecha de creación</p>
                <p>Historial modificaciones (desplegable)</p>
                <p>trato</p>
                <p>Nif/cif algorítmicamente según país</p>
                <p>Actividades</p>
                {/* SOBRE FERIAS (MÁS ADELANTE)
            <p>Historial de ferias pasadas</p>
            <p>Interés ferias futuras</p>
            <div>
                <p>Nombre feria</p>
                <p>Razones interés (Ex-expositor, lo dice cliente, sector asociado, mismo país...)</p>
                <p>Expositor? (NO? Entonces visitante? // SI - STAND?)</p>
                <p>Comentarios (por ejemplo, puedes decir quién va a ir)</p>
            </div> */}
            </div>
        </div>
    );
};

export default DetallesCliente;