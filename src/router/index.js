import {Router} from "express"
const router= Router()

router.get('/', (req,res) => res.render('index',{title: 'CV'}));
router.get('/about', (req,res) => res.render('about',{title: 'About me'}));
router.get('/skills', (req,res) => res.render('skills',{title: 'Skills'}));


export default router