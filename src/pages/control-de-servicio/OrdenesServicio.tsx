import React from 'react'
import useAxios from '../../App/hooks/useAxios'
import DataTable from '../../shared/components/global/DataTable'
import PlantillaData from '../../shared/components/plantilla/PlantillaData'
function OrdenesServicio() {
    const ApiResponse = useAxios('POST' , '/api/ordenes-de-servicio/listar')
    return (
        <PlantillaData title = "Registro de ordenes de servicio" LinkBtn="/control-de-servicio/ordenes-de-servicio/nuevo">
            <DataTable dataSource = {ApiResponse.datos} columnSource = {[
                    'id_orden' , 'remitente' , 'destinatario'  , 'urbanizacion' , 'calle' , 'numero_casa' , 'fecha_envio' , 'estado_orden'
                ]}/>
        </PlantillaData>
    )
}

export default OrdenesServicio
