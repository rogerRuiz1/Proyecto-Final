import pg from 'pg';
const { Client } = pg;

const config = {
    user: 'hoja_de_vida_user',
    host: 'dpg-csg4epbqf0us73e797sg-a.oregon-postgres.render.com',
    database: 'hoja_de_vida',
    password: 'kQsrs7Fjt0UeQARSF5J3KcWj1ARHTSil',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
};

//FUNCION DE CONEXION
export async function Conectar() {
    const cliente = new Client(config);
    try {
        await cliente.connect();
        console.log("Conectado a la base de Datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    } finally {
        await cliente.end(); // Cierra la conexión
    }
}

// export async function TraerPeliculas() {
//     const cliente = new Client(config);
//     try {
//         await cliente.connect();
//         const res = await cliente.query('SELECT * FROM peliculas');
//         return res.rows;
//     } catch (error) {
//         console.error("Error al traer películas:", error);
//         return []; // Devuelve un arreglo vacío en caso de error
//     } finally {
//         await cliente.end(); // Asegura el cierre de la conexión
//     }
// }