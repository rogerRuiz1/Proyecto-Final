import express from 'express';
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import indexRouter from './router/index.js'
import {Conectar} from './public/services/conexion.js'

//Creamos la instancia
const app = express();

const __dirname= dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname,'views'))
app.set('views', join(__dirname,'views'))
app.use(indexRouter)

app.use(express.static(join(__dirname,'public'))) // llamando al archivo CSS


app.set('view engine', 'ejs')

Conectar()


app.listen(3000)
console.log("El servidor esta siendo escuchado en el puerto: ", 3000)